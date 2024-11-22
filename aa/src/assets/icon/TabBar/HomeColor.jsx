import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeColor(props) {
  return (
    <Svg
      width={45}
      height={36}
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.588 9.393v7.29a.607.607 0 01-.608.608h-4.252a.608.608 0 01-.608-.608v-3.949a.304.304 0 00-.303-.303h-3.038a.304.304 0 00-.304.303v3.949a.607.607 0 01-.607.608h-4.253a.608.608 0 01-.607-.608v-7.29c0-.322.128-.631.356-.859l6.075-6.075a1.215 1.215 0 011.718 0l6.075 6.075c.228.228.356.537.356.859zM25.904 30.553v3.035H18.65v-3.035h7.254zm-6.152.855v1.324h5.074v-1.324h-5.074zm6.785-7.36v.856h-8.543v-.855h3.738v-.973h1.114v.973h3.691zm-4.254 1.231c2.215 0 3.445.504 3.445 1.489 0 .896-1.025 1.394-2.882 1.476v.715h4.23v.879h-9.574v-.879h4.23v-.715c-1.857-.082-2.906-.58-2.894-1.476-.012-.985 1.242-1.489 3.445-1.489zm0 .762c-1.465.012-2.262.246-2.262.727 0 .468.797.726 2.262.726 1.477 0 2.262-.258 2.262-.726 0-.48-.785-.715-2.262-.727z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default HomeColor
