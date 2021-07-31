import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);