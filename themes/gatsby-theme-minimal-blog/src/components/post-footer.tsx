/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"

type PostFooterProps = {
  post: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
    description?: string
    canonicalUrl?: string
    body: string
    excerpt: string
    timeToRead?: number
    banner?: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
}

const PostFooter = ({ post }: PostFooterProps) => null

export default PostFooter
