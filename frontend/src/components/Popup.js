import React, {Component} from 'react';

class Popupp extends Component {
    constructor(props) {
        super(props);
        this.state ={}

    }
    render() {
        return (
            <div>
                <thead>
                {this.props.list.map(each => {
                    if (this.props.selectedEmpId == each.emp_id){
                    return (
                        <tr>
                            <li>Ad : {each.firstName}</li>
                            <li>Soyad : {each.secondName}</li>
                            <li>Telefon Numarası :  {each.phoneNumber}</li>
                            <li>Tc No: {each.tcno}</li>
                            <li>Departman : {each.department}</li>
                            <li>Görev : {each.duty}</li>
                            <li>Yaş : {each.age}</li>
                        </tr>
                    );}
                })}
                </thead>
            </div>
        );
    }
}

export default Popupp