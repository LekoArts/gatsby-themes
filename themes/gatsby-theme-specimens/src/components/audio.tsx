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
      backgroundColor: `elementBG`,
      p: [3, 4],
      borderRadius: `lg`,
      boxShadow: `default`,
      mb: 3,
      svg: { width: [6, 8], height: [6, 8], mr: 3 },
      ".primary": {
        fill: `currentColor`,
        color: `indigo.6`,
      },
      ".secondary": {
        fill: `currentColor`,
        color: `indigo.3`,
      },
      variant: `audio.specimens`,
    }}
  >
    {name && (
      <div data-name="audio-name" sx={{ display: `flex`, alignItems: `center`, mb: 3 }}>
        <Volume />
        <div sx={{ fontWeight: `medium`, fontSize: 2 }}>{name}</div>
      </div>
    )}
    {desc && (
      <div data-name="audio-desc" sx={{ fontSize: 1, mb: 4 }}>
        {desc}
      </div>
    )}
    <div sx={{ display: `flex`, alignItems: `center` }}>
      {!name && <Volume />}
      <audio
        sx={{ width: `100%`, boxShadow: `lg`, borderRadius: `full` }}
        controls
        aria-label={`Audio file: ${name ? `${name}` : `${src}`}`}
        autoPlay={autoplay}
        loop={loop}
        src={src}
      />
    </div>
  </div>
)

export default Audio
