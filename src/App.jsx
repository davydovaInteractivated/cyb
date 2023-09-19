/** Router */
import { Routes, Route } from 'react-router-dom';

/** Components */
import Home from './components/Home';
import Services from './components/Services';

/** Routes */
import ServicePage from './routes/service/ServicePage';
import Auth from './routes/auth/Auth';
import Contacts from './routes/contacts/Contacts';
import Faq from './routes/faq/Faq';
import NoMatch from './routes/NoMatch';
import Calculate from './routes/calculate/Calculate';

const App = () => {
  console.log('App render');

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Services />} />
        <Route path='auth' element={<Auth />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='faq' element={<Faq />} />
        <Route path=':serviceId' element={<ServicePage />} />
        <Route path=':serviceId/calculate' element={<Calculate />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App;
