import React, {useState, useEffect, Component} from 'react';
import {getEmployees} from "../api/apiCalls2";
import { getUsers } from '../api/apiCalls';
import { useTranslation } from 'react-i18next';
import UserListItem from './UserListItem';
import { useApiProgress } from '../shared/ApiProgress';
import Spinner from './Spinner';
import TableRows from "./TableRows";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
        <div className="card">
          <h3 className="card-header text-center">{'Users'}</h3>
          <div className="list-group-flush">
            <table border={1} width={1110}>
              <thead>
              <tr>
                <th>Ad</th>
                <th>Soyad</th>
                <th>TelefonNo</th>
                <th>TCKNO</th>
                <th>Departman</th>
                <th>Görev</th>
                <th>Yaş</th>
              </tr>
              </thead>
              <TableRows list={this.props.list}/>
            </table>
          </div>
        </div>
    );
  }
}

export default UserList;
