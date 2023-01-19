/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import tocbot from "tocbot"
import "tocbot/static/css/tocbot.css"

const Tocbot = () => {
    React.useLayoutEffect(() => {
        tocbot.init({
            tocSelector: ".js-toc",
            contentSelector: ".js-toc-content",
            headingSelector: "h2, h3, h4",
            hasInnerContainers: true,
            collapseDepth: 4,
            scrollSmooth: false,
        });
        return () => {
            tocbot.destroy();
        }
    });

    return (
        <nav className="toc js-toc"
            sx={{
                transform: [null, null, null, null, null, "translateX(100%)"],
                right: [null, null, null, null, null, "calc((100% - 64rem) / 2)"],
                height: "100%",
                width: [null, null, null, null, null, "16rem"],
                p: "10rem 1rem 5rem",
                position: "fixed",
                top: "0",
                display: ["none", "none", "none", "none", "none", "initial"],
                ".toc-link": {
                    textDecoration: "none",
                },
            }}
        >
        </nav>
    )
}

export default Tocbot