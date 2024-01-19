import React from 'react';

/** Router */
import { Routes, Route } from 'react-router-dom';

/** Components */
import Home from './components/Home';

/** Routes */
import Services from './routes/services/Services';
import Favorites from './routes/favorites/Favorites';
import ServicePage from './routes/service/ServicePage';
import Auth from './routes/auth/Auth';
import Contacts from './routes/contacts/Contacts';
import Faq from './routes/faq/Faq';
import Cases from './routes/cases/Cases';
import NoMatch from './routes/NoMatch';
import Calculate from './routes/calculate/Calculate';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Services />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="auth" element={<Auth />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="faq" element={<Faq />} />
        <Route path="cases" element={<Cases />} />
        <Route path=":serviceId" element={<ServicePage />} />
        <Route path=":serviceId/calculate" element={<Calculate />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
