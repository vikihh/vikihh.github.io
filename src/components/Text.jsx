import Box from "./Box.jsx"
import "../App.css"
import texts from "../assets/texts.json"

const sections = {
    "intro": texts.intro,
    "education": texts.education,
    "internship": texts.internship
};

function Text({ content }) {
    return (
        <Box content={
            <p>
                {sections[content].map((segment, i) =>
                    segment.highlight ? (
                        <span key={i} className="highlight">{segment.text}</span>
                    ) : (
                        <span key={i}>{segment.text}</span>
                    )
                )}
            </p>
        }
            className={"stretched"} />
    );
}

export default Text