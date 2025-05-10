import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Rect width={32} height={32} fill="#EFF2F5" rx={16} />
    <Path
      fill="#667085"
      fillRule="evenodd"
      d="m14.735 16-4.102-4.102a.894.894 0 1 1 1.265-1.265L16 14.735l4.102-4.102a.894.894 0 1 1 1.265 1.265L17.265 16l4.102 4.102a.894.894 0 1 1-1.265 1.265L16 17.265l-4.102 4.102a.894.894 0 1 1-1.265-1.265L14.735 16Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CloseIcon;
