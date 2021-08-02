import React, {Component} from 'react';

class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <input type="submit" value="Submit" onClick={insertEmployees()}/>
                </form>
            </div>
        )
    }
}

export default Insert