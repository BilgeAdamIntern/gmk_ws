import React, {Component} from 'react';

class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        render();
    }

    saveEmployee() {

    }
    render() {
        return (
            <div>
                <th>
                    <label className="float-right">Ad:<input id={"nameInsert"} type="text"/></label><br/>
                    <label className="float-right">Soyad:<input id={"secondNameInsert"} type="text"/></label><br/>
                    <label className="float-right">Telefon Numarası:<input id={"phoneNumberInsert"}
                                                                           type="text"/></label><br/>
                    <label className="float-right">TC NO:<input id={"tcnoInsert"} type="text"/></label><br/>
                    <label className="float-right">Departman:<input id={"departmentInsert"} type="text"/></label><br/>
                    <label className="float-right">Görev:<input id={"dutyInsert"} type="text"/></label><br/><br/>
                    <label className="float-right">Yaş:<input id={"ageInsert"} type="text"/></label><br/>
                    <label className="float-right">Şifre<input id={"passwordInsert"}/></label><br/>
                    <label className="float-right">Kullanıcı Adı:<input id={"userNameInsert"} type="text"/></label><br/>
                    <label className="float-right">Rol:<input id={"userRoleInsert"} type="text"/></label><br/>
                    <label className="float-left">Aktif:<input id={"activeInsert"} type="radio" value="true"/></label><br/>
                </th>
                <button className="btn btn-sm btn-light float-lg-right" onClick={this.saveEmployee()}>Kaydet</button>
            </div>

        )
    }
}

export default Insert