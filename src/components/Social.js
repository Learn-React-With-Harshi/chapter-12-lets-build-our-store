import React from 'react';
import {SiGoogle, SiLinkedin, SiGithub } from 'react-icons/si';

class Social extends React.Component {
  constructor(props) {
    super(props);
  
    console.log("Social Component - constructor with props : ", this.props, " from parent and state : ", this.state, " from this component");
  }

  async componentDidMount() {
    console.log("Social Component - componentDidMount", this.props);
    
  }

  componentDidUpdate() {
    console.log("Social Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Social Component - componentWillUnmount")
  }

  render() {
    console.log("Social Component - render");
    return (
      
          <div className="social-media-div">
            <a href="https://github.com/HarshithaSolai" className="icon-button github" target="_blank"><i ><SiGithub /></i><span></span></a>
            <a href="https://www.linkedin.com/in/harshitha-sv/" className="icon-button linkedin" target="_blank"><i><SiLinkedin/></i><span></span></a>
            <a href="mailto:solaiharshitha0@gmail.com" className="icon-button google"><i className=""><SiGoogle/></i><span></span></a>
          </div>
        
    )
  }
    
}

export default Social;