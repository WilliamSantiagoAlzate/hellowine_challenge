import { mount } from 'enzyme';
import { ProviderMock } from '../../../mocks/ProviderMock';
import MovieDetail from '../../../components/Detail/MovieDetail';

describe('<MovieDetail />', () => {
  test('Movie detail component is rendering', () => {
    const movieDetail = mount(
      <ProviderMock>
        <MovieDetail
          image={'Image'}
          title={'Title'}
          description={'Description'}
          homepage={'Homepage'}
          popularity={1000}
          status={'Status'}
          originalLanguage={'Language'}
          spokenLanguages={[{ iso_639_1: 1, name: 'Language' }]}
          genders={[{ id: 1, name: 'Gender' }]}
          productionCompanies={[{ id:1, name: 'Company' }]}
        />
      </ProviderMock>
    );

    expect(movieDetail.length).toEqual(1);
  })
})