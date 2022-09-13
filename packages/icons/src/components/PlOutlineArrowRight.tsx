import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineArrowRight = ({
  color = '#215aff',
  size = 18,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 17"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineArrowRight"
    {...props}
  >
    <path d="M0.947021 2.186L7.08402 8.345L0.947021 14.504L2.83602 16.396L10.876 8.345L2.83602 0.295996L0.947021 2.186Z" />
  </svg>
);
