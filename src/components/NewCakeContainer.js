import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {

  const [numberOfCake, setNumberOfCake] = useState(1);

  return (
    <div>
      <span>how many cake u want</span>
      <input
        type="text"
        value={numberOfCake}
        onChange={(e) => setNumberOfCake(e.target.value)}
      />
      <h1>Number of cakes- {numberOfCake}</h1>
      <button onClick={()=>props.buyCake(numberOfCake)}>
        buy {numberOfCake} cakes
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //1 this will get the state from the store && add as a props to the component
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  //2 this will get the dispatch from the store && add as a props to the component
  return {
    buyCake: (numberOfCake) => dispatch(buyCake(numberOfCake)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
