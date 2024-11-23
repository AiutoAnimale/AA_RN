import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Logout(props) {
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
        d="M19.25 4.375A1.75 1.75 0 0121 6.125v15.75a1.75 1.75 0 01-1.75 1.75h-7a1.75 1.75 0 01-1.75-1.75V17.5a.875.875 0 10-1.75 0v4.375a3.5 3.5 0 003.5 3.5h7a3.5 3.5 0 003.5-3.5V6.125a3.5 3.5 0 00-3.5-3.5h-7a3.5 3.5 0 00-3.5 3.5V10.5a.875.875 0 101.75 0V6.125a1.75 1.75 0 011.75-1.75h7zM6.742 9.882a.875.875 0 00-1.237 0l-3.5 3.5a.875.875 0 000 1.236l3.5 3.5a.875.875 0 001.237-1.236l-2.007-2.007h12.763a.875.875 0 100-1.75H4.736l2.007-2.007a.875.875 0 000-1.236z"
        fill="#FF3B32"
      />
    </Svg>
  )
}

export default Logout
