import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps)=> {  //1 this will get the state from the store && add as a props to the component
   return {
       numOfCakes : state.numOfCakes,
       ownProps
   }
}

const mapDispatchToProps = (dispatch) =>{  //2 this will get the dispatch from the store && add as a props to the component
    return {
        buyCake :()=> dispatch(buyCake())
    }
}


const CakeContainer = (props) => {
    console.log('cake container props :',props)
    return (
        <div>
            <h1>Number of cakes- {props.numOfCakes}</h1>
            <button onClick= {props.buyCake}>buy cakes</button>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);

