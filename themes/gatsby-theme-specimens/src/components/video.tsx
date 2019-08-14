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
  <div sx={{ variant: `video.default` }}>
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
