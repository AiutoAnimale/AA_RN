import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PetAlram(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.572 9.746A1.535 1.535 0 0110.889 9h18.223a1.535 1.535 0 011.318.746l3.46 5.77a.768.768 0 01-.658 1.162H31.52V29.73a1.536 1.536 0 01-1.536 1.536H19.235A1.535 1.535 0 0117.7 29.73v-8.138a.307.307 0 00-.307-.307h-4.76a.307.307 0 00-.308.307v8.138a1.536 1.536 0 01-1.535 1.536h-.768a1.535 1.535 0 01-1.536-1.536V16.678H6.77a.767.767 0 01-.66-1.163l3.463-5.769zM20.77 21.54a.64.64 0 01.64-.638h6.397a.64.64 0 01.64.64v4.478a.64.64 0 01-.64.64h-6.397a.642.642 0 01-.64-.64v-4.48z"
        fill="#5A5A5A"
      />
    </Svg>
  )
}

export default PetAlram
