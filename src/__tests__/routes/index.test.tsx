import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import { Routes } from '../../routes/index';

describe('<Routes />', () => {
  test('Routes component is rendering', () => {
    const routes = mount(
      <ProviderMock>
        <Routes />
      </ProviderMock>
    );
    expect(routes.length).toEqual(1);
  })
})