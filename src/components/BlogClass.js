import React from 'react';
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import {Link} from 'react-router-dom';

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
    const response = await fetch (`https://api.github.com/users/${this.props.name}`);
    const blog_user_data = await response.json();
  
    const repo_data = await fetch (`https://api.github.com/users/${this.props.name}/repos`);
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
                <div className="repo-card" key={repo.id}>
                  <a target="_blank" href={repo.html_url}><h3 className="repo-title">{repo.name}</h3></a>
                  <p className="repo-bio">{repo.description}</p>
                  { repo.name !== 'table-of-contents' && <a target="_blank" href={repo.homepage}><h4 className="repo-demo">Show live demo</h4></a> }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Blog;