import Movies from '../components/Home/Movies';
import Header from '../components/Layout/Header';

export const HomeView: React.FC = () => (
  <main>
    <Header />
    <Movies />
  </main>
);