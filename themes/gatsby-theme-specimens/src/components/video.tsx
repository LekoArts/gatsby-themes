/** @jsx jsx */
/* eslint-disable jsx-a11y/media-has-caption */
import { jsx } from "theme-ui"
import Film from "../icons/film"
import theme from "../theme"

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
      backgroundColor: theme.colors.elementBG,
      p: [theme.space[3], theme.space[4]],
      borderRadius: theme.radii.lg,
      boxShadow: theme.shadows.default,
      mb: theme.space[3],
      color: theme.colors.black,
      svg: {
        width: [theme.sizes[`6`], theme.sizes[`8`]],
        height: [theme.sizes[`6`], theme.sizes[`8`]],
        mr: theme.space[3],
      },
      ".primary": {
        fill: `currentColor`,
        color: theme.colors.indigo[6],
      },
      ".secondary": {
        fill: `currentColor`,
        color: theme.colors.indigo[3],
      },
      ...theme.video.specimens,
    }}
  >
    {name && (
      <div sx={{ display: `flex`, alignItems: `center`, mb: theme.space[3] }}>
        <Film />
        <div sx={{ fontWeight: theme.fontWeights.medium, fontSize: 2 }}>{name}</div>
      </div>
    )}
    <video
      aria-label={`Video file: ${name || src}`}
      sx={{ width: `100%`, boxShadow: theme.shadows.lg }}
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
