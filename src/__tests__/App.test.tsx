import { mount } from 'enzyme';
import { ProviderMock } from '../mocks/ProviderMock';
import { App } from '../App';

describe('<App />', () => {
  test('App component is rendering', () => {
    const app = mount(
      <ProviderMock>
        <App />
      </ProviderMock>
    );
    expect(app.length).toEqual(1);
  })
})