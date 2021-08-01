import { mount } from 'enzyme';
import { ProviderMock, ProviderMockStore } from '../../../mocks/ProviderMock';
import Detail from '../../../components/Detail/Detail';

describe('<Detail />', () => {
  test('Detail component is rendering', () => {
    const detail = mount(
      <ProviderMock>
        <Detail />
      </ProviderMock>
    );

    expect(detail.length).toEqual(1);
  })

  test('Detail component is rendering with movie', () => {
    const detail = mount(
      <ProviderMockStore>
        <Detail />
      </ProviderMockStore>
    );

    expect(detail.length).toEqual(1);
  })
})