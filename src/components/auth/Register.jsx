import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

// rcc - class based components
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "Syed",
      email: "syed@gmail.com",
      password: "",
      password2: "",
      errors: {}
    };
  }

  registerSubmit = (e) => {
    const api = "/api/users";
    const { name, email, password } = this.state;
    const newUser = {
      name, email, password
    }
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    // post call to register
    axios.post(api, newUser).then(res => console.log(JSON.stringify(res))).catch(err => {
      console.log(JSON.stringify(err.response.data));
      console.log(this.state.errors);
      const errObj = {};
      for (const error of err.response.data.errors) {
        error.param === 'name' && (errObj.name = error.msg);
        error.param === 'email' && (errObj.email = error.msg);
        error.param === 'password' && (errObj.password = error.msg);
      }
      this.setState({ errors: errObj });
    });
  };

  onChange = (e) => {
    // State is immutable. Hence we cant change the state values directly.
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.state;
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign Up</h1>
              <p class="lead text-center">Create your account</p>
              <form onSubmit={this.registerSubmit}>
                <div class="form-group">
                  <input type="text" className={classnames('form-control form-control-lg', { 'is-invalid': errors.name })} placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} />
                  <div className="d-block invalid-feedback">{errors.name}</div>
                </div>
                <div class="form-group">
                  <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                  <div className="d-block invalid-feedback">{errors.email}</div>
                </div>
                <div class="form-group">
                  <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                  <div className="d-block invalid-feedback">{errors.password}</div>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
