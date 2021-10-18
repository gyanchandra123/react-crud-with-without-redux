import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      the total item left is :{props.itemNumber}
      <button onClick={props.buyItem}>buy the item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // state = represents the state object present in the store
  let itemNumber = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCream;
  return {
    // this return object represents the props pass to the itemContainer.
    itemNumber: itemNumber,
  };
};

const mapDispatchToProps = (dispatch, ownsProps) => {
  const dispatchFunction = ownsProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// this link the new container to the store available


