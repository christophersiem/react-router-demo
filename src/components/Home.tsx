import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Home() {

    const [name, setName] = useState<string>();
    const navigate = useNavigate();
    return (
        <>
            <p>Enter name</p>
            <input type="text" onChange={event=> setName(event.target.value)}/>
            <button onClick={() => navigate('/welcome/' + name)}>Go to welcome page</button>
        </>
    )
}