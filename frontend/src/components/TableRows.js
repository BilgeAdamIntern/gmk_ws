import React, {Component} from "react";

class TableRows extends Component {


    render() {

        return (
            <div>
                {!!this.props.list && !!this.props.list.length && this.props.list.map(each => {
                    return (<div>
                        <th>{each.firstName}</th>
                        <th>{each.secondName}</th>
                        <th>{each.phoneNumber}</th>
                        <th>{}</th>
                        <th>{each.department}</th>
                        <th>{each.duty}</th>
                        <th>{each.age}</th>
                    </div>);
                })}
            </div>
        );
    }
}

export default TableRows;
