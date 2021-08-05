import React, {Component} from 'react';
import TableRows from "./TableRows";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }

    componentDidMount() {
        this.render();
    }

    render() {
        return (
            <div className="card">
                <h3 className="card-header text-center">{'Users'}</h3>
                <div className="list-group-flush">
                    <table border={1} className="list-group">
                        <TableRows
                            list={this.props.list}
                            list2={this.props.list2}
                            pagenumber={this.props.pagenumber}
                            sizenumber={this.props.sizenumber}
                            updatesize={(e) => this.props.updatesize(e)}
                            nextpage={() => this.props.nextpage()}
                            prevpage={() => this.props.prevpage()}
                            last={this.props.last}
                            first={this.props.first}
                            refresh={() => this.props.refresh()}
                        />
                    </table>
                </div>
            </div>
        );
    }
}

export default UserList;
