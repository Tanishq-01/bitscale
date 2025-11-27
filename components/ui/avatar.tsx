import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  imageSrc?: string;
  imageAlt?: string;
  initials?: string;
  variant?: 'small' | 'medium' | 'large';
  customClass?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  imageAlt = 'User avatar',
  initials,
  variant = 'medium',
  customClass,
}) => {
  const variantStyles = {
    small: 'h-8 w-8 text-xs',
    medium: 'h-10 w-10 text-sm',
    large: 'h-12 w-12 text-base',
  };

  const getDisplayInitials = () => {
    if (initials) return initials;
    return imageAlt.substring(0, 2).toUpperCase();
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold overflow-hidden',
        variantStyles[variant],
        customClass
      )}
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
        />
      ) : (
        <span className="select-none">{getDisplayInitials()}</span>
      )}
    </div>
  );
};