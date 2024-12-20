import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const UnFilledProgress = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={6}
    fill="none"
    {...props}>
    <Rect width={28} height={6} fill="#ECEBFF" rx={3} />
  </Svg>
);
export default UnFilledProgress;
