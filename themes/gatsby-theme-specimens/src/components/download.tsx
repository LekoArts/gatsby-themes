/** @jsx jsx */
import { jsx } from "theme-ui"
import DownloadIcon from "../icons/download"
import theme from "../theme"

type DownloadProps = {
  name: string
  src: string
  bg?: string
  preview?: boolean
  notes?: string
}

const Download = ({ name, src, bg = `white`, preview = true, notes = `` }: DownloadProps) => (
  <a
    href={src}
    sx={{
      backgroundColor: theme.colors.elementBG,
      display: `block`,
      textDecoration: `none`,
      color: theme.colors.text,
      p: [theme.space[3], theme.space[4]],
      borderRadius: theme.radii.lg,
      boxShadow: theme.shadows.default,
      mb: theme.space[3],
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
      ...theme.download.specimens,
    }}
  >
    {name && (
      <div
        data-name="download-top"
        sx={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, flexWrap: `wrap` }}
      >
        <div sx={{ display: `flex`, alignItems: `center` }}>
          <DownloadIcon />
          <div sx={{ fontWeight: theme.fontWeights.medium, fontSize: theme.fontSizes[2] }}>{name}</div>
        </div>
        {notes && (
          <div sx={{ my: theme.space[2], color: theme.colors.gray[7], fontSize: theme.fontSizes[0] }}>{notes}</div>
        )}
      </div>
    )}
    {preview && (
      <div
        data-name="download-preview"
        sx={{
          mt: theme.space[3],
          boxShadow: theme.shadows.lg,
          borderRadius: theme.radii.lg,
          padding: [theme.space[2], theme.space[3]],
          backgroundColor: bg,
          img: { maxWidth: `100%` },
          textAlign: `center`,
        }}
      >
        <img src={src} alt={`File "${name}" not found`} />
      </div>
    )}
  </a>
)

export default Download
