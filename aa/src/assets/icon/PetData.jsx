import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PetData(props) {
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
        d="M5.25 4.375a3.5 3.5 0 00-3.5 3.5v.875h24.5v-.875a3.5 3.5 0 00-3.5-3.5H5.25z"
        fill="#FF7818"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.25 11.375H1.75v8.75a3.5 3.5 0 003.5 3.5h17.5a3.5 3.5 0 003.5-3.5v-8.75zm-21 4.375a.875.875 0 01.875-.875h7a.875.875 0 110 1.75h-7a.875.875 0 01-.875-.875zm.875 2.625a.875.875 0 000 1.75h3.5a.875.875 0 000-1.75h-3.5z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default PetData
