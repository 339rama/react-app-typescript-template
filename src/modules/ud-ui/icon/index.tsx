import React, { SVGProps } from 'react';
import { IconsNames } from './types';

export type IconProps = {
  name: IconsNames;
} & Omit<SVGProps<SVGSVGElement>, 'children'>;

/**
 * {@link https://icons.getbootstrap.com/|@see}
 */
const Icon = (props: IconProps) => {
  const {
    name,
    className = '',
    width = 32,
    height = 32,
    fill = 'currentColor',
    ...svgProps
  } = props;
  return (
    <svg
      className={['bi', className].join(' ')}
      width={width}
      height={height}
      fill={fill}
      {...svgProps}
    >
      <use href={`/bootstrap-icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
