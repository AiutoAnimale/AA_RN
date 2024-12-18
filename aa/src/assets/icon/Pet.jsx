import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pet(props) {
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
        d="M6.956 25.2h11.242v-2.1a3.5 3.5 0 00-3.5-3.5h-1.4a.7.7 0 010-1.4h1.4a4.9 4.9 0 014.9 4.9v2.1h.35c.661 0 1.26-.267 1.694-.7h.056v-.057a2.38 2.38 0 00.651-1.645V12.144c2.254-.09 3.602-2.59 2.398-4.533l-.702-1.134a2.968 2.968 0 00-2.523-1.405h-2.01v-.89a1.38 1.38 0 00-1.38-1.381 3.423 3.423 0 00-3.421 3.424v4.839c-1.79.176-3.14 1.022-4.133 2.214-.616.74-1.09 1.608-1.456 2.518a7.019 7.019 0 00-.65 2.079l-.018.082c-.386 1.655-.522 3.301-.564 4.525-.017.524-.017.974-.011 1.319h-.923a2.76 2.76 0 01-2.016-4.644l1.288-1.382a5.026 5.026 0 00-.12-6.977L4.844 9.533a.7.7 0 10-.99.99l1.264 1.264a3.622 3.622 0 01.087 5.033l-1.288 1.382a4.162 4.162 0 003.04 6.999z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default Pet
