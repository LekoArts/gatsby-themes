/** @jsx jsx */
/* eslint-disable jsx-a11y/media-has-caption */
import { jsx } from "theme-ui"
import Volume from "../icons/volume"
import theme from "../theme"

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
      backgroundColor: theme.colors.elementBG,
      p: [theme.space[3], theme.space[4]],
      borderRadius: theme.radii.lg,
      boxShadow: theme.shadows.default,
      mb: theme.space[3],
      color: theme.colors.text,
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
      ...theme.audio.specimens,
    }}
  >
    {name && (
      <div data-name="audio-name" sx={{ display: `flex`, alignItems: `center`, mb: theme.space[3] }}>
        <Volume />
        <div sx={{ fontWeight: theme.fontWeights.medium, fontSize: theme.fontSizes[2] }}>{name}</div>
      </div>
    )}
    {desc && (
      <div data-name="audio-desc" sx={{ fontSize: theme.fontSizes[1], mb: theme.space[4] }}>
        {desc}
      </div>
    )}
    <div sx={{ display: `flex`, alignItems: `center` }}>
      {!name && <Volume />}
      <audio
        sx={{ width: `100%`, boxShadow: theme.shadows.lg, borderRadius: theme.radii.full }}
        controls
        aria-label={`Audio file: ${name || src}`}
        autoPlay={autoplay}
        loop={loop}
        src={src}
      />
    </div>
  </div>
)

export default Audio
