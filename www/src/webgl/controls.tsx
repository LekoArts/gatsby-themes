import React, { useRef } from "react"
import { useThree, useFrame, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const Controls = (props: any) => {
  const { camera, gl } = useThree()
  const orbitRef = useRef()

  useFrame(() => {
    orbitRef.current.update()
  })

  // @ts-ignore
  return <orbitControls ref={orbitRef} args={[camera, gl.domElement]} {...props} />
}

export default Controls
