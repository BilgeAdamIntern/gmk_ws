import React, {Component} from 'react';
import Popup from "reactjs-popup";
class Popupp extends Component {
    render() {
        return (
            <div>
                <thead>
                {!!this.props.list && !!this.props.list.length && this.props.list.map(each => {
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
                    );
                })}
                </thead>
            </div>
        );
    }
}
export default Popupp