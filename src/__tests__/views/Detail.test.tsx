import { mount } from 'enzyme';
import { ProviderMock } from '../../mocks/ProviderMock';
import { DetailView } from '../../views/Detail';

describe('<DetailView />', () => {
  test('Detail view is rendering', () => {
    const detailView = mount(
      <ProviderMock>
        <DetailView />
      </ProviderMock>
    );
    expect(detailView.length).toEqual(1);
  })
})