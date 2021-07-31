import { createStore, Store } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/reducers';

export const store: Store = createStore(rootReducer);

export const ProviderMock: React.FC = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route>
          {children}
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);