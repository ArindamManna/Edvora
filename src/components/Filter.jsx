import { useState } from "react";
import Card2 from "./Card2";

function Filter(props) {
  let svg2 = (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9201 10.0919L5.78905 0.2121C5.64218 -0.0706999 5.35938 -0.0706999 5.21095 0.2121L0.0799082 10.0919C-0.110709 10.4603 0.061159 11 0.368959 11H10.631C10.9388 11 11.1107 10.4603 10.9201 10.0919Z"
        fill="#A5A5A5"
      />
    </svg>
  );
  let svg = (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09409 9.18994L0.816466 0.0488263L11.3717 0.0488253L6.09409 9.18994Z"
        fill="#A5A5A5"
      />
    </svg>
  );

  let productsArr = props.productsArr;
  let stateArr = props.stateArr;
  let citiesArr = props.citiesArr;
  //   for open dropdown
  const [openDropdown, set_openDropdown] = useState({
    product: false,
    state: false,
    city: false,
  });

  return (
    <>
      <div className={props.isOpen?"filter flex flex-di-co flex-ai-c open_filter":"filter flex flex-di-co flex-ai-c close_filter"}>
        <div className="filter_text flex">Filters</div>
        <div
          className="product_dropdown item flex-c"
          onClick={() => {
            set_openDropdown({
              ...openDropdown,
              product: !openDropdown.product,
            });
          }}
        >
          <div className="inside_item flex flex-ai-c flex-jc-sb">
            <span>{props.selected.product[1]}</span>
            <div className={openDropdown.product ? "" : "display-none"}>
              {svg2}
            </div>
            <div className={!openDropdown.product ? "" : "display-none"}>
              {svg}
            </div>
          </div>
          <div className={openDropdown.product ? "dropdown" : "display-none"}>
            {productsArr.map((val) => {
              return (
                <Card2
                  data={val}
                  selected={props.selected}
                  set_selected={props.set_selected}
                  set_openDropdown={set_openDropdown}
                  name={"product"}
                  name2={"Product"}
                  openDropdown={openDropdown}
                />
              );
            })}
          </div>
        </div>
        <div
          className="state_dropdown item flex-c"
          onClick={() => {
            set_openDropdown({
              ...openDropdown,
              state: !openDropdown.state,
            });
          }}
        >
          <div className="inside_item flex flex-ai-c flex-jc-sb">
            <span>{props.selected.state[1]}</span>
            <div className={openDropdown.state ? "" : "display-none"}>
              {svg2}
            </div>
            <div className={!openDropdown.state ? "" : "display-none"}>
              {svg}
            </div>
          </div>
          <div className={openDropdown.state ? "dropdown" : "display-none"}>
            {stateArr.map((val) => {
              return <Card2
              data={val}
              selected={props.selected}
              set_selected={props.set_selected}
              set_openDropdown={set_openDropdown}
              name={"state"}
              name2={"State"}
              openDropdown={openDropdown}
            /> ;
            })}
          </div>
        </div>
        <div
          className="city_dropdown item flex-c"
          onClick={() => {
            set_openDropdown({
              ...openDropdown,
              city: !openDropdown.city,
            });
          }}
        >
          <div className="inside_item flex flex-ai-c flex-jc-sb">
            <span>{props.selected.city[1]}</span>
            <div className={openDropdown.city ? "" : "display-none"}>
              {svg2}
            </div>
            <div className={!openDropdown.city ? "" : "display-none"}>
              {svg}
            </div>
          </div>
          <div className={openDropdown.city ? "dropdown" : "display-none"}>
            {citiesArr.map((val) => {
              return <Card2
              data={val}
              selected={props.selected}
              set_selected={props.set_selected}
              set_openDropdown={set_openDropdown}
              name={"city"}
              name2={"City"}
              openDropdown={openDropdown}
            />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
