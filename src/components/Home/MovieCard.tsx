import { Link } from "react-router-dom";
import { trimText } from "../../helpers/trimText";

const imageBaseUrl: string | undefined = process.env.REACT_APP_IMAGE_BASE_URL;

type MovieCardProps = {
  id: number
  title: string
  image: string
  lang: string
  description: string
}

const MovieCard: React.FC<MovieCardProps> = ({
  id, 
  title, 
  image, 
  lang, 
  description 
}) => (
  <article className="movie-card">
    <main className="movie-card__main">
      <img 
        src={`${imageBaseUrl}${image}`} 
        alt={`Cartel de ${title}`} 
        className="movie-card__image" 
      />
    </main>
    <footer className="movie-card__footer">
      <h5 className="movie-card__title">{title}</h5>
      <p className="movie-card__description">
        <strong>Idioma original: </strong>{lang}
      </p>
      <p className="movie-card__description">{trimText(description, 200)}</p>
      <Link to={`/detalle/${id}`} className="movie-card__button">
        Ver detalle
      </Link>
    </footer>
  </article>
)

export default MovieCard;