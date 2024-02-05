import { useEffect, useState } from "react";
import CallApi from "../api/Api";
import { Link } from "react-router-dom";
import { Loading } from "../compoments/loading";
import createMarkup from "../compoments/htmlTag";
import SEO from "../compoments/seo";

const AboutPage = () => {
    const [loading, setLoading] = useState (true);
    const [title, setTitle] = useState ('');
    const [message, setMessage] = useState('message');
    const [benner, setBanner] = useState('');
    const [wording, setWording] = useState('');

    const divStyle = {
        backgroundImage: 'url(' + `${process.env.REACT_APP_URL_IMG}${benner}` + ')',
        
    }; 
    
    useEffect(() => {
        CallApi('about-us', 'GET')
        .then(ressponse => {
           if(ressponse.success === true) {
                setLoading(false);
                setTitle(ressponse.title);
                setMessage(ressponse.message);
                setBanner(ressponse.results.banner);
                setWording(ressponse.results.wording);
                
                // setPartner(ressponse.results.partner);
                // setProject(ressponse.results.project);
                // setSector(ressponse.results.sector);
                // setService(ressponse.results.service);
                // setTestimonial(ressponse.results.testimonial);
                console.log(ressponse);
           } else {
            alert('Error Page');
            console.log(ressponse);
           }
        })
    }, []);

    return (
    <>
      <SEO 
        title={'Garuda Organizer'}
        meta_description={''}
        meta_keywords={''}
        author={'Garuda Organizer'}
        url={window.location.href}
        og_image={`/public/favicon.ico`}
        />
         {loading === true ? <Loading/> : (
            <>
            <div className="bg-black">
                <div className="bg-outside-2 z-0 opacity-50 text-white relative" style={divStyle}> </div>
                <div className="container mx-auto relative h-full px-5 z-10 text-white">
                        <div className="absolute xl:bottom-24 lg:bottom-24 md:bottom-24 bottom-20 space-y-4">
                            <h1  className="font-semibold xl:text-4xl lg:text-4xl md:text-4xl text-2xl">About Us</h1>
                            <p className="xl:pr-52 lg:pr-52 md:pr-20 pr-14">{message !== ' ' ? 'Satu momen untuk kenangan abadi, kami memahami visi hiburan yang terletak pada pengalaman baik dan momen mempesona yang dapat menciptakan acara tak terlupakan yang dihadiri orang seperti rapat virtual, nikah online dan acar lainnya. Layanan kami dapat membuat beberapa ide acara online atau pertunjukan acara offline' : ''}</p>
                        </div>
                </div>
            </div>
         
            <div className="container mx-auto">
                <div className="py-10 xl:px-0 lg:px-0 px-5 ">
                    <div className="py-10 border-b-2 border-blue-500 w-max">
                        <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 ">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Home
                            </Link>
                            </li>
            
                            <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">About</span>
                            </div>
                            </li>
                        </ol>
                        </nav>
                    </div>
                    
                    <div className="py-10 space-y-5">
                    {<div dangerouslySetInnerHTML={createMarkup(wording)} /> }
                        {/* <h1 className="xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-semibold">Hadirkan Kesenangan Bersama Garuda </h1>
                        <div className="space-y-4">
                            <p >
                            Bagi Anda yang ingin menyelenggarakan berbagai acara dan tidak ingin acara terganggu dan berjalan lancar, Anda bisa meminta bantuan event organizer online yang berpengalaman. Tim profesional mereka siap membantu Anda dalam menyelenggarakan berbagai acara. 
                            </p>
                            <p>
                            Salah satu event organizer online atau offline terbaik adalah Garuda. Garuda melayani jasa nikah online, virtual meeting, acara sekolah, acara budaya, seminar, outbound, konser dan beberapa acara online dan offline lainnya sekaligus kami dokumentasikan agar bisa membuat acara menjadi mengesankan. 
                            </p>
                            <p>
                            Sebagai salah satu event organizer kami selalu siap membantu anda dengan berbagaik konsep acara yang anda inginkan. Hubungi kami via kontak sekarang juga untuk mendapatkan informasi lebih lanjut.
                            </p>
                        </div>

                        <h1 className="font-semibold">
                        Penyelenggara Acara Acara Online dan Offline
                        </h1>

                        <div className="space-y-4">
                            <p >
                            Bagi Anda yang ingin menyelenggarakan berbagai acara dan tidak ingin acara terganggu dan berjalan lancar, Anda bisa meminta bantuan event organizer online yang berpengalaman. Tim profesional mereka siap membantu Anda dalam menyelenggarakan berbagai acara. 
                            </p>
                            <p>
                            Salah satu event organizer online atau offline terbaik adalah Garuda. Garuda melayani jasa nikah online, virtual meeting, acara sekolah, acara budaya, seminar, outbound, konser dan beberapa acara online dan offline lainnya sekaligus kami dokumentasikan agar bisa membuat acara menjadi mengesankan. 
                            </p>
                            <p>
                            Sebagai salah satu event organizer kami selalu siap membantu anda dengan berbagaik konsep acara yang anda inginkan. Hubungi kami via kontak sekarang juga untuk mendapatkan informasi lebih lanjut.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            </>
         )}
        </>
    )
}

export default AboutPage;