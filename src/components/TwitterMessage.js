import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleChange = (e) =>{
    let inputLength= e.target.value.length
    this.props.maxChars <= inputLength ? console.log('too much'): console.log('good');
    this.setState({message:e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} />
          <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
