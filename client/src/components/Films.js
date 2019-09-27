import React from 'react';
import '../css/films.css';

export default class Films extends React.Component {

  componentDidMount() {
    this.props.loadFilms()
  }

  render() {
    const {films, showInfo, removeFilm, infoAboutFilm} = this.props;
    if (films) {
      return (
        films.map(film => {
          return (
            <div className='wrapper' key={film.id}>
              <div className='film'>
                <h3 className='film__title' onClick={() => showInfo(film.id)}>
                  {film.title}
                </h3>
                <div className='container'>
                  <div className='film__body'>
                    <div className='film__poster'>
                      <img className='poster' src={film.img} alt={film.title}/>
                    </div>
                    <div className='film__short-info'>
                      <div>
                        <h4>Год:</h4>{film.release}
                      </div>
                      <div>
                        <h4>Жанр:</h4>{film.genres}
                      </div>
                      <div>
                        <h4>Актеры:</h4>{(film.actors && typeof film.actors == 'object')
                        ? film.actors.join(', ')
                        : film.actors}
                      </div>
                    </div>
                    {(film.id > 12)
                      ? <div className='film__remove'
                             onClick={(e) => {
                               e.stopPropagation();
                               removeFilm(film.id)
                             }}>
                        Удалить
                      </div>
                      : ''
                    }
                  </div>
                  {infoAboutFilm === film.id
                    ?
                    <div className='film__more-info'>
                      <div className='film__trailer'>
                        {film.trailer
                          ? <iframe className='film__iframe'
                                    width="320"
                                    height="240"
                                    src={`https://www.youtube.com/embed/${film.trailer}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                          : ''}
                      </div>
                      <div className='film__description'>
                        {film.film_description}
                      </div>
                    </div>
                    : ''}
                </div>
              </div>
            </div>
          )
        })
      )
    } else {
      return <div>loading</div>
    }
  }
}
