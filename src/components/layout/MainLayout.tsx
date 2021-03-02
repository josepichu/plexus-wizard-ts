import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import PwdManagerPage from '../../pages/PwdManagerPage';

export const MainLayout: React.FunctionComponent = () => {
  return (
    <main>
      <section className='app-content'>
        <Switch>
          <Route exact path='/' component={PwdManagerPage} />
        </Switch>
      </section>
    </main>
  );
};
