import React , {Component} from 'react';
import ProductsList from "./Componants/ProductsList/ProductsList";

    class App extends Component {

      state = {

        products:[
          {id:1 , title:"product1" , price:1000 , model:"older" },
          {id:2 , title:"product2" , price:2000 , model:"new"},
          {id:3 , title:"product3" , price:3000 , model:"med"},
          {id:4 , title:"product4" , price:4000 , model:"newst"},
        ],

      } ;

        render(){

                  return   (             
                      <div>
                        <ProductsList  prod = {this.state.products} />
                      </div>
                        );
               }

                 

    } 

export default App ;


