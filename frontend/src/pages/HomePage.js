import React, {Component} from 'react';
import UserList from '../components/UserList';
import {getEmployees} from "../api/apiCalls2";
import {getUsers} from "../api/apiCalls";

//React JS
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            users:[],
            content: [],
            size: 0,
            page: 0,
            last: false,
            first: true,
        }
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async (page, size) => {
        try {
            const response = await getEmployees(page, size);
            const response2= await getUsers(page,size)
            this.setState({size: size});
            this.setState({last: response.data.last})
            this.setState({first: response.data.first})
            console.log(response.data);
            this.setState({employees: response.data.content})
            this.setState({users: response2.data.content})
            console.log(response.data.content);
        } catch (error) {
            console.log("HAYIIR");
        }
    };
    onClickNext = () => {
        let nextPage = this.state.page + 1;
        this.setState({page: nextPage});
        this.fetchEmployees(nextPage, this.state.size);
    };
    onClickPrev = () => {
        let prevPage = this.state.page - 1;
        this.setState({page: prevPage});
        this.fetchEmployees(prevPage, this.state.size);
    };
    updateSize = (newsize) => {
        this.setState({size: newsize});
        this.fetchEmployees(this.state.page, newsize);
        console.log("updated size" + newsize);
    };
    refresh = () => {
        this.fetchEmployees(this.state.page, this.state.size);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <UserList
                            list={this.state.employees}
                            list2={this.state.users}
                            pagenumber={this.state.page}
                            sizenumber={this.state.size}
                            updatesize={(e) => this.updateSize(e)}
                            nextpage={() => this.onClickNext()}
                            prevpage={() => this.onClickPrev()}
                            last={this.state.last}
                            first={this.state.first}
                            refresh={() => this.refresh()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;


