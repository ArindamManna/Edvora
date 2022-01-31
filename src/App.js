import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Product from "./components/Product";
import fakedata from "./data";
function App(props) {
  let [data, set_data] = useState([]);
  let fetch_data = async () => {
    try {
      let res = await fetch("https://assessment-edvora.herokuapp.com");
      set_data(await res.json());
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("Error: " + err.message+"So, I used dummy data for this app");
      // alert()
      set_data(fakedata);
    }
  };
  useEffect(() => {
    fetch_data();
  }, []);

    // for sorting
    let [selected, set_selected] = useState({
      product: [false, "Product"],
      state: [false, "State"],
      city: [false, "City"],
    });
    // for data filtaring
  let states = new Set();
  let cities = new Set();
  let products = new Set();
  data.map((val) => {
    products.add(val.product_name);
    if (selected.product[0]) {
      if (selected.product[1]===val.product_name) {
        states.add(val.address.state);
      }
    }else {
      states.add(val.address.state);
    }

    if (selected.state[0]) {
      if (selected.state[1]===val.address.state) {
        cities.add(val.address.city);
      }
    }else {
      cities.add(val.address.city);
    }
    
    
    
  });



  // sorting data for dropdown list
  let stateArr = new Array();
  stateArr.push("State");
  for (const val of states.values()) {
    stateArr.push(val);
  }
  let citiesArr = new Array();
  citiesArr.push("City");
  for (const val of cities.values()) {
    citiesArr.push(val);
  }
  let productsArr = new Array();
  productsArr.push("Product");
  for (const val of products.values()) {
    productsArr.push(val);
  }

  // onclick on hamberger_menu
  let [isOpen, set_isOpen] = useState(false);

  return (
    <div className="App flex">
      <div className={isOpen ? "open_sidebar" : "close_sidebar"}>
        <Filter
          stateArr={stateArr}
          citiesArr={citiesArr}
          productsArr={productsArr}
          selected={selected}
          set_selected={set_selected}
          isOpen={isOpen}
        />
      </div>
      <div className="main_container">
        <div className="edvora flex flex-di-co">
          <div
            id="hamberger_menu"
            class={isOpen ? "menu_icon open" : "menu_icon"}
            onClick={() => {
              set_isOpen(!isOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="span">Edvora</span>
        </div>
        <div className="Products_text">Products</div>
        <div className="products_container flex flex-di-co flex-ai-c">
          {productsArr.map((val, indx) => {
            if (indx !== 0) {
              if (selected.product[0] && selected.product[1] === val) {
                return (
                  <Product
                    name={val}
                    selected={selected}
                    selected={selected}
                    data={data}
                  />
                );
              }
              if (!selected.product[0]) {
                return (
                  <Product
                    name={val}
                    selected={selected}
                    selected={selected}
                    data={data}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
