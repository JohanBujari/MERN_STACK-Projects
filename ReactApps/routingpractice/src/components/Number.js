import { useParams } from "react-router";


const Number = ({props}) =>{
    const {number} = useParams();
    if(isNaN(number)){
        return false;
    }
    else{
    return (
        <div className="number">
            <h1>The number is {number}</h1>
        </div>
    )
    }
}

export default Number;