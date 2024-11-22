import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommunityColor(props) {
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
        d="M17.011 12.67a.34.34 0 01-.337.355H12.95a.675.675 0 01-.658-.52.705.705 0 01.137-.585 5.72 5.72 0 012.293-1.805 3.375 3.375 0 115.607-3.02.333.333 0 01-.191.352 5.407 5.407 0 00-3.128 5.224zm15.356-.751a5.718 5.718 0 00-2.288-1.804 3.375 3.375 0 10-5.607-3.02.333.333 0 00.191.352 5.407 5.407 0 013.138 4.903c0 .108 0 .215-.01.32a.338.338 0 00.337.355h3.723a.675.675 0 00.658-.52.703.703 0 00-.137-.586h-.005zm-7.509 3.643a4.05 4.05 0 10-4.925 0 6.086 6.086 0 00-2.842 2.526.675.675 0 00.585 1.012h9.45a.676.676 0 00.585-1.012 6.088 6.088 0 00-2.847-2.526h-.006zM7.145 26.362c-.012 3.094-1.02 5.848-4.747 7.746l-.62-.843c1.84-.944 2.976-2.075 3.609-3.41l-3.399.328-.175-.961 3.925-.246a8.42 8.42 0 00.305-1.711H2.352v-.903h4.793zm3.386-1.066v10.5H9.43V30.37H7.12v-.914H9.43v-4.16h1.101zm11.227 6v.914h-2.356v3.645H18.29V32.21h-2.637v3.645H14.54V32.21h-2.39v-.914h9.609zm-1.207-5.45v4.137h-7.195v-4.136h7.195zm-6.106.891v2.356h4.992v-2.356h-4.992zm16.805-1.441v10.5h-1.113v-10.5h1.113zm-6.973 1.02v5.847c1.53-.012 3.141-.135 4.828-.48l.153.937c-1.863.375-3.551.504-5.203.504h-.88v-6.809h1.102zm14.461-.094v.914h-4.09v2.027h3.692v.89h-3.692v2.356c1.84-.006 3.164-.082 4.723-.328l.117.902c-1.664.27-3.105.329-5.086.329h-.855v-7.09h5.191zm2.895-.926v10.5h-1.125v-10.5h1.125z"
        fill="#FF7818"
      />
    </Svg>
  )
}

export default CommunityColor