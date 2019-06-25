import React, { Component } from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fooText: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      mail: 'felix@greenlink.com',
      pass: '123456',
    }
    fetch('/api/registro', {
      headers: { "Content-type" : 'application/json' },
      method:'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.text()).then(res => this.setState({ fooText: res }));
  }
  render() {
    return(
      <div className="container">
        <p className="msg">{this.state.fooText}</p>
        <form mthod="POST" onSubmit={this.onSubmit}>
          <input type="text"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Foo;
