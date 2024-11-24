import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Flag(props) {
  return (
    <Svg
      width={13}
      height={14}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.207 5.817a.393.393 0 01-.264.373L3.15 9.247v2.083a.394.394 0 11-.788 0V2.667a.394.394 0 01.523-.372l9.057 3.15a.394.394 0 01.264.372z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default Flag
