import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ViewPw(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.82 8.822a1.667 1.667 0 002.358 2.357m2.723 2.715A7.264 7.264 0 0110 15c-3 0-5.5-1.667-7.5-5 1.06-1.767 2.26-3.065 3.6-3.895m2.383-.955A7.546 7.546 0 0110 5c3 0 5.5 1.667 7.5 5a13.81 13.81 0 01-1.782 2.392M2.5 2.5l15 15"
        stroke="#141414"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ViewPw
