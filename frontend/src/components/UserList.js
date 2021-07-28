import React, {Component, useEffect} from 'react';
import {getEmployees} from "../api/apiCalls2";
import TableRows from "./TableRows";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        content: [],
        size : 2,
        page: 0,
        number: 0
    }

  }

    onClickNext = number => {
        this.setState({number:number + 1});
    };

    onClickPrevious = number => {
      const previousPage = this.setState({number: number -1});
      this.loadEmployees(previousPage);
  };


  loadEmployees = async () =>{

      try {
          const response =await getEmployees(0,2);
          console.log(response.data.content);
          this.setState({page: response.data.content});
      }catch(error) {
          console.log(error)
      }
  }

  render() {

    return (
        <div className="card">
          <h3 className="card-header text-center">{'Users'}</h3>
          <div className="list-group-flush">
            <table border={1}  className="list-group">
              <TableRows list={this.props.list}/>
            </table>
          </div>
        </div>
    );
  }
}

export default UserList;
