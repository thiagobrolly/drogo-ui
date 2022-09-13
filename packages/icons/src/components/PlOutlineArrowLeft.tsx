import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineArrowLeft = ({
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
    aria-label="PlOutlineArrowLeft"
    {...props}
  >
    <path d="M10.5959 14.504L4.45895 8.34501L10.5959 2.18601L8.70695 0.294006L0.666947 8.34501L8.70695 16.394L10.5959 14.504Z" />
  </svg>
);
