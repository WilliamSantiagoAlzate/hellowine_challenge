import { Switch, Route } from 'react-router-dom';
// Views
import { HomeView } from '../views/Home';
import { DetailView } from '../views/Detail';
import { NotFoundView } from '../views/NotFound';

export const Routes: React.FC = () => (
  <Switch>
    <Route component={HomeView} path="/" exact />
    <Route component={DetailView} path="/detalle/:id" />
    <Route component={NotFoundView} />
  </Switch>
);