import React, { Component } from 'react';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass:'',
      fooText: '',
      reqid: '',
    }
    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

 /* onSubmit(e) {
    e.preventDefault();
    const { mail, pass } = this.state;
    const data = {
      mail: mail,
      pass: pass,
    }

    const options = {
      headers: { "Content-type" : 'application/json' },
      method:'POST',
      body: JSON.stringify(data),
    }
    fetch(`https://greenlink-project.now.sh/api/login`, options)
      .then(res => res.text())
       .then(res => {
        console.log(res)
       })
      .catch(err => console.log(err));
  }*/

  onSubmit2(e) {
    e.preventDefault();
    const { reqid } = this.state;
    const data = {
      id: reqid,
    }
    fetch('https://greenlink-project.now.sh/api/perfil?id=5d12de4b45e676da0a477ea1',{
      mode:'cors',
    }
    /*,{
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      method: "POST",
    }*/)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return(
      <div className="container">
        <p className="msg">{this.state.fooText}</p>
        <form
        mthod="POST"
        onSubmit={this.onSubmit}
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
          <button type="submit">Enviar</button>
        </form>

        <form>
          <input value={ this.state.reqid } id="reqid" type="text" onChange={this.onChange}/>
          <button onClick={this.onSubmit2} type="button">enviar id</button>
        </form>
      </div>
    )
  }
}

export default Foo;
//?id=$id"