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
            const response = await getEmployees(this.state.page, 1);
            console.log(response.data);
            this.setState({employees: response.data.content})
            console.log(response.data.content);
            console.log(this.state.page);
        } catch (error) {
            console.log("HAYIIR");
        }
    };
    onClickNext = ()=> {
        debugger;
        let nextPage = this.state.page+1;
        this.setState({page: nextPage});
        /*console.log(nextPage)*/
        this.fetchEmployees(this.state.page)
    };
    onClickPrev = ()=> {
        debugger;
        let prevPage = this.state.page-1;
        this.setState({page: prevPage});
       /* console.log(prevPage)*/
        this.fetchEmployees(prevPage)
    };
    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <UserList
                            list={this.state.employees}
                            pagenumber={this.state.page}
                            nextpage={() => this.onClickNext()}
                            prevpage={() => this.onClickPrev()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
    export default HomePage;


