import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {

    const numOfIcecream = useSelector((state)=> state.icecream.numOfIceCream);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>number of ice cream - {numOfIcecream}</h1>
      <button onClick={()=> dispatch(buyIceCream())}>buy ice-cream</button>
    </div>
  );
};

export default IceCreamContainer;
