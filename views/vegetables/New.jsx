const React = require('react');

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Vegetables Page</h1>
                <form action="/vegetables" method="POST">
                    name: <input type="text" name="name"/><br/>
                    isGreen: <input type="checkbox" name="isGreen"/><br/>
                    <input type="submit" name="" value="Create Vegetable"/>
                </form>
            </div>
        )
    }
}

module.exports = New;