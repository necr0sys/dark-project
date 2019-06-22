import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import Link from 'next/link';
import './popOver.scss';

class PopOver extends Component {
  constructor(props){
    super(props);
    this.state = {
      popOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { popOpen } = this.state;
    this.setState({ popOpen: !popOpen });
  }

  render() {
    const { popOpen } = this.state;
    return(
      <Popover placement="bottom" target="btn-resp" toggle={this.toggle} isOpen={popOpen}>
        <PopoverBody>
          <ul>
            <li>
              <Link href="/editar/perfil">
                <a>Editar</a>
              </Link>
            </li>
            <li>
              <Link href="/perfil/config">
                <a>Config</a>
              </Link>
            </li>
            <li>
              <Link href="/exit">
                <a>Salir</a>
              </Link>
            </li>
          </ul>
        </PopoverBody>
      </Popover>
    );
  }
}

export default PopOver;
