import { useEffect, useState } from "react";
import CallApi from "../api/Api";
import { Link } from "react-router-dom";
import { Loading } from "../compoments/loading";
import { scrollToTop, createMarkup } from "../compoments/htmlTag";
import SEO from "../compoments/seo";

const AboutPage = () => {
    const [loading, setLoading] = useState (true);
    const [message, setMessage] = useState('message');
    const [benner, setBanner] = useState('');
    const [wording, setWording] = useState('');
    const [vision_mission, setVision_Mission] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        CallApi('about-us', 'GET')
        .then(ressponse => {
            
            scrollToTop();
           if(ressponse.success === true) {
                setLoading(false);
                setMessage(ressponse.results.banner_wording);
                setBanner(ressponse.results.banner);
                setWording(ressponse.results.wording);
                setVision_Mission(ressponse.results.vision_mission);
                setImage(ressponse.results.image);
           } else {
            alert('Error Page');
            
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
             <div >
  
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-12 w-full min-h-[500px] max-md:px-5 max-md:max-w-full bg-black">
                    <picture>
                    <source  srcSet={`${process.env.REACT_APP_URL_IMG}${benner}`} type="image/webp"/>
                    <img className="object-cover absolute inset-0 size-full opacity-50" src={`${process.env.REACT_APP_URL_IMG}${benner}`}alt="Exhibition & Expo" loading="lazy" />
                </picture> 
                    <div className="flex relative flex-col mt-40 mb-28 max-w-full w-[726px] max-md:my-10">
                    <div className="self-center text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                        About Us
                    </div>
                    <div className="mt-10 text-base text-center w-[726px] text-white text-opacity-80 max-md:mt-10 max-md:max-w-full" dangerouslySetInnerHTML={createMarkup(message)} />
                    </div>
                    </div>
   
                <div className="container mx-auto text-center px-5">
              
                <div className="flex flex-col px-5 bg-white">
         
                <div className="self-center xl:mt-24 lg:mt-24 md:mt-0 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex xl:flex lg:flex xl:flex-row lg:flex-row md:flex-col-reverse md:space-y-10 gap-5 max-md:flex-col-reverse max-md:gap-0 ">
                    <div className="flex flex-col text-left xl:w-[54%] lg:w-[54%] md:w-full max-md:ml-0 max-md:w-full">
                      <div className="my-auto text-2xl max-md:mt-10 max-md:max-w-full">
                        <span className="self-start px-5 py-2 font-bold text-white whitespace-nowrap rounded-3xl border border-blue-300 border-solid capitalize bg-cs">
                          company history
                        </span>
                        <div className="xl:mt-14 lg:mt-14 md:mt-10 max-md:pe-0 leading-8 text-black max-md:mt-10 max-md:max-w-full">
                            <div className="text-left me-10" dangerouslySetInnerHTML={createMarkup(wording)} />
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col xl:ml-5 lg:ml-5 md:ml-0 xl:w-[46%] lg:w-[46%] md:w-full max-md:ml-0 max-md:w-full object-cover">
                      <img
                        loading="lazy"
                        srcSet={`${image}`}
                        alt="About Asset"
                        className="w-full aspect-[0.84] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col xl:px-20 lg:px-20 md:px-5 py-10 mt-20 w-full text-2xl text-center bg-blue-100 max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-lg">
                
                  <div className="flex justify-center self-start px-5 py-2 font-bold text-white whitespace-nowrap rounded-3xl border border-blue-300 border-solid capitalize bg-cs mx-auto ">
                        our mission & vission
                    </div>
                  <div className="mt-6 mr-3.5 ml-4 leading-8 text-black max-md:mr-2.5 max-md:max-w-full">
                      <div dangerouslySetInnerHTML={createMarkup(vision_mission)} />  
                  </div>
                </div>
            <div className="self-center my-20 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse gap-5 max-md:flex-col-reverse max-md:gap-0 max-md:">
                <div className="flex xl:w-[50%] lg:w-[50%] md:w-full flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-2xl text-black  py-5 rounded-lg w-100">
                    <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl ">
                      Have a question ?<br />
                      Our team is happy <br />
                      to assist you
                    </div>
                    <div className="mt-9 leading-8 max-md:max-w-full">
                      Don't hesitate to contact our team and share your ideas,
                      questions, or needs. We're here to help make any challenges you
                      face a reality. Together, let's find the right solution to meet
                      your needs!
                    </div>
                    <div className="relative shrink-0 mt-2 border-b border-solid border-b-black h-[46px] max-md:max-w-full" />
                        <Link to={'/contact'} className="relative">
                        <div className="justify-center items-start py-3 pr-16 pl-4 mt-7 max-w-full whitespace-nowrap bg-sky-200 rounded-3xl   w-[190px] max-md:pr-5 relative">
                        Contact Us
                        <img src="/images/icon/ArrowRightAbout.png" alt="icon-right" className="absolute top-0 right-5" />
                        </div>
                        </Link>
                  </div>
                </div>
                <div className="xl:flex lg:flex md:hidden sm:hidden justify-center m-auto flex-col  max-md:mx-5">
                  <img
                    loading="lazy"
                    srcSet="/images/asset/contact-us-about.png"
                    className=" max-md:mt-10"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
                </div>
            </div>
         )}
        </>
    )
}

export default AboutPage;