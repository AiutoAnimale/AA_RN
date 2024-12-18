import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Timer(props) {
  return (
    <Svg
      width={45}
      height={38}
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M32.625 8.976a.675.675 0 01-.453.638L17.1 14.856v3.57a.675.675 0 11-1.35 0V3.576a.675.675 0 01.897-.638l15.525 5.4a.675.675 0 01.453.638zM16.031 27.218c0 1.406.985 2.73 2.578 3.27l-.574.878a4.275 4.275 0 01-2.52-2.308 4.374 4.374 0 01-2.59 2.554l-.62-.879c1.664-.574 2.625-1.98 2.625-3.55V25.94h1.101v1.278zm4.606-1.934v3.164h1.523v.95h-1.523v3.632h-1.114v-7.746h1.114zm.457 9.387v.902h-7.102V32.28h1.137v2.39h5.965zm4.84-7.066c0 1.183.75 2.331 2.085 2.812l-.527.844a3.651 3.651 0 01-2.062-1.992c-.364.966-1.067 1.757-2.086 2.168l-.528-.82c1.325-.54 2.063-1.747 2.063-3.012v-.094H23.05v-.89h1.828v-1.208h1.055v1.207h1.804v.89h-1.804v.095zm5.777-2.297v6.422h-1.055v-2.766h-1.195v2.719h-1.066v-6.2h1.066v2.567h1.195v-2.742h1.055zm0 6.949v3.539h-1.102v-2.637h-6.035v-.902h7.137z"
        fill="#5A5A5A"
      />
    </Svg>
  )
}

export default Timer
