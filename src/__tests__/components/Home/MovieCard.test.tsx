import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import MovieCard from '../../../components/Home/MovieCard';

describe('<MovieCard />', () => {
  test('Movie card component is rendering', () => {
    const movieCard = mount(
      <ProviderMock>
        <MovieCard 
          id={1} 
          title={'Title'}
          image={'Image'}
          lang={'Lang'}
          description={'Description'}
        />
      </ProviderMock>
    );
    expect(movieCard.length).toEqual(1);
  })
})