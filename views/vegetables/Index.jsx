const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <>
        <h1>Vegetables Index Page</h1>
        <nav>
        <a href="/vegetables/new">Create a New Vegetable</a><br></br>
        </nav>
        {vegetables.map((vegetable) => {
          return (
            <div key={vegetable._id}>
                
              <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
              {vegetable.isGreen ? `It is Green` : `It is not green`}
              <form action={`/vegetables/${vegetables._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete"/>
                    </form>
            </div>
          );
        })}
      </>
    );
  }
}

//NEW
///   GET/vegetables/new



//CREATE 
///    /vegetables/



module.exports = Index;


