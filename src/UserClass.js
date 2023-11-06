import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DummyLocation",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/nishant-raj26");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, id, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2> Name: {name} </h2>
        <h2> Location: {location} </h2>
        <h2> Id: {id} </h2>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Inc Class
        </button>
      </div>
    );
  }
}
export default UserClass;
