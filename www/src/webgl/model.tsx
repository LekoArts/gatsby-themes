import * as THREE from "three"
import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

DRACOLoader.setDecoderPath(`/decoder/gltf/`)
if (typeof window !== `undefined`) {
  DRACOLoader.getDecoderModule()
}

function Model({ url }: { url: string }) {
  const [scene, set] = React.useState()

  React.useMemo(
    () =>
      new GLTFLoader().setDRACOLoader(new DRACOLoader()).load(url, gltf => {
        gltf.scene.traverse(obj => {
          if (obj.type === `Mesh`) {
            obj.material.dispose()
            obj.material = new THREE.MeshPhysicalMaterial({
              roughness: 0.4,
              clearCoat: 1,
              clearCoatRoughness: 0.3,
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
