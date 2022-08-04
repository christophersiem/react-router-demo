import {useNavigate} from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();
    const id = "7"

    return (
        <>
            <p>Welcome Home!</p>
            <button onClick={() => navigate('/feature/' + id)}>Go to feature details page with id 5</button>
        </>
    )
}