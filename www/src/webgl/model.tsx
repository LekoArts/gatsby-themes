import * as THREE from "three"
import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

function Model({ url }: { url: string }) {
  const [scene, set] = React.useState()

  React.useMemo(
    () =>
      new GLTFLoader().setDRACOLoader(new DRACOLoader().setDecoderPath(`/decoder/gltf/`)).load(url, (gltf) => {
        gltf.scene.traverse((obj) => {
          if (obj.type === `Mesh`) {
            obj.material.dispose()
            obj.material = new THREE.MeshPhysicalMaterial({
              roughness: 0.4,
              clearcoat: 1,
              clearcoatRoughness: 0.3,
              color: obj.material.color,
            })
          }
        })
        set(gltf.scene)
      }),
    [url]
  )

  return scene ? <primitive object={scene} /> : null
}

export default Model
