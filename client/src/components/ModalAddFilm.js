import React from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Button, Modal, Form, Input, Menu} from 'semantic-ui-react';

export default function ModalAddFilm(props) {
  const {addTrailer, addPoster, addTitle, addReleaseYear, addGenres, addStars, postFilm, film, addDescription} = props;
  const {title, release, genres, actors, urlPoster, trailer, film_description} = film;
  return (
    <Modal trigger={<Menu.Item>Add Film</Menu.Item>}>
      <Modal.Header>Add New Film</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                fluid
                id='form-input-control-Title'
                control={Input}
                label='Title'
                placeholder='Title'
                value={title}
                onChange={event => addTitle(event.target.value)}
              />
              <Form.Field
                fluid
                id='form-input-control-ReleaseYear'
                control={Input}
                label='Release_Year'
                placeholder='Release_Year'
                value={release}
                onChange={event => addReleaseYear(event.target.value)}
              />
              <Form.Field
                fluid
                id='form-input-control-Genres'
                control={Input}
                label='Genres'
                placeholder='Genres'
                value={genres}
                onChange={event => addGenres(event.target.value)}
              />
              <Form.Field
                fluid
                id='form-input-control-urlPoster'
                control={Input}
                label='urlPoster'
                placeholder='urlPoster'
                value={urlPoster}
                onChange={event => addPoster(event.target.value)}
              />
              <Form.Field
                fluid
                id='form-input-control-urlTrailer'
                control={Input}
                label='youTubeIdForTrailer'
                placeholder='vQv2bK0XkXQ'
                value={trailer}
                onChange={event => addTrailer(event.target.value)}
              />
            </Form.Group>
            <Form.Field
              control={TextareaAutosize}
              label='Stars'
              placeholder='Add stars'
              value={actors}
              onChange={event => addStars(event.target.value)}
            />
            <Form.Field
              control={TextareaAutosize}
              label='About Film'
              placeholder='About Film'
              value={film_description}
              onChange={event => addDescription(event.target.value)}
            />
            <Form.Field
              style={{marginTop: 10}}
              id='form-button-control-Add'
              color='black'
              control={Button}
              content='Add film'
              onClick={() => postFilm(film)}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
