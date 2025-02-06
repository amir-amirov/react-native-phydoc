import Svg, {SvgProps, Path} from 'react-native-svg';
const AppointmentIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}>
    <Path
      fill={props.color}
      d="M8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
    />
    <Path
      //   fill="#667085"
      fill={props.color}
      fillRule="evenodd"
      d="M7 2a1 1 0 0 1 2 0v1h6V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2Zm-3 9v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9H4Zm16-2H4V6a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V5h6v1a1 1 0 1 0 2 0V5h2a1 1 0 0 1 1 1v3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default AppointmentIcon;
