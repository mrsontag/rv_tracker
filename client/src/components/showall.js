import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';


const ShowAll = props => {
    const [rvs, setRvs ] = useState([]);
    useEffect(() => {
        console.log("Ran the use effect!");
        Axios.get("http://127.0.0.1:8000/api/rvs/")
            .then(response => {
                console.log(response.data);
                setRvs(response.data);
            })
            .catch(err => console.log(err));
    }, []);
    
    return (
        <div>
            This should show all, ultimately.
            <ul>
                {rvs.length > 0 && rvs.map((rv, index)=>{
                    return (<li key={index}><Link to={"/rvs/" + rv._id}>{rv.manufacturer + " " + rv.brand + " " + rv.model + " (" + rv.year + ")"}</Link></li>)
                })}
            </ul>
        </div>
    );
};

export default ShowAll;
