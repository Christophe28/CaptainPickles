import React from 'react';

const Products = ({ waste }) => {
    
    return (
        <div className="container-products">
            <ul>
                {
                    waste.map((wasteProducts) => (
                        <li key={wasteProducts.products} onClick={(e) => console.log(wasteProducts.wasteProducts)}>
                            {wasteProducts.products}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Products;