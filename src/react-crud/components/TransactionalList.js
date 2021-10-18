import React, { Component } from "react";
import TransactionalForm from "./TransactionalForm";

export class TransactionalList extends Component {

  state = {
    list: this.returnList(),
    currentIndex: -1,
  };

  returnList() {
    if (localStorage.getItem("transactions") == null)
         localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }


  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1)
        list.push(data);
    else
        list[this.state.currentIndex] = data;
    localStorage.setItem('transactions', JSON.stringify(list));
    this.setState({ list,currentIndex: -1  });
}


  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    return (
      <div>
        <TransactionalForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}
        />
        <hr />
        <p>list of transaction form</p>
        <table>
          <tbody>
            {this.state.list.map((item, index) => {
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

export default TransactionalList;
