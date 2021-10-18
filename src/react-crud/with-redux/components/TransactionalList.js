import React, { Component } from "react";
import TransactionalForm from "./TransactionalForm";
import { connect } from "react-redux";
import * as actions from "../actions/transactionActions";
import { bindActionCreators } from "redux";

class TransactionalList extends Component { 

  handleEdit = (index) => {
    this.props.updateTransactionIndex(index)
  };

  handleDelete = (index) => {
    this.props.deleteTransaction(index);
  };

  render() {
    return (
      <div>
        <TransactionalForm />
        <hr />
        <p>list of transaction form</p>
        <table>
          <tbody>
            {this.props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.bAccountNo}</td>
                  <td>{item.iFSC}</td>
                  <td>{item.bName}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return  {
    deleteTransactions :index => dispatch(actions.Delete(index))
  }
} */

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTransactionIndex: actions.updateIndex,
      deleteTransaction: actions.Delete,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionalList);
