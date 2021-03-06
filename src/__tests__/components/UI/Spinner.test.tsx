import { mount } from 'enzyme';
import { ProviderMock } from '../../../mocks/ProviderMock';
import Spinner from '../../../components/UI/Spinner';
import { spinnerColors } from '../../../types';

describe('<Spinner />', () => {
  test('Spinner component is rendering', () => {
    const spinner = mount(
      <ProviderMock>
        <Spinner color={spinnerColors.black}/>
      </ProviderMock>
    );
    expect(spinner.length).toEqual(1);
  })
})