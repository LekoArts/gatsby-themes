/** @jsx jsx */
/* eslint-disable jsx-a11y/media-has-caption */
import { jsx } from "theme-ui"
import Volume from "../icons/volume"

type AudioProps = {
  autoplay?: boolean
  loop?: boolean
  name?: string
  desc?: string
  src: string
}

const Audio = ({ autoplay = false, loop = false, name = ``, desc = ``, src }: AudioProps) => (
  <div
    sx={{
      variant: `audio.default`,
    }}
  >
    {name && (
      <div sx={{ display: `flex`, alignItems: `center`, mb: 3 }}>
        <Volume />
        <div sx={{ fontWeight: `medium`, fontSize: 2 }}>{name}</div>
      </div>
    )}
    {desc && <div sx={{ fontSize: 1, mb: 4 }}>{desc}</div>}
    <div sx={{ display: `flex`, alignItems: `center` }}>
      {!name && <Volume />}
      <audio
        sx={{ width: `100%`, boxShadow: `lg`, borderRadius: `full` }}
        controls
        autoPlay={autoplay}
        loop={loop}
        src={src}
      />
    </div>
  </div>
)

export default Audio
