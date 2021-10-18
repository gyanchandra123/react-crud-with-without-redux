import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // it accepts a selector function as argument.
  // this function take the state as input &&  can be used to return the required state property from the store

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes : {numOfCakes}</h1>
      <button onClick={()=> dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
