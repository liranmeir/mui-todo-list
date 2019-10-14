import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitFired(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <form
        action=""
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={this.state.text}
          onChange={this.handleChange}
          id="outlined-email-input"
          label="Type in item"
          //   className={classes.textField}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </form>
    );
  }
}
