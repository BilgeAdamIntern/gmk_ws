import React, {Component, useEffect} from 'react';
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import {useSelector} from 'react-redux';
import HoaxFeed from '../components/HoaxFeed';
import {getEmployees} from "../api/apiCalls2";
import {getUser} from "../api/apiCalls";

//React JS
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async () => {
        try {
            const response = await getEmployees(0, 10);
            console.log(response.data);
            this.setState({employees: response.data.content})
            console.log(response.data.content);
        } catch (error) {
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
