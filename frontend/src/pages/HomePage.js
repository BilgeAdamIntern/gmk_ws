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
            size: 0,
            page: 0,
        }
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async (page, size) => {
        try {
            const response = await getEmployees(page, size);
            this.setState({size: size});
            console.log(response.data);
            this.setState({employees: response.data.content})
            console.log(response.data.content);
            console.log(page);
            console.log("default siz" +this.state.size);
        } catch (error) {
            console.log("HAYIIR");
        }
    };
    onClickNext = ()=> {
        let nextPage = this.state.page+1;
        this.setState({page: nextPage});
        this.fetchEmployees(nextPage, this.state.size);
    };
    onClickPrev = ()=> {
        let prevPage = this.state.page-1;
        this.setState({page: prevPage});
        this.fetchEmployees(prevPage, this.state.size);
    };
    updateSize = async (newsize) => {
        this.forceUpdate();
        await this.setState({size: newsize});
        await this.fetchEmployees(this.state.page, newsize);
        console.log("updated size" +newsize);
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
                            sizenumber={this.state.size}
                            updatesize={(e) => this.updateSize(e)}
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


