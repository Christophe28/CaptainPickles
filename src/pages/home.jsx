//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Functions, data import
import { waste, typesOfWasteContainers  } from '../api/api';

//Components import
import Products from '../components/products/products';
import Trash from '../components/trash/trash';

const Home = () => {
    const [currentWaste, setCurrentWaste] = useState([]);
    console.log(currentWaste);
    return (
        <div className="container-home">
            <h1>Captain Pickles</h1>
            <Products 
                waste={waste}
                setCurrentWaste={setCurrentWaste}
            />
            <Trash 
                trash={typesOfWasteContainers}
            />
        </div>
    );
};

export default Home;