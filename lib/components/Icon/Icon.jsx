// Import icons individually for tree-shaking
// Only icons imported here will be included in the bundle
// To add new icons, import them here and add to iconRegistry below
import {
    Bell,
    Check,
    CheckCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Heart,
    Home,
    Info,
    Mail,
    Minus,
    Plus,
    Search,
    Settings,
    Star,
    User,
    X,
} from 'lucide-react';
import { forwardRef, useMemo } from 'react';
import { cn } from '@/utilities';

import styles from './Icon.module.css';

/**
 * Icon registry - Add commonly used icons here for tree-shaking.
 * Icons are imported individually at the top of the file to ensure tree-shaking works.
 *
 * IMPORTANT: When adding new icons:
 * 1. Import it at the top: import { IconName } from 'lucide-react';
 * 2. Add it to the registry below: 'icon-name': IconName
 * 3. TypeScript will automatically infer the type from ICON_NAMES below
 *
 * Note: For tree-shaking to work, you must import icons individually,
 * not from a barrel export like `import * as Icons from 'lucide-react'`
 */
const iconRegistry = {
    // Navigation
    'chevron-right': ChevronRight,
    'chevron-left': ChevronLeft,
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'angle-right': ChevronRight, // Alias
    'angle-left': ChevronLeft, // Alias
    'angle-down': ChevronDown, // Alias
    'angle-up': ChevronUp, // Alias

    // Actions
    plus: Plus,
    minus: Minus,
    x: X,
    xmark: X, // Alias
    check: Check,
    'check-circle': CheckCircle,

    // Common
    home: Home,
    user: User,
    settings: Settings,
    search: Search,
    bell: Bell,
    mail: Mail,
    heart: Heart,
    star: Star,
    info: Info,
};

/**
 * Frozen object containing all registered icon names.
 * This object provides IntelliSense support for icon names in JavaScript projects.
 *
 * @type {Readonly<Record<string, true>>}
 * @readonly
 */
export const ICON_NAMES = Object.freeze(
    Object.keys(iconRegistry).reduce(
        (acc, key) => {
            acc[key] = true;
            return acc;
        },
        /** @type {Record<string, true>} */ ({}),
    ),
);

/**
 * Icon component that wraps Lucide React icons with tree-shaking support.
 *
 * Icons must be registered in the iconRegistry above to be used.
 * Only registered icons will be included in the bundle (tree-shaking).
 *
 * IntelliSense support: Modern IDEs (VS Code, WebStorm) can provide autocomplete
 * for icon names based on the ICON_NAMES object and JSDoc annotations.
 *
 * Note: When adding new icons, also update the IconName typedef below to maintain
 * full IntelliSense support. The union type should match all keys in iconRegistry.
 *
 * @typedef {'chevron-right' | 'chevron-left' | 'chevron-down' | 'chevron-up' | 'angle-right' | 'angle-left' | 'angle-down' | 'angle-up' | 'plus' | 'minus' | 'x' | 'xmark' | 'check' | 'check-circle' | 'home' | 'user' | 'settings' | 'search' | 'bell' | 'mail' | 'heart' | 'star' | 'info'} IconName
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} IconSize
 *
 * @param {Object} props
 * @param {IconName} props.name - Name of the icon (must be registered in iconRegistry)
 * @param {IconSize} [props.size='md'] - Size of the icon
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.SVGProps<SVGSVGElement>} props - Additional SVG props
 * @param {React.Ref<SVGSVGElement>} ref
 */
export const Icon = forwardRef(function Icon({ name, size = 'md', className, ...props }, ref) {
    const IconComponent = useMemo(() => {
        if (!name) return null;

        const icon = iconRegistry[name];

        if (!icon) {
            console.warn(
                `Icon "${name}" not found in registry. ` +
                    `Available icons: ${Object.keys(iconRegistry).join(', ')}. ` +
                    `To add this icon, import it from 'lucide-react' and add it to the iconRegistry.`,
            );
            return null;
        }

        return icon;
    }, [name]);

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent ref={ref} className={cn(styles['sc-icon'], styles[`sc-icon-${size}`], className)} {...props} />
    );
});

Icon.displayName = 'Icon';

/**
 * Register a custom icon in the registry.
 * This allows you to add icons at runtime or extend the component.
 *
 * Note: Runtime-registered icons won't have IntelliSense support.
 * For better DX, add icons to the iconRegistry above.
 *
 * @param {string} name - Icon name (kebab-case)
 * @param {React.ComponentType} IconComponent - The Lucide icon component
 */
Icon.register = (name, IconComponent) => {
    iconRegistry[name] = IconComponent;
};

/**
 * Get all registered icon names
 * Useful for debugging or generating documentation
 *
 * @returns {readonly string[]} Array of registered icon names
 */
Icon.getRegisteredNames = () => {
    return Object.keys(iconRegistry);
};
