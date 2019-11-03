/** @jsx jsx */
import { jsx } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

type IFrameProps = {
  query: string
  title: string
}

const IFrame = ({ query, title }: IFrameProps) => {
  const { graphiQLUrl } = useSiteMetadata()

  return (
    <iframe
      title={title}
      src={`${graphiQLUrl}?query=${query}`}
      width="100%"
      height="100%"
      sx={{ border: `none`, minHeight: `600px`, boxShadow: `lg`, my: 3 }}
    />
  )
}

export default IFrame
