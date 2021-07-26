import React, {Component} from "react";

class TableRows extends Component {


    render() {

        return (
            <div>
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
                {!!this.props.list && !!this.props.list.length && this.props.list.map(each => {
                    return (
                        <tr>
                            <th>{each.firstName}</th>
                            <th>{each.secondName}</th>
                            <th>{each.phoneNumber}</th>
                            <th>{each.tcno}</th>
                            <th>{each.department}</th>
                            <th>{each.duty}</th>
                            <th>{each.age}</th>
                        </tr>
                    );
                })}
                </thead>
            </div>
        );
    }
}

export default TableRows;
