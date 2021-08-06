import React, {Component} from 'react';
import {insertEmployees} from "../api/apiCalls2";

class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                employee: this.props.employee ? this.props.employee : {
                    empId: null,
                    firstName: "",
                    secondName: "",
                    phoneNumber: "",
                    department: "",
                    duty: "",
                    age: "",
                    tcno: "",
                },
                user: this.props.user ? this.props.user : {
                    user_role: 1,
                    id: null,
                    password: "",
                    username: "",
                    active: true,
                },
            }
        }
    }

    onInputChange = (e, dataContainer) => {
        let name = e.target.id;
        let value = e.target.value;
        let data = this.state.data;
        data[dataContainer][name] = value;
        this.setState({data: data});
    };

    onSave = () => {
        insertEmployees(this.state.data, this.props.close);
    };

    render() {
        return (
            <div>
                <th>
                    <label className="float-right">Ad:<input id={"firstName"} type="text"
                                                             value={this.state.data.employee.firstName}
                                                             onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">Soyad:<input id={"secondName"} type="text"
                                                                value={this.state.data.employee.secondName}
                                                                onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">Telefon Numarası:<input id={"phoneNumber"} type="text"
                                                                           value={this.state.data.employee.phoneNumber}
                                                                           onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">TC NO:<input id={"tcno"} type="text"
                                                                value={this.state.data.employee.tcno}
                                                                onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">Departman:<input id={"department"} type="text"
                                                                    value={this.state.data.employee.department}
                                                                    onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">Görev:<input id={"duty"} type="text"
                                                                value={this.state.data.employee.duty}
                                                                onChange={e => this.onInputChange(e, "employee")}/></label><br/><br/>
                    <label className="float-right">Yaş:<input id={"age"} type="text"
                                                              value={this.state.data.employee.age}
                                                              onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                    <label className="float-right">Şifre<input id={"password"}
                                                               value={this.state.data.user.password}
                                                               onChange={e => this.onInputChange(e, "user")}/></label><br/>
                    <label className="float-right">Kullanıcı Adı:<input id={"username"} type="text"
                                                                        value={this.state.data.user.username}
                                                                        onChange={e => this.onInputChange(e, "user")}/></label><br/>
                    <label className="float-left">Aktif:<input id={"active"} type="checkbox"
                                                               checked={this.state.data.user.active} onChange={() => {
                        let data = this.state.data;
                        data["user"]["active"] = !this.state.data.user.active;
                        this.setState({data});
                    }}/></label><br/>
                </th>
                <button className="btn btn-sm btn-light float-lg-right"
                        onClick={() => this.onSave()}>Kaydet
                </button>
            </div>

        )
    }
}

export default Insert