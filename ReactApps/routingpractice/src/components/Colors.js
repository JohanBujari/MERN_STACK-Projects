import { useParams } from "react-router-dom";

const Colors = (props) => {
    const {word, wordColor, backgroundColor} = useParams();
    const styling = {
        color: `${wordColor}`,
        backgroundColor: `${backgroundColor}`
    }

    return (
    <div>
         <h1 style={styling}>The word is {word} </h1>
    </div>
    )
}

export default Colors;