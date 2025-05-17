
import { Link as RouterLink } from 'react-router-dom';
import React, { memo } from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = memo(({ to, children, className }) => {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
})

export default Link;  