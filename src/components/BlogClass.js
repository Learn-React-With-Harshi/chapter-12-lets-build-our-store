import React from 'react';
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import Repo from './RepoClass';
import { GITHUB_GET_USER } from '../config';
class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blog : {
        name : "Dummy Name",
        bio : "Dummy content"
      },
      repoList : []
    }
    console.log("Blog Component - constructor with props : ", this.props.name, " from parent and state : ", this.state, " from this component");
  }

  async componentDidMount() {
    console.log("Blog Component - componentDidMount", this.props.name);
    const response = await fetch (GITHUB_GET_USER + this.props.name);
    const blog_user_data = await response.json();
  
    const repo_data = await fetch (GITHUB_GET_USER + this.props.name + "/repos");
    const repo_list_data = await repo_data.json();

    this.setState({
      blog : blog_user_data,
      repoList : repo_list_data
    });
  }

  componentDidUpdate() {
    console.log("Blog Component - componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("Blog Component - componentWillUnmount")
  }
  render() {
    const { blog, repoList } = this.state;
    console.log("Blog Component - render");
    return (
      <div className="blog-card"> 
        <div className="blog-user-summary">
          <div>
            <img className="blog-user-img" src={blog.avatar_url} alt={blog.name} />
          </div>
          <div className="blog-details">
            <h3 className="blog-title">{blog.name}</h3>
            <p className="blog-bio">{blog.bio}</p>
            <div className="blog-metrics">
              <div className="blog-followers">
                <FiUsers /><span>{blog.followers} followers</span>
              </div>

              <div className="blog-repo-count">
                <RiGitRepositoryLine /><span>{repoList.length-1} repositories</span>
              </div>
            </div>
          </div>
        </div>
        <div className="repo-container">
          <h2 className="repo-list-title">Chapters of {blog.name} </h2>
          {
            repoList.filter(repo => (repo.name !== '.github')).map(repo => {
              return (
                <Repo {...repo} key={repo.id}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Blog;