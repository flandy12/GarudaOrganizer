import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import CountUp from "react-countup";

// or only core styles
import '@splidejs/react-splide/css/core';
import { useEffect, useState } from "react";
import CallApi from "../api/Api";
import Portfolio from "../compoments/portofolio";
import SEO from '../compoments/seo';
import SkeletonPortofolio from '../compoments/skeleton';
import { Loading } from '../compoments/loading';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [count, setCount] = useState(false);
    const [banner, setBanner] = useState([]);
    const [achievement, setAchievement] = useState([]);
    const [partner, setPartner] = useState([]);
    const [project, setProject] = useState([]);
    const [sector, setSector]  = useState([]);
    const [service, setService] = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    const [why_choose_us, setWhyChooseUs] = useState([]);

    const [loading, setLoading ] = useState(true);
  
    const handleScrollAnimation = () => { 
        const scrollElements = document.querySelectorAll('.animations-element');
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
        });
    };
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => { 
        const classAnimation = element.getAttribute('data-animation');
        const classAnimationCount = element.getAttribute('data-count');
        if(classAnimation) {
            element.classList.add(classAnimation);
        }
        if(classAnimationCount) {
            setCount(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }

    const arrays = ['a','b','c','d'];

    useEffect(() => {    
        // Animation Scroll
        window.addEventListener("scroll", function(e) {
                handleScrollAnimation();
        });
        
        CallApi('home', 'GET')
        .then(ressponse => {
            console.log(ressponse);
            scrollToTop();
           if(ressponse.success === true) {
                setLoading(false);
                setBanner(ressponse.results.banner);
                setAchievement(ressponse.results.achievement);
                setPartner(ressponse.results.partner);
                setProject(ressponse.results.project);
                setSector(ressponse.results.sector);
                setService(ressponse.results.service);
                setTestimonial(ressponse.results.testimonial);
                setWhyChooseUs(ressponse.results.why_choose_us);
               
           } else {
            alert('Error Page');
           }
           console.log(ressponse);
        })
        
    }, []);

    const Testimoni = (props) => {

        const VideoTestimoni = () => {

            const [videoClip, setVideoClip] = useState(0);
            
            const onClickVideo = (e) => {
                setVideoClip(e.target.getAttribute('data-target-video'));
            }
    
            return (
                <div className="rounded space-y-4 text-center relative">
                    <div className='xl:space-y-5 lg:space-y-5 space-y-2 xl:px-28 lg:px-28 px-0'>
                    <div className='flex justify-center mb-10'>
                        <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-auto animations-element"  data-animation="fade-in-fwd">
                        From Our Happy Customers
                        </div>
                    </div>
                  
                    <h2 className="text-slate-700 xl:text-5xl lg:text-3xl text-3xl font-bold xl:leading-[53px] lg:leading-[39px] leading-[39px] tracking-normal xl:px-30 lg:px-30 px-4">Don't take our word for it. Szee what
customers are saying about us.</h2>
                    <p className="px-5 xl:px-32 lg:px-32 xl:mx-10 lg:mx-0 mx-0 xl:pb-0 lg:pb-0 pb-5 text-lg" >
                    We have held various events with various themes, both for private and government agencies. Our success creates unforgettable experiences.
                    </p>
                    </div>
                    
                    <div className={`flex flex-wrap xl:grid lg:grid md:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  xl:gap-5 lg:gap-5 gap-8 first-letter:gap-4 items-center place-content-center text-left z-gray-700 xl:pt-10 lg:pt-10 pt-5`} >    
                        {props.data !== '[]' ? (
                            props.data.map((value,keys) => (
                                <div className={`w-full h-full `} key={keys}>
                                  <div className={`grid place-content-center relative animations-element`} data-animation="fade-in-fwd-2">
                                      { value.image !== '' ? 
                                      <picture>
                                        <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                                        <img src={`${process.env.REACT_APP_URL_IMG}${value.image}`} alt={value.title} className={`rounded-2xl aspect-video ${videoClip === `${keys}` ? 'hidden' : ''}`} loading='lazy' />
                                      </picture> 
                                       : <div className="h-52 bg-slate-200 rounded-xl"></div>}
          
                                      <iframe width="auto" height="227px" allowFullScreen allow='autoplay' className={`w-full aspect-video rounded-2xl ${videoClip === `${keys}` ? '' : 'hidden'}`} src={`${videoClip === `${keys}` ?  `${value.video}?rel=0&amp;autoplay=1` : ''} `} title={value.title}> </iframe> 
          
                                      <button className={`bg-blue-500 rounded-full w-12 h-12 absolute m-auto left-0 right-0 top-0 bottom-0 ${videoClip === `${keys}` ? 'hidden' : ''}`}>
                                            <picture>
                                                <source srcSet='/images/icon/icon-play.png'  type="image/webp"/>
                                                <img src="/images/icon/icon-play.png" alt="icon-play" className="mx-auto w-5 h-5" onClick={ onClickVideo } data-target-video={`${keys}`}/>
                                            </picture>
                                      </button>
                                  </div>
                            
                                  <div>
                                      <h1 className="mb-3 text-slate-700 xl:text-xl lg:text-xl text-lg font-semibold mt-5 line-clamp-2 xl:px-0 lg:px-0 md:px-0 px-0">{value.title}
                                      </h1>
                                  </div>
                              </div>
                          ))
                        ) :  <SkeletonPortofolio/> }  
                       
                    </div>
                </div>
            )
        }
   
        return (
            <VideoTestimoni/>
        )
    };

    const CarouselAbout = (props) => {
        let [counts, setCountS] = useState(0);
        let carousel_item = document.querySelectorAll('.carousel-item-about');

        useEffect(() => {
            if(counts < carousel_item.length) {
                let interval = setInterval(() => {  
                    setCountS(counts+1);
                }, 3000);

                return () => {
                    clearInterval(interval)
                }
            } else {
                setCountS(0);
                let interval = setInterval(() => {  
                    setCountS(counts+1);
                }, 3000);
                

                return () => {
                    clearInterval(interval)
                  }
            }

           

        }, [counts])

        return (
            <>
            {props.data.map((value,key) => (
                  
                    <div className="p-0 rounded-xl" key={key} >
                       <div className={`carousel-item-about rounded-xl ${counts === key ? '' : 'hidden'}`} id={`carousel-item-${key}`} >    
                            <picture>
                                <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                                <img src={`${process.env.REACT_APP_URL_IMG}${value.image}`} className={`block w-full h-full rounded-xl ${counts === key ? 'fade-in' : 'fade-out'}`}  alt="..." loading='lazy'/>
                            </picture> 
                        </div>
                    </div>
            ))}                  
            </>

        )
    }

    const CarouselHeadline = (props) => {

        let [counts, setCountS] = useState(0);
        let carousel_item = document.querySelectorAll('.carousel-item');
       
        useEffect(() => {
            if(counts < carousel_item.length) {
                let interval = setInterval(() => {  
                    setCountS(counts+1);
                }, 3000);

                return () => {
                    clearInterval(interval)
                }
            } else {
                setCountS(0);
                let interval = setInterval(() => {  
                    setCountS(counts+1);
                }, 3000);
                

                return () => {
                    clearInterval(interval)
                  }
            }
        }, [counts]);

        return (
   
            <div >
                <div className="p-0 " id="CarouselHeadline">

                { props.data.map((value,key) => (
           
                  <div className={`carousel-item  px-5  ${counts === key ? 'flex xl:grid lg:grid md:grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 flex-col-reverse gap-9 items-center slide-headline ' : 'hidden'  }`} key={key}>
                      <div className="xl:space-y-5 lg:space-y-5 space-y-2 relative " >

                          <h1 className={`xl:text-5xl lg:text-3xl text-3xl  xl:leading-[53px] lg:leading-[39px] leading-[39px] font-bold text-left text-headline-benner bounce-top pe-10 text-slate-700`}>
                              
                          {value.title}

                          </h1>

                          <p className={`mr-10 text-description-benner slide-right xl:pr-14 lg:pr-14 md:pr-4`} data-animation='slide-right'>
                          {value.description}
                          </p>

                      </div>

                      <div className={`slide-right-headline about-image w-full`}>
                        <picture>
                            <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                            <img src={`${process.env.REACT_APP_URL_IMG}${value.image}`} alt="benners-headline" className={`rounded-xl block w-full h-full  ${counts === key ? 'fade-in' : 'fade-out'} `} loading="lazy"/>
                        </picture> 
                         
                      </div>
                  </div>

              ))}
                   
                </div>
            </div>

        )
    }

    return (
        
            <>  
                <SEO 
                title={'Garuda Organizer - Perusahaan Profesional Di Bidang Jasa Event Organizer (EO) Jakarta'}
                meta_description={'Garuda Organizer adalah perusahaan profesional di bidang Jasa Event Organizer (EO) dan Penyelenggara Acara di Jakarta dengan konsep unik dan dokumentasi lengkap'}
                meta_keywords={'eo jakarta, eo indonesia, event organizer, event online, event management'}
                author={'Garuda Organizer'}
                url={window.location.href}
                />
                
               {loading === true ? <Loading/> : (
                    <div className={`mx-auto`}>

                    <div>
                        <div className="container mx-auto py-5 xl:py-20 lg:py-20 md:py-10 px-5 xl:block lg:block " >
                            <CarouselHeadline  data={banner}/>
                        </div>
                    </div>

                    <div className=''>
                        <div className="container mx-auto text-center xl:space-y-5 lg:space-y-5 space-y-5 rounded px-5 xl:py-14 lg:py-14 p-7 bg-sky-50">
                            <div className='flex justify-center'>
                                <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-[160px] animations-element" data-animation="fade-in-fwd">
                                Our Profile
                                </div>
                            </div>
        
                            <h2 className="xl:text-5xl lg:text-3xl text-3xl font-bold xl:leading-[53px] lg:leading-[39px] leading-[39px] tracking-normal portofolio-headline animations-element capitalize text-slate-700 lg:mt-30" data-animation="slide-top">
                                What Do We Do?
                            </h2>
                        
                            <div className="w-full">
                                <div className="flex flex-wrap xl:grid lg:grid md:grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xl:gap-5 lg:gap-5 gap-8 items-center place-content-center text-center xl:py-10 lg:py-10 py-10 xl:px-5 lg:px-5 md:px-5 px-3">

                                    {sector.map((value,key) => (
                                            <div className={`mx-auto text-center bg-white text-black shadow rounded-xl xl:px-5 lg:px-5 md:px-5 px-10  animations-element border icon-services py-10`} data-animation="fade-in-fwd" key={key}>
                                             <picture>
                                                <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                                                <img className="w-14 mx-auto" src={`${process.env.REACT_APP_URL_IMG}${value.image}`} alt="Exhibition & Expo" loading="lazy" />
                                            </picture> 
                                          
                                            <div className='space-y-3'> 
                                                <p className="font-bold xl:text-xl lg:text-xl md:text-base text-lg mt-5 text-slate-700">{value.name}</p>
                                                <p className="mt-5 line-clamp-3">{value.description}</p>
                                            
                                            </div>
                                        </div>
                                    ))}
                                
                            
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="bg-mobile-blue py-20 xl:mb-20 lg:mb-20 mb-0">
                        <div className="container mx-auto px-5">
                                
                                 <div className="w-full xl:mt-40 lg:mt-40 mt--0 max-md:max-w-full">
                                    <div className="gap-5 flex space-y-5 xl:flex-row lg:flex-row flex-col max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch xl:w-[51%] lg:w-[51%] w-full max-md:w-full max-md:ml-0 animations-element opacity-0" data-animation="fade-in-fwd">
                                            <div className="flex flex-col self-stretch items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
                                                <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start">
                                                    Why Choose Us?
                                                </div>
                                                <div className="justify-center text-slate-700 xl:text-5xl lg:text-4xl text-3xl font-bold leading-[39px] tracking-normal mt-9 max-md:max-w-full">
                                                    We bring solutions to
                                                    <br />
                                                    manage your event
                                                    <br />
                                                    way works best.
                                                </div>
                                                <div className="grid grid-cols-2 grid-rows-2 items-stretch justify-between gap-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                                  {why_choose_us.map((value,key) => (
                                                      <div className="flex-col items-stretch" key={key}>
                                                      <div className="justify-center text-slate-700 xl:text-xl lg:text-lg  text-md font-bold leading-7 tracking-normal">
                                                          {key + 1}<span className="text-slate-700"> {value.description}</span>
                                                      </div>
                                                      </div>
                                                    ))}
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch xl:w-[49%] lg:w-[49%] w-full xl:ml-5 lg:ml-5 ml-0 max-md:w-full max-md:ml-0 " >
                                            <div className="bg-blue-600 flex grow justify-center w-full xl:px-12 lg:px-12 md:px-5 px-0 xl:py-12 lg:py-12 md:py-5 py-5 xl:mt-10 lg:mt-10 md:mt-5 mt-0 items-center max-md:max-w-full max-md:mt-10 max-md:px-5 rounded-xl">
                                                <div className=" flex relative justify-center mt-2.5 items-start animations-element" data-animation="fade-in-fwd">

                                                    <CarouselAbout data={why_choose_us}/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                
                    <div className="container mx-auto text-center xl:space-y-5 lg:space-y-5 space-y-2 rounded px-5 xl:mb-20 lg:mb-20">
                        <div className='flex justify-center text-center mb-10'>
                            <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-[auto] text-center animations-element" data-animation="fade-in-fwd">
                                Our Services
                            </div>
                        </div>
                      

                        <h2 className="text-slate-700 xl:text-5xl lg:text-3xl text-3xl font-bold xl:leading-[53px] lg:leading-[53px] leading-[39px] tracking-normal portofolio-headline animations-element capitalize xl:px-30 lg:px-30 px-8" data-animation="slide-top">
                            Improve Your Event, Transform Your Experience
                        </h2>

                        <div className="">
                            <p className="xl:px-32 lg:px-32 px-5 xl:mx-10 lg:mx-10 mx-0 mb-5 font-base py-5 animations-element portofolio-description" data-animation="slide-top">
                            At Garuda Organizer, we are proud to offer a comprehensive range of services designed to make your event extraordinary. Whether it's a corporate meeting, incentive program, conference or exhibition, we bring creativity, precision and innovation to every aspect of event planning and execution. Explore our services below.
                            </p>
                        </div>

                        <div className="w-full">
                            <div className="flex flex-wrap xl:grid lg:grid md:grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  xl:gap-5 lg:gap-5 gap-8 items-center place-content-center text-center xl:py-14 lg:py-14 py-7 xl:px-5 lg:px-5 md:px-5 px-3">
                                {service.map((value,keys) => (
                                    <div className={`mx-auto text-center bg-white text-black shadow rounded-xl xl:px-5 lg:px-5 md:px-5 px-10 animations-element border icon-services py-10 cursor-pointer`} data-animation="fade-in-fwd" key={keys}>
                                         <picture>
                                            <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                                            <img className="w-14 mx-auto" src={`${process.env.REACT_APP_URL_IMG}${value.image}`} alt="Exhibition & Expo" loading="lazy" />
                                        </picture> 

                                        <div className='space-y-3'> 
                                            <p className="font-bold xl:text-xl lg:text-lg md:text-lg text-lg mt-5 ">{value.name}</p>
                                            <p className="mt-5 line-clamp-3">{value.description}</p>
                                        
                                            <div className='mx-auto text-center w-full'>
                                            <Link to={`${value.link}`} aria-label={`link to show ${value.lin}`}><p className='w-max  border-blue-500 font-semibold text-blue-500 text-center mx-auto'>Learn More </p> </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-sky-50 container mx-auto py-14">
                        <div className="px-5 ">
                            <div className="text-center xl:space-y-5 lg:space-y-5 space-y-2 xl:px-5 lg:px-5">
                             <div className="xl:space-y-5 lg:space-y-5 space-y-2 xl:px-28 lg:px-28 px-5">

                                <div className='flex justify-center mb-10'>
                                    <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-[auto] text-center animations-element" data-animation="fade-in-fwd">
                                    Our Project
                                    </div>
                                </div>
                                
                                 <h2 className="text-slate-700 xl:text-5xl lg:text-3xl text-3xl font-bold xl:leading-[53px] lg:leading-[39px] leading-[39px]  tracking-normal portofolio-headline  animations-element capitalize xl:px-30 lg:px-30  px-0" data-animation="slide-top">
                                An Epic Journey Through Events Full of Surprises and Inspiration!
                                </h2>

                                <div className="">
                                    <p className="xl:px-32 lg:px-10 px-5 xl:mx-10 lg:mx-0 mx-0 mb-5 font-base py-5 animations-element portofolio-description text-md" data-animation="slide-top">
                                    Our portfolio is a testament to the passion, creativity and dedication we bring to every event. Every project reflects our tireless efforts to provide unforgettable experiences, blending innovation and artistry in every element, affirming our commitment to provide the best for every client.
                                    </p>
                                </div>
                             </div>

                                <div className={`xl:pt-10 lg:pt-10 pt-5 portofolio-wrapper flex xl:block lg:block justify-center animations-element `} data-animation="slide-right-portofolio">
                                    <div className="flex flex-wrap xl:grid lg:grid md:flex xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center align-items-center items-center xl:gap-5 lg:gap-5 gap-8 place-content-center flex-col">
                                    {project !== '[]' ? (
                                            project.map((value, key) => (
                                                <Portfolio key={key} data={true} data_image={`${process.env.REACT_APP_URL_IMG}${value.image}`} data_description={value.description} data_name={value.name}/>
                                            ))
                                        ) : 
                                        <SkeletonPortofolio/>}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="container mx-auto px-5 xl:py-20 lg:py-20 py-10 ">
                        <div className="text-center space-y-5 ">
                            <div className='flex justify-center mb-10'>
                                <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-auto animations-element" data-animation="fade-in-fwd">
                                Our Achievement
                                </div>
                            </div>
                       
                            <h2 className="text-slate-700 xl:text-5xl lg:text-3xl text-3xl font-bold xl:leading-[53px] lg:leading-[39px] leading-[39px]  tracking-normal portofolio-headline  animations-element capitalize xl:px-30 lg:px-30  px-0" data-animation="slide-top" >
                            Improve Your Event, <br/>
                            Transform Your Experience
                            </h2>
                            <div className="flex flex-col xl:grid lg:grid grid-cols-3 items-center place-content-center text-center xl:gap-0 lg:gap-0 gap-4 xl:pt-10 lg:pt-10 py-5">

                                {achievement.map((value,key) => (
                                    <div className={`${key > 2 ? 'xl:border-r-2 lg:border-r' : ''} border-black animations-element`} data-count="true" key={key}>
                                        <div className="py-5">   
                                            <picture>
                                                <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.image}`} type="image/webp"/>
                                                <img className="w-14 mx-auto animations-element icon-count" src={`${process.env.REACT_APP_URL_IMG}${value.image}`} alt={value.name} data-animation="slide-top"/>
                                            </picture> 
                                        </div>
                                        <div className={'animations-element xl:px-20 lg:px-14 px-14'} data-count="true" data-animation="slide-top-count">
                                            <CountUp end={ count === true ? value.number : 0 } className="number-achievement text-blue-600 " />
                                        </div>
                                        <h1 className="uppercase xl:text-xl lg:text-lg text-lg font-bold tracking-tight text-slate-700">{value.name}</h1>
                                    </div>
                                ))}

                                </div>
                        </div>
                    
                    </div>

                    <div className="rounded-t-3xl">
                        <div className="container mx-auto xl:py-20 lg:py-20 py-10 px-5">
                            <Testimoni data={testimonial}/>
                        </div>
                    </div>

                    <div className="rounded-3xl">

                        <div className="py-20 bg-sky-50" >
                            <div className="container mx-auto text-center px-5">
                                <div className='flex justify-center mb-10'>
                                    <div className="justify-center text-blue-600 text-sm font-bold leading-6 tracking-wide uppercase whitespace-nowrap items-stretch bg-sky-100 px-4 py-3 rounded-lg self-start max-w-auto animations-element"  data-animation="fade-in-fwd" >
                                    Our Client
                                    </div>
                                </div>

                                <div className=" space-y-5">
                                    <h2 className="text-slate-700 xl:text-5xl lg:text-3 xl text-3xl font-bold xl:leading-[53px] lg:leading-[53px] leading-[39px]  tracking-normal portofolio-headline animations-element capitalize" data-animation="slide-top">
                                    We are trusted <br/> by over 5000+ clients.
                                    </h2>
                                </div>
                          

                                    <Splide options={ {
                                        rewind: true,
                                        autoplay: 'playing',
                                        type    : 'loop',
                                        perPage: 3,
                                        breakpoints : {
                                            1024:{
                                                perPage: 3,
                                            },
                                            640:{
                                                perPage: 2,
                                            }
                                        },
                                        perMove: 1
                                    } } className="animations-element" data-animation="slide-top-client">
                                
                                    {partner.map((value, key) => (
                                        <SplideSlide key={key} className="justify-center flex">
                                        
                                        <picture>
                                            <source srcSet={`${process.env.REACT_APP_URL_IMG}${value.logo}`} type="image/webp"/>
                                            <img decoding="async" className="h-20" src={`${process.env.REACT_APP_URL_IMG}${value.logo}`} alt="logo BUMN" />
                                        </picture> 

                                        </SplideSlide>
                                    ))}
                                     </Splide>
                                
                            </div>
                        </div>
                    </div>
                    </div>
               )}

            </>
        )
}

export default HomePage;