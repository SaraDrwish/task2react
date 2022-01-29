// rcc
import React from "react";
import ProductsDetails from "../ProductsDetails/ProductsDetails";

    function ProductsList(props){

       const {prod} = props ;
         // const prod = props.prod; 

        return (
                <div>
                        
                    {prod.map((products)=> {
                        return < ProductsDetails item = {products} /> 
                    }) }

                </div>
        );

    }

export default ProductsList ;


