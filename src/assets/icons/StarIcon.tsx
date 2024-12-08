import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const StarIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}>
    <Path
      fill="#98A2B3"
      d="M13.172 16.67a.753.753 0 0 1-.35-.086L9 14.574l-3.823 2.01a.75.75 0 0 1-1.088-.791l.73-4.257-3.093-3.014a.75.75 0 0 1 .416-1.28l4.274-.62 1.911-3.873a.781.781 0 0 1 1.346 0l1.91 3.872 4.275.621a.75.75 0 0 1 .416 1.28l-3.093 3.014.73 4.257a.749.749 0 0 1-.74.877Z"
    />
  </Svg>
);
export default StarIcon;
