/**
 * A lightweight alternative to the classnames library.
 * Combines class names conditionally.
 *
 * @param {...(string|Object|Array)} args - Class names, objects with conditional classes, or arrays
 * @returns {string} Combined class names
 */
export function cn(...args) {
    const classes = [];

    for (const arg of args) {
        if (arg == null) continue;

        const argType = typeof arg;

        if (argType === 'string' || (argType === 'number' && arg)) {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            const inner = cn(...arg);
            if (inner != null && inner !== '') {
                classes.push(inner);
            }
        } else if (argType === 'object') {
            for (const key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}

export default cn;
