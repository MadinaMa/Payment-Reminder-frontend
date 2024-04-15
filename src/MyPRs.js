import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

export const MyPRs = ({ text, updatingInInput, deletePR }) => {
    console.log(text)
    return (
        <div>
            <p> {text} </p>
            <CiEdit onClick={updatingInInput}/>
            <AiFillDelete onClick={deletePR}/>
        </div>
    )
} 