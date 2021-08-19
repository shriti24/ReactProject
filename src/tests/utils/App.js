import React from 'react';
import { Switch } from 'react-router-dom';
import NotFound from '../../components/molecules/notFound/NotFound';
import ProtectedRoute from '../../components/organisms/ProtectedRoute';
import TestComponent from './TestComponent'


const currentAppPath = `/eventAllocation/,/abc/`;
const App = () => {
  return (
    <>
      <Switch>
       <ProtectedRoute exact path="/eventAllocation/" component={() => <TestComponent/>} />
       <ProtectedRoute exact path="/abc/" component={() => <TestComponent/>} />
       <ProtectedRoute exact path="/abc/a," component={() => <TestComponent/>} />
       <ProtectedRoute component={() => <NotFound currentAppPath={currentAppPath} />} />
      </Switch>
    </>
  );
};

export default App;
