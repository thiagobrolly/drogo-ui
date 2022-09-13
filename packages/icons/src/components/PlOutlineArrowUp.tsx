import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineArrowUp = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 16.102 9.929"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineArrowUp"
    {...props}
  >
    <path
      d="m1.892 10.31 6.159-6.137 6.159 6.137 1.892-1.889L8.051.381.002 8.421l1.89 1.889Z"
      data-name="\u21B3Color"
    />
  </svg>
);
