import React, { Component } from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass:'',
      fooText: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { mail, pass } = this.state;
    const data = {
      mail: mail,
      pass: pass,
    }

    const options = {
      headers: { "Content-type" : 'application/json' },
      method:'GET',
      //body: JSON.stringify(data),
    }
    fetch(`/foo`, options)
      .then(res => res.text())
       .then(res => {
         
       })
      .catch(err => console.log(err));
  }
  render() {
    return(
      <div className="container">
        <p className="msg">{this.state.fooText}</p>
        <form
        //mthod="POST"
        //onSubmit={this.onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: 100,
        }}
        >
          <input value={ this.state.mail } id="mail" type="text" onChange={this.onChange}/>
          <input value={ this.state.pass } id="pass" type="text" onChange={this.onChange}/>
          <button onClick={this.onSubmit} type="button">Enviar</button>
        </form>
        <a href="/foo?name=felix">fooooo</a>
      </div>
    )
  }
}

export default Foo;
