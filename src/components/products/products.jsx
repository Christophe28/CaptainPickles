import React from 'react';

const Products = ({ waste, setCurrentWaste }) => {
    
    return (
        <div className="container-products">
            <select 
                name="dropdown-waste" 
                onClick={(e) => {
                    //Déplacer la fonction par après. de plus elle devra comparer et push dans le currentwaste
                    const getWaste = () => {
                        for(let wasteElement of waste) {
                            if(e.target.value === wasteElement.products) {
                                setCurrentWaste(wasteElement.wasteProducts);
                            }
                        }
                    }
                    getWaste();
                }}
            >
                {
                    waste.map((wasteProducts) => (
                        <option 
                            key={wasteProducts.products} 
                            value={wasteProducts.products}
                        >
                            {wasteProducts.products}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default Products;