import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function LogoMark({
  className,
}: {
  className?: string;
}) {
  return (
    <img
      src="/votix.download.png"
      alt="Votix Systems"
      className={cn(
        'h-20 w-auto max-w-[240px] object-contain',
        className
      )}
    />
  );
}

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        'group flex items-center shrink-0',
        className
      )}
      aria-label="Votix Systems — home"
    >
      <img
        src="/votix.download.png"
        alt="Votix Systems"
        className={cn(
          'h-20 w-auto max-w-[240px] object-contain',
          'transition-transform duration-200',
          'group-hover:scale-[1.03]'
        )}
      />
    </Link>
  );
}