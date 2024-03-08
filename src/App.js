
import './App.css';
import './index.css';
import './css/style.css';
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
import SEO from './compoments/seo';
import NotFound from './page/error/error_404';

function App() {

  
  return (
     <HelmetProvider>
        <Layout>
          <SEO 
              title={'Garuda Organizer - Perusahaan Profesional Di Bidang Jasa Event Organizer (EO) Jakarta'}
              meta_description={'Garuda Organizer - Jelajahi Kreativitas dan Kelengkapan Dokumentasi Acara bersama Garuda Organizer, Jasa Event Organizer Profesional di Jakarta dengan Konsep Unik!'}
              meta_keywords={'eo jakarta, eo indonesia, event organizer, event online, event management, bazzar, mice, event, event tebaik, jakarta'}
              author={'Garuda Organizer'}
              url={window.location.href}
            />
            <Routes>
              <Route path="/" element={ <HomePage/> } />
              <Route path="/about" element={ <AboutPage/> } />
              <Route path="/portofolio" element={ <PortofolioPage/> } />
              <Route path="/services" element={ <ServicesPage/> } />
              <Route path="/contact" element={ <ContactUs/> } />
              <Route path="/mice" element={ <MicePage/> } />
              <Route path='/recruitment' element={ <RecruitmentPage/> } />
              <Route path='/digital-services' element={ <DigitalPage/> } />
              <Route path='/corporate-hiring' element={ <CorporateHiringPage/> } />
              <Route path="*" element={<NotFound />} />
            </Routes>
           

        </Layout>
     </HelmetProvider>

  )
}

export default App;
