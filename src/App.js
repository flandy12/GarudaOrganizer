
import './App.css';
import './index.css';
import './css/style.min.css';
import './css/animation.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/home';
import PortofolioPage from './page/portofolioPage';
import ServicesPage from './page/servicePage';
import ContactUs from './page/contactUsPage';
import { HelmetProvider } from 'react-helmet-async';
import MicePage from './page/mice';
import RecruitmentPage from './page/recruitmentPage';
import DigitalPage from './page/digitalPage';
import CorporateHiringPage from './page/corporateHiringPage';
import AboutPage from './page/aboutPage';
import Layout from './page/layout';

function App() {

  
  return (
     <HelmetProvider>
        <Layout>
        
            <Routes>
              <Route path="/" element={ <HomePage/> } />
              <Route path="/about" element={ <AboutPage/> } />
              <Route path="/portofolio" element={ <PortofolioPage/> } />
              <Route path="/services" element={ <ServicesPage/> } />
              <Route path="/contact" element={ <ContactUs/> } />
              <Route path="/mice" element={ <MicePage/> } />
              <Route path='/recruitment' element={ <RecruitmentPage/> } />
              <Route path='/digital-services' element={ <DigitalPage/> } />
              <Route path='/coporate-hiring' element={ <CorporateHiringPage/> } />
         
            </Routes>
           

        </Layout>
     </HelmetProvider>

  )
}

export default App;
