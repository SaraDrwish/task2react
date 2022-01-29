// rcc
import React from "react";
import ProductsDetails from "./ProductsDetails/ProductsDetails";

    function Productslist(props){

 {/* const {prod} = props ; */}
 {/* const prod = props.prod; */}

        return 
                <div>
                        
                    {props.prod.map((products)=> {
                        < index items={products } />
                    }) }
                 
                   
                </div>

    }

export default Productslist ;


