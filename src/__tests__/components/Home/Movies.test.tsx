import { mount } from 'enzyme';
import { ProviderMock, ProviderMockStore } from '../../../mocks/ProviderMock';
import Movies from '../../../components/Home/Movies';

describe('<Movies />', () => {
  test('Movies component is rendering', () => {
    const movies = mount(
      <ProviderMock>
        <Movies />
      </ProviderMock>
    );
    expect(movies.length).toEqual(1);
  })

  test('Render movie card', () => {
    const movies = mount(
      <ProviderMockStore>
        <Movies />
      </ProviderMockStore>
    );
    expect(movies.length).toEqual(1);
  })
})