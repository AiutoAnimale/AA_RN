import * as React from "react"
import Svg, { Path } from "react-native-svg"

function My(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.749 7a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zM4.375 23.456a9.625 9.625 0 0119.248 0 .876.876 0 01-.51.81 21.796 21.796 0 01-9.114 1.984c-3.25 0-6.339-.71-9.114-1.983a.875.875 0 01-.51-.811z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default My
