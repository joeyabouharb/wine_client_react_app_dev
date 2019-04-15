import React from 'react';
import InjectRoutes from './routes/InjectRoutes';
import Navigation from './components/shared/Navigation';

const App = () => (
  <>
    <h1 className="text-center"> Uncorked! </h1>
    <Navigation />
    <InjectRoutes />
  </>
);
export default App;
