import ProfileClass from "./ProfileClass";
import BlogClass from "./BlogClass";
import {Component} from 'react'; /* One way to import named import - Component from React library */
import { GITHUB_USER_NAME, GITHUB_BLOG_NAME } from "../config";
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
      <div className="about-container flex justify-around mt-24 min-h-screen min-w-full ">
        <div className="profile-container py-5 px-2.5 w-[30%] h-2/4 m-4 rounded-md overflow-hidden shadow bg-white">
          <h1 className="profile-title text-3xl leading-4 justify-center text-title text-center font-bold">About Me</h1>
          <ProfileClass name={GITHUB_USER_NAME}/>  { /* Passing props from parent to child */ }
        </div>
        <div className="blog-container py-5 px-2.5 w-[70%] m-4 rounded-md overflow-hidden shadow bg-white">
          <h1 className="blog-list-title text-3xl leading-4 justify-center text-title text-center font-bold">About this project</h1>
          <BlogClass name={GITHUB_BLOG_NAME}/> { /* Passing props from parent to child */ }
        </div>  
      </div>
    )
  }
}

export default About;