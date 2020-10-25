import React from "react"
import Img from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import Heart from "./heart"
import "./style.css"

const Instagram = () => {
  const nodes = useInstagram()

  return (
    <div className="instagram-grid">
      {nodes.map((post) => {
        const title = post.caption ? post.caption.split(`#`)[0] : ``
        const date = new Date(post.timestamp * 1000).toLocaleDateString(`de-DE`)

        return (
          <a key={post.id} className="instagram-link-styles" href={`https://www.instagram.com/p/${post.id}/`}>
            <div className="instagram-overlay" />
            <Img fluid={post.localFile.childImageSharp.fluid} />
            <div className="instagram-content">
              <div className="instagram-title">{title}</div>
              <div className="instagram-bottom">
                <span className="instagram-heart">
                  <Heart /> {post.likes}
                </span>
                <span>{date}</span>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Instagram
