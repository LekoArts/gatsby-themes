/** @jsx jsx */
import { jsx } from "theme-ui"
import DownloadIcon from "../icons/download"

type DownloadProps = {
  name: string
  src: string
  bg?: string
  preview?: boolean
  notes?: string
}

const Download = ({ name, src, bg = `white`, preview = true, notes = `` }: DownloadProps) => (
  <a href={src} sx={{ variant: `download.default` }}>
    {name && (
      <div sx={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, flexWrap: `wrap` }}>
        <div sx={{ display: `flex`, alignItems: `center` }}>
          <DownloadIcon />
          <div sx={{ fontWeight: `medium`, fontSize: 2 }}>{name}</div>
        </div>
        {notes && <div sx={{ my: 2, color: `gray.7`, fontSize: 0 }}>{notes}</div>}
      </div>
    )}
    {preview && (
      <div
        sx={{
          mt: 3,
          boxShadow: `lg`,
          borderRadius: `lg`,
          padding: [2, 3],
          backgroundColor: bg,
          img: { maxWidth: `100%` },
          textAlign: `center`,
        }}
      >
        <img src={src} alt={name} />
      </div>
    )}
  </a>
)

export default Download
