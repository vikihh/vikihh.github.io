import Box from "./Box.jsx"

function Text({ content }) {
    return (
        <Box content={content}
            className={"stretched"} />
    );
}

export default Text