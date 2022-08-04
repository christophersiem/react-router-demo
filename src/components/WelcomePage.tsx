import {useParams} from "react-router-dom";

export default function WelcomePage() {

    const {name} = useParams();

    return (

        <p>Welcome {name}</p>
    )
}