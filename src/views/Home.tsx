import Movies from '../components/Home/Movies';
import Paginator from '../components/Home/Paginator';
import Header from '../components/Layout/Header';

export const HomeView: React.FC = () => (
  <main>
    <Header />
    <Movies />
    <Paginator />
  </main>
);