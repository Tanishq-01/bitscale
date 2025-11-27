'use client';

import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const DropdownContext = createContext<{
  close: () => void;
} | null>(null);

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
  onClose?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  className,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Trigger animation
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <DropdownContext.Provider value={{ close }}>
      <div ref={dropdownRef} className="relative inline-block">
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
        {isOpen && (
          <div
            ref={menuRef}
            className={cn(
              'absolute z-50 mt-2 min-w-[200px] rounded-lg border border-gray-200 bg-white p-1 shadow-lg transition-all duration-200 ease-out dark:border-gray-700 dark:bg-gray-800',
              align === 'right' ? 'right-0' : 'left-0',
              isAnimating
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-1 scale-95',
              className
            )}
            style={{
              transformOrigin: align === 'right' ? 'top right' : 'top left',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
};

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  closeOnClick?: boolean;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  className,
  closeOnClick = true,
}) => {
  const context = useContext(DropdownContext);

  const handleClick = () => {
    onClick?.();
    if (closeOnClick && context) {
      context.close();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
        className
      )}
    >
      {children}
    </button>
  );
};