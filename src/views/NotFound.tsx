import { Link } from 'react-router-dom';

export const NotFoundView: React.FC = () => (
  <main className="not-found">
    <section className="not-found__container">
      <h3 className="not-found__title">404</h3>
      <h5 className="not-found__description">Page not found</h5>
      <Link className="not-found__button" to="/">Go back</Link>
    </section>
  </main>
)