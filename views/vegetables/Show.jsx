const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, isGreen, _id } = this.props.vegetables;
        return (
            <div>
                <h1>Vegetables Show Page</h1>
                <p> {name} </p>
                <p>{isGreen ? `It is Green` : `It is not Green`}</p>
                <a href={`/vegetables/${_id}/edit`}>EDIT</a>
            </div>
        )
    }
}

module.exports = Show;