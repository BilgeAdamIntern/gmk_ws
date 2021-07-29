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
  componentDidMount() {
      this.render();
  }

    render() {
    return (
        <div className="card">
          <h3 className="card-header text-center">{'Users'}</h3>
          <div className="list-group-flush">
            <table border={1}  className="list-group">
              <TableRows
                  list={this.props.list}
                  pagenumber={this.props.pagenumber}
                  sizenumber={this.props.sizenumber}
                  updatesize={(e)=>this.props.updatesize(e)}
                  nextpage={()=>this.props.nextpage()}
                  prevpage={()=>this.props.prevpage()}/>
            </table>
          </div>
        </div>
    );
  }
}

export default UserList;
