import React, {Component} from 'react';
import UserList from '../components/UserList';
import {getEmployees} from "../api/apiCalls2";

//React JS
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            content: [],
            size: 2,
            page: 0,
            number: 0
        }
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async () => {
        try {
            const response = await getEmployees(this.state.page, 2);
            console.log(response.data);
            this.setState({employees: response.data.content})
            console.log(response.data.content);
        } catch (error) {
            console.log("HAYIIR");
        }
    };

    onClickNext = page => {
        this.setState({page: page + 1});
        this.fetchEmployees();

    };

    render()
    {
        return (
            <div className="container">

                <div className="row">
                    <div className="col">
                        <UserList list={this.state.employees}/>
                    </div>
                </div>
                <button onClick={() => this.onClickNext()}>Tıkla</button>
            </div>
        );
    }
}
    export default HomePage;


