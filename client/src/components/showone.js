import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import { navigate } from '@reach/router';


const ShowOne = props => {
    const [rv, setRv] = useState({}); 
    useEffect(() => {
        Axios.get("http://localhost:8000/api/rvs/" + props.id)
            .then(res => setRv(res.data))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <div>
            <ul>
                <li>Model: { rv.model } </li>
                <li>Manufacturer: { rv.manufacturer } </li>
            </ul>
        </div>
    );
};

export default ShowOne;
