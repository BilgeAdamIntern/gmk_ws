import React, {Component, useEffect} from 'react';
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import {useSelector} from 'react-redux';
import HoaxFeed from '../components/HoaxFeed';
import {getEmployees} from "../api/apiCalls2";
import {getUser} from "../api/apiCalls";

//React JS
class HomePage extends Component {
    constructor(props)
    {
        super(props);
        const [page, setPage] = useState({
            content: [],
            size: 3,
            number: 0
        });
        const pendingApiCall = useApiProgress('get', '/api/employees?page');
        useEffect(() => {

            loadUsers();
        }, []);
        const onClickNext = () => {
            const nextPage = page.number + 1;
            loadUsers(nextPage);
        };
        const onClickPrevious = () => {
            const previousPage = page.number - 1;
            loadUsers(previousPage);
        };
        const loadUsers = async page => {
                const response = await getEmployees(page);
                setPage(response.data);
        };





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
            const response = await getEmployees(0, 1);
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
