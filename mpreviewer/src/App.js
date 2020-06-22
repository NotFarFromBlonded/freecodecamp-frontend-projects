import React, {Component} from 'react';

import {Form} from 'react-bootstrap';

let marked = require("marked");

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: ""
    }
    this.updateMarkdown=this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    this.setState({
      markdown: event.target.value,
    });
  }
  render(){
    return (
      <div className="App container">
        <div>
          <Form.Group controlId = "Form.ControlsTextarea1">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control id = "editor" as = "textarea" placeholder = "Input Markdown text" value = {this.state.markdown} onChange = {this.updateMarkdown}></Form.Control>
          </Form.Group>
        </div>
        <div>
          <h6>Markdown Output</h6>
          {/*<div>{marked(this.state.markdown)}</div>*/}
          <div id = "preview" dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
      
    )
  }; 
}

export default App;
