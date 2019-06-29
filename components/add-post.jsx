import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Button,
  FormGroup,
  Input,
} from 'reactstrap';
import './add-post.scss';

const AddPost = ({ text, onSubmit, onChange }) => (
  <div className="add_post_cont shadow">
    <Card>
      <CardBody className="card_title">
        <div className="card_header">
          <p>Crear publicación</p>
        </div>
      </CardBody>
      <CardBody>
        <form onSubmit={onSubmit} method="POST" className="add_post_form">
          <FormGroup>
            <Input onChange={onChange} value={text} className="text_post" type="textarea" />
          </FormGroup>
          <div className="form_post_footer">
            <Button type="submit" outline>Crear</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  </div>
);

export default AddPost;
