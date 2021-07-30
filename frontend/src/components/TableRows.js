import React, {Component} from "react";
import '../ForRows.css';
import Popupp from './Popup.js';
import Popup from 'reactjs-popup';


class TableRows extends Component {
    componentDidMount() {
        this.sizeOnChange();
    }

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
                            <Popup trigger={open => (
                                <button className="btn btn-sm btn-light" onClick={() => this.popupRender()}>+</button>
                            )}>
                            </Popup>
                        </tr>
                    );
                })}
                </thead>
                <button className="btn btn-sm btn-light" onClick={() => this.props.prevpage()}
                        disabled={this.props.first}>
                    previous page
                </button>
                <label>{this.props.pagenumber + 1}</label>
                <button className="btn btn-sm btn-light" onClick={() => this.props.nextpage()}
                        disabled={this.props.last}>
                    next page
                </button>
                <select className="float-right" id="kk" onChange={() => this.sizeOnChange()}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label htmlFor="dataNumber" className="float-right">Görülecek kişi sayısı seçiniz : </label>
                {/*<Popupp list={this.props.list}/>*/}
            </div>
        );
    }

    popupRender() {
            return (
                <div>
                <Popupp list={this.props.list}/>
                </div>
            )
    }

    sizeOnChange() {
        let e = document.getElementById("kk");
        let newSize = e.options[e.selectedIndex].value;
        console.log("table size " + newSize);
        this.props.updatesize(newSize);
    }
}

export default TableRows;
