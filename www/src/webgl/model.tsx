import React from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

function Model({ url }: { url: string }) {
  const draco = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath(`/decoder/gltf/`)
    loader.setDRACOLoader(dracoLoader)
  })

  return <primitive object={draco.scene} />
}

export default Model
