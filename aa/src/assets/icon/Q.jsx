import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Q(props) {
  return (
    <Svg
      width={30}
      height={22}
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.12 11c0 2.344-.764 4.51-2.056 6.262l1.255 1.317a1.525 1.525 0 11-2.21 2.104l-1.19-1.25a10.514 10.514 0 01-6.359 2.127C4.728 21.56 0 16.833 0 11 0 5.168 4.728.44 10.56.44 16.392.44 21.12 5.168 21.12 11zm-3.67 0a6.858 6.858 0 01-.977 3.54l-1.333-1.399a1.526 1.526 0 00-2.21 2.104l1.432 1.503A6.89 6.89 0 1117.451 11zm9.608 10.56a1.98 1.98 0 100-3.96 1.98 1.98 0 000 3.96z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default Q
