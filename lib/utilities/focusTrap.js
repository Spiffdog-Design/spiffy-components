/**
 * Focus trap utility for dialogs and modals.
 * Traps keyboard focus within a container element.
 *
 * @param {HTMLElement} container - Container element to trap focus within
 * @returns {Function} Cleanup function to remove focus trap
 */
export function createFocusTrap(container) {
    if (!container) return () => {};

    // Find all focusable elements within the container
    const getFocusableElements = () => {
        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(', ');

        return Array.from(container.querySelectorAll(focusableSelectors)).filter((el) => {
            // Filter out hidden elements
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden' && !el.hasAttribute('disabled');
        });
    };

    const handleKeyDown = (event) => {
        if (event.key !== 'Tab') return;

        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) {
            event.preventDefault();
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // If Shift+Tab on first element, move to last
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
        }

        // If Tab on last element, move to first
        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
            return;
        }

        // If focus is outside container, move to first element
        if (!container.contains(document.activeElement)) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    // Focus the first focusable element when trap is activated
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
        // Use setTimeout to ensure the element is rendered
        setTimeout(() => {
            focusableElements[0]?.focus();
        }, 0);
    }

    container.addEventListener('keydown', handleKeyDown);

    return () => {
        container.removeEventListener('keydown', handleKeyDown);
    };
}
