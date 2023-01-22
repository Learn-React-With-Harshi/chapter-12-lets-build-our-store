import { Component } from "react";

class Repo extends Component {
  constructor(props) {
    super(props);
    console.log("In Repo Component(Child of Blog) - constructor")
  }
  componentDidMount() {
    console.log("In Repo Component(Child of Blog) - componentDidMount");
  }
  componentDidUpdate() {
    console.log("In Repo Component(Child of Blog) - componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("In Repo Component(Child of Blog) - componentWillUnmount")
  }
  render() {
    console.log("In Repo Component(Child of Blog) - render");
    console.log(this.props);
    const repo = this.props;
    return (
      
      <div className="repo-card">
        <a target="_blank" href={repo.html_url}><h3 className="repo-title">{repo.name}</h3></a>
        <p className="repo-bio">{repo.description}</p>
        { repo.name !== 'table-of-contents' && <a target="_blank" href={repo.homepage}><h4 className="repo-demo">Show live demo</h4></a> }
      </div>
  )}
}

export default Repo;