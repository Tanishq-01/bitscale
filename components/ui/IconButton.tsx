import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'ghost',
  size = 'md',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10',
  };

  const variantClasses = {
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    outline: 'border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800',
    solid: 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all duration-200',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
};