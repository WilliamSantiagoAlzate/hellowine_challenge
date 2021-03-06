import { mount } from 'enzyme';
import { ProviderMock } from '../../mocks/ProviderMock';
import { NotFoundView } from '../../views/NotFound';

describe('<NotFoundView />', () => {
  test('NotFound view is rendering', () => {
    const notFoundView = mount(
      <ProviderMock>
        <NotFoundView />
      </ProviderMock>
    );
    expect(notFoundView.length).toEqual(1);
  })
})