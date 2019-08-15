/** @jsx jsx */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
import * as THREE from "three"
import { jsx, useColorMode } from "theme-ui"
import { Canvas } from "react-three-fiber"
import Model from "../webgl/model"
import Controls from "../webgl/controls"
import uniforms from "../webgl/uniforms"

uniforms.init(THREE)

const RectAreaLightDecl = ({
  color = `white`,
  intensity = 1.5,
  width = 1000,
  height = 400,
  position = [50, 100, -500],
  lookAt = [0, 0, 0],
}) => (
  <rectAreaLight
    intensity={intensity}
    position={position}
    color={color}
    width={width}
    height={height}
    onUpdate={self => self.lookAt(...lookAt)}
  />
)

const sharedDiskStyles = {
  position: `absolute`,
  left: `50%`,
  top: `50%`,
  transform: `translate(-50%, -50%) scaleY(0.5)`,
  borderRadius: `full`,
}

const ThreeDModel = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  const standardColor = isStrange ? `#E7251D` : `#663399`

  return (
    <div
      sx={{
        width: `550px`,
        height: `400px`,
        marginRight: `-2rem`,
        position: `relative`,
        "&:hover": { cursor: `grab` },
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 150], zoom: 3.5 }}
        onCreated={({ gl }: any) => ((gl.shadowMap.enabled = true), (gl.shadowMap.type = THREE.PCFSoftShadowMap))}
        title="Spin the Model"
        aria-hidden="true"
        focusable="false"
        style={{ background: `transparent`, zIndex: 100 }}
      >
        <ambientLight intensity={0.2} />
        <pointLight intensity={isStrange ? 1.5 : 1} position={[0, 0, 10]} color={standardColor} />
        <RectAreaLightDecl />
        <RectAreaLightDecl
          intensity={isStrange ? 6 : 4}
          width={100}
          height={1000}
          position={[0, 0, 500]}
          color={standardColor}
        />
        <RectAreaLightDecl intensity={1.5} width={500} height={1000} position={[0, 500, 0]} />
        <RectAreaLightDecl intensity={0.5} width={500} height={1000} position={[400, 0, 400]} color="#ffb238" />
        <RectAreaLightDecl intensity={5} width={1000} height={100} position={[-400, 0, 400]} />
        <Model url="/model/dracoGatsby.gltf" />
        <Controls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.6}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      <div sx={{ position: `absolute`, top: 0, left: 0, right: 0, bottom: 0 }}>
        <div
          sx={{
            ...sharedDiskStyles,
            width: `150px`,
            height: `150px`,
            background: (t: { colors: { [key: string]: any } }) => t.colors.model.four,
            zIndex: 4,
          }}
        />
        <div
          sx={{
            ...sharedDiskStyles,
            width: `200px`,
            height: `200px`,
            background: (t: { colors: { [key: string]: any } }) => t.colors.model.three,
            zIndex: 3,
          }}
        />
        <div
          sx={{
            ...sharedDiskStyles,
            width: `450px`,
            height: `450px`,
            background: (t: { colors: { [key: string]: any } }) => t.colors.model.two,
            zIndex: 2,
          }}
        />
        <div
          sx={{
            ...sharedDiskStyles,
            width: `500px`,
            height: `500px`,
            background: (t: { colors: { [key: string]: any } }) => t.colors.model.one,
            zIndex: 1,
          }}
        />
      </div>
    </div>
  )
}

export default ThreeDModel
