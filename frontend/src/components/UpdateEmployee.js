import react, {Component} from 'react';
import React from "react";

class UpdateEmployee extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {
                employee: {
                    firstName: "",
                    secondName: "",
                    phoneNumber: "",
                    department: "",
                    duty: "",
                    age: "",
                    tcno: "",
                },
                user: {
                    id: null,
                    password: "",
                    username: "",
                    user_role: null,
                    active: true,
                },
            }
        }
    }


    onInputChange = (e, dataContainer) => {
        let name = e.target.id;
        let value = e.target.value;
        /* let {name, value} = e.target;*/
        let data = this.state.data;
        data[dataContainer][name] = value;
        this.setState({data: data});
    };
    render() {
        return (
            <div>
                {this.props.list.map(each => {
                    if (this.props.selectedEmpId == each.emp_id){
                    return (
                        <th>
                            <label className="float-right">Ad:<input id={"firstName"} type="text"
                                                                     value={each.firstName}
                                                                     onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                            <label className="float-right">Soyad:<input id={"secondName"} type="text"
                                                                        value={this.state.data.secondName}
                                                                        onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                            <label className="float-right">Telefon Numarası:<input id={"phoneNumber"} type="text"
                                                                                   value={this.state.data.phoneNumber}
                                                                                   onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                            <label className="float-right">TC NO:<input id={"tcno"} type="text"
                                                                        value={this.state.data.tcno}
                                                                        onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                            <label className="float-right">Departman:<input id={"department"} type="text"
                                                                            value={this.state.data.department}
                                                                            onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                            <label className="float-right">Görev:<input id={"duty"} type="text"
                                                                        value={this.state.data.duty}
                                                                        onChange={e => this.onInputChange(e, "employee")}/></label><br/><br/>
                            <label className="float-right">Yaş:<input id={"age"} type="text"
                                                                      value={this.state.data.age}
                                                                      onChange={e => this.onInputChange(e, "employee")}/></label><br/>
                        </th>
                    );
                    }})}
                {this.props.list2.map(each => {
                    console.log(each.employeeId.empID)
                    if(this.props.selectedEmpId == +(each.employeeId.empID)){

                        return(
                            <th>
                                <label className="float-right">Şifre<input id={"password"}
                                                                           value={each.password}
                                                                           onChange={e => this.onInputChange(e, "user")}/></label>
                                <br/>
                                <label className="float-right">Kullanıcı Adı:<input id={"username"} type="text"
                                                                                    value={this.state.data.username}
                                                                                    onChange={e => this.onInputChange(e, "user")}/></label>
                                <br/>
                                <label className="float-right">Rol:<input id={"user_role"} type="text"
                                                                          value={this.state.data.user_role}
                                                                          onChange={e => this.onInputChange(e, "user")}/></label>
                                <br/>
                                <label className="float-left">Aktif:<input id={"active"} type="checkbox"
                                                                           checked={this.state.data.active} onChange={() => {
                                    let data = this.state.data;
                                    data["user"]["active"] = !this.state.data.active;
                                    this.setState({data});
                                }}/></label>
                                <br/>
                            </th>
                        )
                    }

                })}
                <button className="btn btn-sm btn-light float-lg-right">Kaydet
                </button>
            </div>

        )
    }

}

export default UpdateEmployee;