import React from "react";

const imageBaseUrl: string | undefined = process.env.REACT_APP_IMAGE_BASE_URL;

type MovieDetailProps = {
  image: string
  title: string
  description: string
  homepage: string
  popularity: number
  status: string
  originalLanguage: string
  spokenLanguages: any[]
  genders: any[]
  productionCompanies: any[]
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  image,
  title,
  description,
  homepage,
  popularity,
  status,
  originalLanguage,
  spokenLanguages,
  genders,
  productionCompanies
}) => (
  <section className="movie-detail">
    <section className="movie-detail__container">
      <img 
        src={`${imageBaseUrl}${image}`} 
        alt={`Cartel de ${title}`}
        className="movie-detail__image"
      />
    </section>
    <section>
      <h4 className="movie-detail__title">{title}</h4>
      <p className="movie-detail__description">
        {description}
      </p>
      <p className="movie-detail__description">
        <strong>Página: </strong>{homepage}
      </p>
      <p className="movie-detail__description">
        <strong>Popularidad: </strong>{popularity}
      </p>
      <p className="movie-detail__description">
        <strong>Estado: </strong>{status}
      </p>
      <p className="movie-detail__description">
        <strong>Idioma original: </strong>{originalLanguage}
      </p>
      <div className="movie-detail__description">
        <strong>Idiomas disponibles: </strong>
        <ul>
          {spokenLanguages.map(lang => 
            <li key={lang.iso_639_1}>{lang.name}</li>
          )}
        </ul>
      </div>
      <div className="movie-detail__description">
        <strong>Géneros: </strong>
        <ul>
          {genders.map(gender => 
            <li key={gender.id}>{gender.name}</li>
          )}
        </ul>
      </div>
      <div className="movie-detail__description">
        <strong>Produtores: </strong>
        <ul>
          {productionCompanies.map(company => 
            <li key={company.id}>{company.name}</li>
          )}
        </ul>
      </div>
    </section>
  </section>
);

export default MovieDetail;