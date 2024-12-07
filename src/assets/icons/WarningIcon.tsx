import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const WarningIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#DC6803"
      d="m22.7 17.5-8.1-14c-.8-1.4-2.7-1.9-4.1-1.1-.5.3-.9.7-1.1 1.1l-8.1 14c-.8 1.4-.3 3.3 1.1 4.1.5.3 1 .4 1.5.4H20c1.7 0 3-1.4 3-3 .1-.6-.1-1.1-.3-1.5ZM12 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-5c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4Z"
    />
  </Svg>
);
export default WarningIcon;
