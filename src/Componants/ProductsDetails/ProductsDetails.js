import React from "react";


  function ProductsDetails(props){

    const {item} = props ;

    //const {id,title,price} = props;

      return (

   // {iteem.id}

      <div> {item.id } {item.title} {item.price} {item.model} </div>
      );
    }
    

export default ProductsDetails ;
