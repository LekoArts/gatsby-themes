import React, { useRef } from "react"
import { useThree, useRender, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const Controls = (props: any) => {
  const { camera, canvas } = useThree()
  const ref = useRef()

  useRender(() => {
    // @ts-ignore
    // eslint-disable-next-line no-unused-expressions
    ref.current && ref.current.update()
  })

  // @ts-ignore
  return <orbitControls ref={ref} args={[camera, canvas]} {...props} />
}

export default Controls
