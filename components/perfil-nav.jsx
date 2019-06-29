import React, { Component } from 'react';
import uuid from 'uuid/v1';
import fetch from 'isomorphic-unfetch';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';
import classnames from 'classnames';
import AddPost from './add-post';
import './perfil-nav.scss';

class PerfilNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      text: '',
      posts:[],
    };
    this.onToggle = this.onToggle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    const { posts } = this.props;
    this.setState({ posts: posts });
    console.log(posts);
    console.log(this.props.id);
  }

  onToggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  onChangeText(e) {
    this.setState({ text: e.target.value });
  }

  addPost(e) {
    e.preventDefault()
    const date = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day:'numeric' });
    const { text, posts } = this.state;
    const { id } = this.props.user;
    const newPost = { text, date };
    const data = {
      id: id,
      text: text,
      date: date
    }
    console.log(data);
    fetch('/api/newPost.js', {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.status === 200) {
          this.setState({ posts: [...posts, newPost] });
        }
      })
      .catch(err => console.log(err));
  }


  render() {
    const {
      activeTab,
      text,
      posts,
    } = this.state;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1', nav_item: this.state.activeTab !== '1'  })}
              onClick={()=>{this.onToggle('1')}}
            >
              Muro
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2', nav_item: this.state.activeTab !== '2'  })}
              onClick={()=>{this.onToggle('2')}}
            >
              Historia
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3', nav_item: this.state.activeTab !== '3'  })}
              onClick={()=>{this.onToggle('3')}}
            >
              Amigos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4', nav_item: this.state.activeTab !== '4'  })}
              onClick={()=>{this.onToggle('4')}}
            >
              Deseos
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} >
          <TabPane tabId='1'>
            <Row>
              <Col sm="12">
                <AddPost
                  value={text}
                  onChange={this.onChangeText}
                  onSubmit={this.addPost}
                />
                <div className="line" />
              </Col>
            </Row>
            <div className="line_br" />
            <Row>
              {
                posts.map((post) => (
                  <Col key={uuid()} sm="12">
                    <Card className="post_cont shadow animated fadeIn">
                      <CardBody>
                        {post.date}
                      </CardBody>
                      <CardBody className="card_body">
                        <p>{post.text}</p>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm="12">
                <h2>Tab 2</h2>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm="12">
                <h2>Tab 3</h2>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='4'>
            <Row>
              <Col sm="12">
                <h2>Tab 4</h2>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
};

export default PerfilNav;
