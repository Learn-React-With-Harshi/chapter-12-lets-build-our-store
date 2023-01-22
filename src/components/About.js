import ProfileClass from "./ProfileClass";
import BlogClass from "./BlogClass";
import {Component} from 'react'; /* One way to import named import - Component from React library */
class About extends Component {
  constructor(props) {
    super(props);
    console.log("About(parent) - constructor");
  }

  componentDidUpdate() {
    console.log("About Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("About Component - componentWillUnmount")
  }

  render() {
    console.log("About(parent) - render");

    return (
      <div className="about-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileClass name={"HarshithaSolai"}/>  { /* Passing props from parent to child */ }
        </div>
        <div className="blog-container">
          <h1 className="blog-list-title">About this project</h1>
          <BlogClass name={"Learn-React-With-Harshi"}/> { /* Passing props from parent to child */ }
        </div>  
      </div>
    )
  }
}

export default About;