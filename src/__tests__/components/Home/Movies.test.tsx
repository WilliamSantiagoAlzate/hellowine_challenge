import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
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
})