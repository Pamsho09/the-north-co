import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./router/App";
import { Provider } from "react-redux";
import { createStore  } from "redux";
import reducer from "./reducers/index";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const initialState = {
  user: {},

  cart: [],
 
  
    meat:[
       {
          id:1,
          title:'Bisteck de res',
          price:"46.25",
          description:"Las carnes rojas forman parte de una gran variedad de platillos deliciosos, pero no siempre compramos el corte adecuado. Por eso te quiero contar cuales son los diferentes tipos de cortes de res para que elijas el mejor.",
          image:"https://placeralplato.com/files/2015/08/carne-vacuna.jpg"
       },
       {
        id:2,
        title:'Bisteck de puerco',
          price:"80.50",
          description:"La carne de cerdo no hace daño. Contiene menos de 2% de grasa en el lomo, mientras que la de res puede tener de 1.5 a 5%",
          image:"https://www.eluniversal.com.mx/sites/default/files/2017/08/09/carne_cerdo.png"
       }
        ],
    "soda":[
       {
          id:3,
          title:'coca',
          price:"15",
          description:"Coca-cola de vidrio de 350 ml",
          image:"https://mui.today/__export/1589466590626/sites/mui/img/2020/05/14/coca-cola-sabor-botella-vidrio.jpg_879108255.jpg"
       },
       {
          id:4,
          title:'Fanta',
          price:"13.50",
          description:"Fanta de naranja de lata 355 ml",
          image:"https://images-na.ssl-images-amazon.com/images/I/41wbkkP3QVL._AC_.jpg"
       }
    ],
  "coffe":[
       {
          id:5,
          title:'Frapuccino',
          price:"40.00",
          description:"Venta Starbucks Café 9.5 Oz Mocha Frappuccino",
          image:"https://images.rappi.com.mx/products/GALLERY_IMAGES/975604063_21.png?d=500x500"
       },
       {
          id:6,
          title:'Andatti',
          price:"26.0",
          description:"Andatti de lata 444 ml",
          image:"https://live.staticflickr.com/6111/6321162515_93f968a736_z.jpg"
       }
    ]
  
};

const store = createStore(reducer, initialState,composeEnhancers);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAS

