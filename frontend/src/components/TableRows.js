import React, {Component} from "react";
import '../ForRows.css';

class TableRows extends Component {


    render() {
        return (
            <div>
                <thead>
                <tr>
                    <th className="long-rows">Ad</th>
                    <th className="long-rows">Soyad</th>
                    <th className="long-rows">TelefonNo</th>
                    <th className="long-rows">TCKNO</th>
                    <th className="long-rows">Departman</th>
                    <th className="long-rows">Görev</th>
                    <th className="short-rows">Yaş</th>
                </tr>
                {!!this.props.list && !!this.props.list.length && this.props.list.map(each => {
                    return (
                        <tr>
                            <th className="long-rows">{each.firstName}</th>
                            <th className="long-rows">{each.secondName}</th>
                            <th className="long-rows">{each.phoneNumber}</th>
                            <th className="long-rows">{each.tcno}</th>
                            <th className="long-rows">{each.department}</th>
                            <th className="long-rows">{each.duty}</th>
                            <th className="short-rows">{each.age}</th>
                        </tr>
                    );
                })}
                </thead>
            </div>
        );
    }
}

export default TableRows;
