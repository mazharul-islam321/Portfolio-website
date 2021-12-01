import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Details = () => {
    const { id } = useParams();
    const [projects] = useAuth();
    const value = projects.find((project) => project.id == id);
    console.log(value);

    return (
        <div>
            <img src={value.img} alt="" />
            <h2>{value.name}</h2>
            <p>{value.desc}</p>
        </div>
    );
};

export default Details;
