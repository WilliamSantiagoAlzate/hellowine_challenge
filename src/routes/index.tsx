import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Views
import { HomeView } from '../views/Home';
import { DetailView } from '../views/Detail';
import { NotFoundView } from '../views/NotFound';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomeView} path="/" exact />
      <Route component={DetailView} path="/detail/:id" />
      <Route component={NotFoundView} />
    </Switch>
  </BrowserRouter>
);