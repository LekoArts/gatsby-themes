/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Resizable as ResizableWrapper } from "re-resizable"

type ResizableProps = {
  children: React.ReactNode
}

const Resizable = ({ children }: ResizableProps) => {
  const [height, setHeight] = React.useState(700)

  return (
    <ResizableWrapper
      sx={{ my: 4, boxShadow: `lg` }}
      size={{ width: `100%`, height }}
      minHeight={300}
      onResizeStop={(e, direction, ref, d) => {
        setHeight(height + d.height)
      }}
      enable={{
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      handleStyles={{
        bottom: {
          height: 10,
          backgroundColor: `#2E3748`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23bcbddf' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          bottom: `-10px`,
          borderBottomLeftRadius: `5px`,
          borderBottomRightRadius: `5px`,
        },
      }}
    >
      {children}
    </ResizableWrapper>
  )
}

export default Resizable
