import Box from "./Box.jsx"
import texts from "../assets/texts.json"

function renderTextWithHighlights(segment, i) {
    return segment.text.split('\n').flatMap((line, j) => [
        <span key={`${i}-${j}`} className={segment.highlight ? 'highlight' : ''}>
            {line}
        </span>,
        j < segment.text.split('\n').length - 1 && <br key={`br-${i}-${j}`} />
    ]);
}

function Text({ children }) {
    const key = typeof children === "string" ? children : null;
    const content = texts[key] ? texts[key] : children;
    if (Array.isArray(content)) {
        return (
            <Box content={
                <p>
                    {content.flatMap((segment, i) => renderTextWithHighlights(segment, i))}
                </p>
            }
            className={"stretched"} />
        );
    }
    return (
        <Box
            content={content}
            className="stretched"
        />
    )
}

export default Text