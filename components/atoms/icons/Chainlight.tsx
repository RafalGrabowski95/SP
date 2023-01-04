import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const SvgChainlight = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.4}
      stroke="#134F58"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14.696 25.19V12.43l-4.84-4.803M17.74 25.082v-12.76l4.84-4.802" />
    </G>
    <Path
      d="m20.591 13.495 4.84-4.802M7 8.52l4.84 4.802"
      stroke="#134F58"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgChainlight;
