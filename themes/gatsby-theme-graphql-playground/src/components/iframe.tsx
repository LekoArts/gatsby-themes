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
      data-testid={`iFrame-${title}`}
      sx={{ border: `none`, position: `absolute`, top: 0, left: 0, bottom: 0, right: 0 }}
    />
  )
}

export default IFrame
