import { useParams } from "react-router"

const Hello = (props) => {
    const {word} = useParams();

    if(isNaN(word)){
        return (
            <div>
                <h1>The word is {word}</h1>
            </div>
        )
    }
    else {
        return false;
} }

export default Hello;