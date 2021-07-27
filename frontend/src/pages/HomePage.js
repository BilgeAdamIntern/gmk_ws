import React, {Component} from 'react';
import UserList from '../components/UserList';
import {getEmployees} from "../api/apiCalls2";

//React JS
class HomePage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async () => {
        try
        {
            const response = await getEmployees(0, 10);
            console.log(response.data);
            this.setState({employees: response.data.content})
            console.log(response.data.content);
        }
        catch (error) {
            console.log("HAYIIR");
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <UserList list={this.state.employees}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
