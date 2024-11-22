import * as React from "react"
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg"

function Logo(props) {
  return (
    <Svg
      width={100}
      height={68}
      viewBox="0 0 100 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.54 9.09C55.638 2.183 63.202-1.32 70.297.458A15.357 15.357 0 0181.006 8.85L98.48 45.205c3.68 7.657.457 16.847-7.2 20.528-7.657 3.68-16.847.457-20.527-7.2L67.3 51.348l-3.202 7.137c-3.477 7.751-12.58 11.216-20.33 7.738a15.33 15.33 0 01-7.93-8.185l-3.216-6.69-3.202 7.137c-3.477 7.751-12.58 11.216-20.33 7.738-7.751-3.477-11.216-12.58-7.739-20.33L17.861 9.09C20.96 2.184 28.525-1.32 35.62.458A15.357 15.357 0 0146.328 8.85l3.268 6.8 2.944-6.56zM39.018 29.273a3.658 3.658 0 11-7.316 0 3.658 3.658 0 017.316 0zm25.606 3.658a3.658 3.658 0 100-7.317 3.658 3.658 0 000 7.317z"
        fill="url(#paint0_linear_1047_3147)"
      />
      <Rect
        x={43.918}
        y={32.9297}
        width={12.2889}
        height={5.68644}
        rx={2.84322}
        transform="rotate(.218 43.918 32.93)"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1047_3147"
          x1={50.0013}
          y1={0}
          x2={50.0013}
          y2={67.5748}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.465} stopColor="#FF7D37" />
          <Stop offset={1} stopColor="#FF5100" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Logo;
