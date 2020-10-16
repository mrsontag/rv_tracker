import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';

const CreateNew = props => {
    const [manufacturer, setManufacturer ] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel ] = useState("");
    const [year, setYear ] = useState(2020);
    
    const submitForm = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/rvs/new/", {
            manufacturer: manufacturer,
            brand: brand,
            model: model,
            year: year
        })
        .then((res)=> console.log(res.data))
        .catch((err) => console.log(err));
    }

    return (
        <form onSubmit={ submitForm }>
            <input type="text" name="manufacturer" value={ manufacturer } onChange={(e) => setManufacturer(e.target.value)} />
            <input type="text" name="brand" value={ brand } onChange={(e) => setBrand(e.target.value)} />
            <input type="text" name="model" value={ model } onChange={(e) => setModel(e.target.value)} />
            <input type="text" name="year" value={ year } onChange={(e) => setYear(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateNew;
