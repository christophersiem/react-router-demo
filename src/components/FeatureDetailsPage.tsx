import {useParams} from "react-router-dom";

export default function FeatureDetailsPage() {

    const params = useParams();

    return (

        <p>You are on the detailspage with the feature of id: {params.id}</p>
    )
}