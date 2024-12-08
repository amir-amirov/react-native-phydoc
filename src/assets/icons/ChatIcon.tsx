import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const ChatIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={44}
    fill="none"
    {...props}>
    <Rect width={50} height={42} x={1} y={1} fill="#fff" rx={21} />
    <Rect
      width={50}
      height={42}
      x={1}
      y={1}
      stroke="#D0D5DD"
      strokeWidth={2}
      rx={21}
    />
    <Path
      fill="#101828"
      d="M22.667 21.167a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666Zm3.333 0a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666Zm3.333 0a.833.833 0 1 0 0 1.665.833.833 0 0 0 0-1.665ZM26 13.667A8.333 8.333 0 0 0 17.667 22a8.242 8.242 0 0 0 1.883 5.275l-1.667 1.667a.834.834 0 0 0-.175.908.835.835 0 0 0 .792.483H26a8.334 8.334 0 0 0 0-16.666Zm0 15h-5.492l.775-.775a.833.833 0 0 0 .25-.592.833.833 0 0 0-.25-.583A6.667 6.667 0 1 1 26 28.667Z"
    />
  </Svg>
);
export default ChatIcon;
