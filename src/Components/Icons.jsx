import { FaRegCircle,FaTimes,FaPen} from "react-icons/fa";

const Icons = ({ic})=>{
    
    switch (ic) {
        case "circle":
            return <FaRegCircle className="icons" />
            break;
        case "cross":
            return <FaTimes className="icons" />
            break;
        default:
            return <FaPen className="icons pen" />
            return;
    }
}

export default Icons;