import { mount } from 'enzyme';
import { ProviderMock } from '../../../mocks/ProviderMock';
import SearchInput from '../../../components/UI/SearchInput';

describe('<SearchInput />', () => {
  test('Search input component is rendering', () => {
    const onChange = jest.fn();
    const searchInput = mount(
      <ProviderMock>
        <SearchInput
          value={'Value'}
          onChange={onChange}
          icon={'Icon'}
        />
      </ProviderMock>
    );

    expect(searchInput.length).toEqual(1);
  })
})