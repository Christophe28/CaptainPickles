//React import
import React from 'react';

//Functions, data import
import { waste } from '../api/api';

//Components import
import Products from '../components/products';

const Home = () => {

    return (
        <div className="container-home">
            <h1>Captain Pickles</h1>
            <Products 
                waste={waste}
            />
        </div>
    );
};

export default Home;