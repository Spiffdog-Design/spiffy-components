import { forwardRef } from 'react';
import { Badge } from '@/components';

export const ToggleBadge = forwardRef(({ appearance, enabled, ...props }, ref) => (
    <Badge ref={ref} appearance={enabled === true ? 'solid' : 'basic'} mode="toggle" {...props} />
));
ToggleBadge.displayName = 'ToggleBadge';
