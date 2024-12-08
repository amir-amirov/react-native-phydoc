import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';
const DotIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={5}
    fill="none"
    {...props}>
    <Circle cx={2} cy={2.5} r={2} fill="#98A2B3" />
  </Svg>
);
export default DotIcon;
