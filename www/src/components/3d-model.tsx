/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls } from "@react-three/drei/core/OrbitControls"
import { Shadow } from "@react-three/drei/core/Shadow"
import Model from "../webgl/model"

const RectAreaLightDecl = ({
  color = `white`,
  intensity = 1,
  width = 650,
  height = 650,
  position = [50, 100, -400],
  lookAt = [0, 0, 0],
}) => (
  <rectAreaLight
    intensity={intensity}
    position={[position[0], position[1], position[2]]}
    color={color}
    width={width}
    height={height}
    onUpdate={(self) => self.lookAt(lookAt[0], lookAt[1], lookAt[2])}
  />
)

const sharedDiskStyles = {
  position: `absolute`,
  left: `50%`,
  top: `50%`,
  transform: `translate(-50%, -50%) scaleY(0.5)`,
  borderRadius: `full`,
}

const Disks = () => (
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
)

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
        canvas: {
          outline: `none`,
        },
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 150], zoom: 3.5 }}
        shadowMap
        colorManagement
        title="Spin the Model"
        aria-label="Schematic 3D model of a Gatsby theme"
        sx={{ background: `transparent`, zIndex: 100 }}
      >
        <RectAreaLightDecl />
        <RectAreaLightDecl
          intensity={isStrange ? 5 : 3}
          width={200}
          height={1000}
          position={[0, 0, 500]}
          color={standardColor}
        />
        <RectAreaLightDecl color="#bfdbee" position={[50, 0, 400]} />
        <pointLight intensity={isStrange ? 2 : 1.5} position={[0, 0, 10]} color={standardColor} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Shadow color="#000" scale={[100, 100, 1]} rotation={[-Math.PI / 2, 0, 0]} opacity={0.5} position={[0, 0, 0]} />
        <OrbitControls
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
      <Disks />
    </div>
  )
}

export default ThreeDModel
