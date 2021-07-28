import React, {Component, useEffect} from 'react';
import {getEmployees} from "../api/apiCalls2";
import TableRows from "./TableRows";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        content: []
    }
  }

    /*onClickNext = () => {
        const nextPage = this.setState({number: this.props.list.page+ 1});
        this.loadEmployees(nextPage);
    };

    onClickPrevious = () => {
      const previousPage = this.setState({number: this.props.list.page -1});
      this.loadEmployees(previousPage);
  };*/


  /*loadEmployees = async () =>{
      try {
          const response =await getEmployees(this.props.list.page,2);
          console.log(response.data.content);
          this.setState({page: response.data.content});
      }catch(error) {
          console.log(error)
      }
  }*/

  render() {
    return (
        <div className="card">
          <h3 className="card-header text-center">{'Users'}</h3>
          <div className="list-group-flush">
            <table border={1}  className="list-group">
              <TableRows
                  list={this.props.list}
                  pagenumber={this.props.pagenumber}
                  nextpage={()=>this.props.nextpage()}
                  prevpage={()=>this.props.prevpage()}/>
            </table>
          </div>
        </div>
    );
  }
}

export default UserList;
