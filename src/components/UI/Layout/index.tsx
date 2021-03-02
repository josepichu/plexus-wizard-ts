import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import PwdManagerPage from '../../../pages/PwdManagerPage';

const MainLayout: FC = () => {
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

export default MainLayout;
