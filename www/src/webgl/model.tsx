import React from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { draco } from "@react-three/drei"

function Model({ url }: { url: string }) {
  const model = useLoader(GLTFLoader, url, draco())

  return <primitive object={model.scene} />
}

export default Model
