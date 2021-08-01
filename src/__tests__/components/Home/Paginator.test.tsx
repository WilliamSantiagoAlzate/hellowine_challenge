import { mount } from 'enzyme';
import { ProviderMock, ProviderMockStore } from '../../../mocks/ProviderMock';
import Paginator from '../../../components/Home/Paginator';

describe('<Paginator />', () => {
  test('Paginator component is rendering', () => {
    const paginator = mount(
      <ProviderMock>
        <Paginator />
      </ProviderMock>
    );
    expect(paginator.length).toEqual(1);
  })

  test('Next and prev button works', () => {
    const paginator = mount(
      <ProviderMockStore>
        <Paginator />
      </ProviderMockStore>
    );
      
    const nextButton = paginator.find('button').at(1);
    nextButton.simulate('click');
    expect(paginator.find('p').text()).toEqual('2 (100)');

    const prevButton = paginator.find('button').at(0);
    prevButton.simulate('click');
    expect(paginator.find('p').text()).toEqual('1 (100)');
  })
})