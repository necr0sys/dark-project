import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Button,
  FormGroup,
  Input,
} from 'reactstrap';
import './add-post.scss';

const AddPost = ({ history, onSubmit, onChangeText, onChangeImg, img }) => (
  <div className="add_post_cont shadow">
    <Card>
      <CardBody className="card_title">
        <div className="card_header">
          <p>Crear publicación</p>
        </div>
      </CardBody>
      <CardBody>
        <form onSubmit={onSubmit} method="POST" className="add_post_form">
          <div className="img_cont" style={
            img
              ? {background: `url("${img}")center top no-repeat`, backgroundSize: 'cover'}
              : {display:'none'}
          } />
          <FormGroup>
            <Input onChange={onChangeText} value={history} className="text_post" type="textarea" />
          </FormGroup>
          <div className="form_post_footer">
            <Button type="submit" outline>Crear</Button>
            <input type="file" onChange={onChangeImg}/>
          </div>
        </form>
      </CardBody>
    </Card>
  </div>
);

export default AddPost;
