import Header from "../components/Layout/Header";
import Detail from "../components/Detail/Detail";
import BackButton from "../components/UI/BackButton";

export const DetailView: React.FC = () => (
  <main>
    <Header hasSearchInput={false} />
    <section className="movie-detail__back-button">
      <BackButton />
    </section>
    <Detail />
  </main>
);