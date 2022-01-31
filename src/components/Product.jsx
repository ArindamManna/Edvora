import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
// import data from "../data";
function Product(props) {
 let data = props.data;

  let scroll_div = useRef(null);
  let right_scroll = () => {
    // console.log(scroll_div)
    scroll_div.current.scrollLeft += 500;
  };
  let left_scroll = () => {
    // console.log(scroll_div)
    scroll_div.current.scrollLeft -= 500;
  };

  return (
    <>
      <div className="product flex flex-di-co flex-ai-c">
        <div className="product_name">{props.name}</div>

        <div className="card_container flex flex-ai-c" ref={scroll_div}>
          <svg
            onClick={left_scroll}
            className="left_scroll flex-c"
            width="14"
            height="36"
            viewBox="0 0 14 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 18L13 35"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            onClick={right_scroll}
            className="right_scroll"
            width="12"
            height="35"
            viewBox="0 0 12 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L11 17.5L1 34"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {data.map((val) => {
            if (val.product_name === props.name) {
              if (
                props.selected.state[0] &&
                props.selected.state[1] === val.address.state &&
                props.selected.city[0] &&
                props.selected.city[1] === val.address.city
              ) {
                return <Card data={val} />;
              }

              if ((props.selected.state[0] && !props.selected.city[0]) || (!props.selected.state[0] && props.selected.city[0])) {
                
              
              if (props.selected.state[0] &&
                props.selected.state[1] === val.address.state) {
                  return <Card data={val} />;
              }
              
              if (props.selected.city[0] &&
                props.selected.city[1] === val.address.city) {
                  return <Card data={val} />;
              }}


              if (!props.selected.state[0] && !props.selected.city[0]) {
                return <Card data={val} />;
              }
            }
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
