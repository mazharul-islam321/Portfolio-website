import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    // console.log(projects);
    return [projects];
};

export default useProjects;
