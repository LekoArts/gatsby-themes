/** @jsx jsx */
/* eslint-disable jsx-a11y/media-has-caption */
import { jsx } from "theme-ui"
import Film from "../icons/film"

type VideoProps = {
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  name?: string
  poster?: string
  src: string
}

const Video = ({ autoplay = false, loop = false, muted = false, name = ``, poster = ``, src }: VideoProps) => (
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
      variant: `video.specimens`,
    }}
  >
    {name && (
      <div sx={{ display: `flex`, alignItems: `center`, mb: 3 }}>
        <Film />
        <div sx={{ fontWeight: `medium`, fontSize: 2 }}>{name}</div>
      </div>
    )}
    <video
      sx={{ width: `100%`, boxShadow: `lg` }}
      poster={poster}
      controls
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      src={src}
    />
  </div>
)

export default Video
