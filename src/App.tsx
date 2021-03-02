import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// locale
import { I18nextProvider } from 'react-i18next';
import locale from './locale';

// components
import { MainLayout } from './components/layout/MainLayout';

const App: FC = () => (
  <I18nextProvider i18n={locale}>
    <Router>
      <MainLayout />
    </Router>
  </I18nextProvider>
);

export default App;
