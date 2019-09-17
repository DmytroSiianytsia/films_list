import React from 'react';
import {Button, Accordion, Image, Item, Grid, Header, Embed} from 'semantic-ui-react';

export default class Films extends React.Component {

  componentDidMount() {
    this.props.loadFilms()
  }

  render() {
    const {films, showInfo, removeFilm, infoAboutFilm, searchFilms} = this.props;
    if (films) {
      return (
        films.map(film =>
          <Accordion fluid styled key={film.id}>
            <Accordion.Title onClick={() => showInfo(film.id)}>
              <Item key={film.id}>
                <Header as='h3' textAlign='center'>
                  {film.title}
                  {(film.id > 12)
                    ? <Button
                      content='Remove film'
                      floated='right'
                      color='black'
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFilm(film.id)
                      }}
                    />
                    : ''
                  }
                </Header>
                <Item.Content>
                  <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={2}>
                        {film.img ? <Image src={film.img} size='large'/> : ''}
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Item.Header as='a'>Release:</Item.Header>
                        <Item.Meta>{film.release}</Item.Meta>
                        <Item.Header as='a'>Genres:</Item.Header>
                        <Item.Meta>{film.genres}</Item.Meta>
                        <Item.Header as='a'>Stars:</Item.Header>
                        <Item.Meta>{(film.actors && typeof film.actors == 'object')
                          ? film.actors.join(', ')
                          : film.actors}</Item.Meta>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Item.Content>
              </Item>
            </Accordion.Title>
            <Accordion.Content active={infoAboutFilm === film.id}>
              <Grid divided>
                <Grid.Row color='black' inverted centered>
                  <Grid.Column width={4}>
                    {film.trailer
                      ? <Embed
                        id={film.trailer}
                        placeholder={film.img}
                        source='youtube'
                        iframe={{
                          allowFullScreen: true,
                          style: {
                            padding: 10,
                          },
                        }}
                      />
                      : ''
                    }
                  </Grid.Column>
                  <Grid.Column width={6}>
                    {film.film_description}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
          </Accordion>
        ))
    } else {
      return <div>Loading...</div>
    }
  }
}
