import Box from "./Box.jsx"
import texts from "../assets/texts.json"

function Text({ children }) {
    const key = typeof children === "string" ? children : null;
    const content = texts[key] ? texts[key] : children;
    if (Array.isArray(content)) {
    return (
        <Box content={
            <p>
                {content.map((segment, i) =>
                    segment.highlight ? (
                        <span key={i} className="highlight">{segment.text}</span>
                    ) : (
                        <span key={i}>{segment.text}</span>
                    )
                )}
            </p>
        }
        className={"stretched"} />
    );}
    return (
        <Box
            content={content}
            className="stretched"
        />
    )
}

export default Text