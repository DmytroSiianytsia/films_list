import React from 'react'
import {Input, Menu, Sticky} from 'semantic-ui-react'
import ModalAddFilmContainer from "./ModalAddFilmContainer";

export default function header(props) {
  return (
    <Menu pointing color='black' inverted>
      <Menu.Item
        name='sort by title'
        onClick={props.sortFilms}
      />
      <ModalAddFilmContainer/>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input
            icon='search'
            placeholder='Input title or actor'
            onChange={event => {
              if (event.target.value === '') {
                props.loadFilms();
              } else {
                props.findFilm(event.target.value.trim())}
              }
            }
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
