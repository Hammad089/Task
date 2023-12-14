import  React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={1080}
      height={2214}
      viewBox="0 0 1080 2214"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#9177f7" stopOpacity={0.102} />
          <Stop offset={0.619} stopColor="#5f69e5" stopOpacity={0.843} />
          <Stop offset={0.82} stopColor="#5967e3" />
          <Stop offset={1} stopColor="#5466e1" />
        </LinearGradient>
      </Defs>
      <Path data-name="Rectangle 30" fill="url(#a)" d="M0 0H1080V2214H0z" />
    </Svg>
  )
}

export default SvgComponent