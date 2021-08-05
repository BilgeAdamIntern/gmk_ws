import React, {Component} from 'react';
import UpdateEmployee from "./UpdateEmployee";

class Popupp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCheck: true,
        }
    }

    onClickEvent() {
        this.setState({visibleCheck : !this.state.visibleCheck})
    }

    render() {
        return (
            <div>
                {this.state.visibleCheck === true && (
                    <div>
                    <thead>
                    {this.props.list.map(each => {
                        if (this.props.selectedEmpId == each.emp_id) {
                            return (
                                <tr>
                                    <li>Ad : {each.firstName}</li>
                                    <li>Soyad : {each.secondName}</li>
                                    <li>Telefon Numarası : {each.phoneNumber}</li>
                                    <li>Tc No: {each.tcno}</li>
                                    <li>Departman : {each.department}</li>
                                    <li>Görev : {each.duty}</li>
                                    <li>Yaş : {each.age}</li>
                                </tr>
                            );
                        }
                    })}
                    </thead>

                </div>)}
                {this.state.visibleCheck === false && (
                    <div>
                        <UpdateEmployee list={this.props.list} list2={this.props.list2} selectedEmpId={this.props.selectedEmpId}></UpdateEmployee>
                    </div>
                )}
                <button onClick={() => this.onClickEvent()}> sa button</button>
            </div>
        );
    }
}

export default Popupp