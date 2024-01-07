import React,{useRef} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import backgroundimage from "../media/HUNZA-BLOG-PIC-1-1024x768.svg";
import mainlogo from "../media/dark_back_logo_1.svg";
import kalam from "../media/Mask-Group-4.svg"
import multan from "../media/Mask-Group-2.svg"
import hunza from "../media/Mask Group 3.svg"
import googlePlay from "../media/Google_Play-Badge-Logo.wine.svg"
import appleStore from "../media/download-on-the-app-store-apple-logo-svgrepo-com.svg"
import downArrow from "../media/Path 4.svg"
import Arrow from "../media/Icon ionic-ios-arrow-forward.png"
import secondSection from "../media/Rectangle 25.png"

 
export default function Home() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <>
      <div className="container bgimage overflow-hidden">
        <nav className=" mx-12 flex justify-between z-10">
          <div className="pt-9">
            {/* <img className="w-[130px]" src={mainlogo} /> */}
            <h3>LOGO HERE</h3>
          </div>

        
          <div className="mt-12 custom-xl:flex hidden justify-between items-center z-50">
            <ul className="flex ml-14">
              <li className="font-bold text-black bg-white py-1 px-8 rounded-[20px]">
                Home
              </li>
              <li className="font-normal text-white py-1 px-7 rounded-[20px]">
                Destination
              </li>
              <li className="font-normal text-white py-1 px-7 rounded-[20px]">
                Tour & Packages
              </li>
              <li className="font-normal text-white py-1 px-7 rounded-[20px]">
                Company
              </li>
              <li className="font-normal text-white py-1 px-7 rounded-[20px]">
                Blog
              </li>
            
            </ul>
            <ul className="ml-10">
            <li className="font-bold text-white bg-primary py-1 px-8  rounded-[20px]">
                Contest
              </li>
            </ul>
           
          </div>

          

          <div className="pt-[52px] custom-xl:block hidden z-50">
        
            <div className="bg-white flex justify-center items-center rounded-[20px] px-5 py-1">
              <input
                className="focus:outline-none placeholder:text-[#5C5C5C] placeholder:text-[15px]  items-center"
                type="text"
                placeholder="Search location here"/>
              <span className="flex ml-5 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.004" viewBox="0 0 16 16.004">
                    <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.312,19.339l-4.45-4.492a6.342,6.342,0,1,0-.962.975l4.421,4.462a.685.685,0,0,0,.967.025A.689.689,0,0,0,20.312,19.339Zm-9.433-3.462a5.007,5.007,0,1,1,3.542-1.467A4.977,4.977,0,0,1,10.879,15.876Z" transform="translate(-4.5 -4.493)" fill="rgba(37,37,37,0.75)"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="cursor-pointer pt-12 custom-xl:hidden block">
            <div className="w-6 h-1 mb-1 bg-white " />
            <div className="w-6 h-1 mb-1 bg-white " />
            <div className="w-6 h-1 bg-white" />
          </div>
        
        </nav>


        <SwiperSlide>        
          <div className='pt-10 container'>
            <div className='py-6  flex items-center'>
                <div className='w-full'>
                    <div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={false}
                            navigation={{
                              prevEl: '.slidePrev-btn',
                              nextEl: '.slideNext-btn'
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 0,
                                    },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                            speed={500}
                            modules={[FreeMode,Navigation]}
                            className="innerswiper">

                            <SwiperSlide >
                                <div className='flex flex-col min-w-[500px] ml-12'>
                                   <h1 className='text-white  text-[54px] leading-tight font-bold'> Musafir - <br/>Yaadgar Safar<br/>  ka Raasta!</h1> 
                                   <h2 className="text-white  text-[22px] leading-tight mt-4"> Dil Chahata Hai, Sair Karen <br/>Pakistan ki Shan-o-Shaukat ke Sang!</h2>
                                    <div className="flex space-x-3 mt-7">
                                       <button className="text-black py-2 px-6 bg-primary hover:bg-[#5B9C57] transitionCs rounded-lg font-bold">Book a tour</button>
                                      <button className="text-white py-2 px-6 bg-[#495557] hover:bg-[#3d4647] transitionCs rounded-lg font-bold">Contact us</button>
                                    </div>
                                    <h1 className="text-white text-[36px] font-bold mt-9">Download Our App</h1>
                                    <div className="flex space-x-6 ">        
                                        <img className="w-24" src={googlePlay} alt=""/>
                                        <img className="w-24" src={appleStore} alt=""/>    
                                    </div>
                                </div>  
                            </SwiperSlide>


                            <SwiperSlide className='lg:!block !hidden'></SwiperSlide>


                            <SwiperSlide>
                              <div className="bg-gray-400 box-content bg-opacity-30 backdrop-blur-sm border-transparent rounded-2xl ">
                                <div className="h-[430px] border-transparent rounded-2xl relative">
                                  <div className='border-transparent rounded-2xl overflow-hidden h-[350px]'>
                                    <img src={kalam} className={`slideimage object-cover object-center w-full h-full mb-1 DragActive1`} alt="" />
                                  </div>
                                 <h1 className="text-white font-bold text-[18px] opacity-100 ml-5 pt-2">Kalam</h1>
                                 <p className="text-[13px] text-white truncate ml-5">Renowned for its lush meadows, waterfalls</p>
                               </div>  
                              </div>
                            </SwiperSlide>

                            
                            <SwiperSlide>
                              <div className="bg-gray-400 box-content bg-opacity-30 backdrop-blur-sm  border-transparent rounded-2xl ">
                                <div className="h-[430px] border-transparent rounded-2xl relative">
                                  <div className='border-transparent rounded-2xl overflow-hidden h-[350px]'>
                                    <img src={multan} className={`slideimage object-cover object-center w-full h-full mb-1 DragActive1`} alt="" />
                                  </div>
                                 <h1 className="text-white font-bold text-[18px] opacity-100 ml-5 pt-2">Multan</h1>
                                 <p className="text-[13px] text-white truncate ml-5">Renowned for its lush meadows, waterfalls</p>
                               </div>  
                              </div>
                            </SwiperSlide>    


                            <SwiperSlide>
                              <div className="bg-gray-400  box-content bg-opacity-30 backdrop-blur-sm  border-transparent rounded-2xl ">
                                <div className="h-[430px] border-transparent rounded-2xl relative">
                                  <div className='border-transparent rounded-2xl overflow-hidden h-[350px]'>
                                    <img src={hunza} className={`slideimage object-cover object-center w-full h-full mb-1 DragActive1`} alt="" />
                                  </div>
                                 <h1 className="text-white font-bold text-[18px] opacity-100 ml-5 pt-2">Hunza</h1>
                                 <p className="text-[13px] text-white truncate ml-5">Renowned for its lush meadows, waterfalls</p>
                               </div>  
                              </div>
                            </SwiperSlide> 


                             <SwiperSlide>
                              <div className="bg-gray-400  box-content bg-opacity-30 backdrop-blur-sm  border-transparent rounded-2xl ">
                                <div className="h-[430px] border-transparent rounded-2xl relative">
                                  <div className='border-transparent rounded-2xl overflow-hidden h-[350px]'>
                                    <img src={kalam} className={`slideimage object-cover object-center w-full h-full mb-1 DragActive1`} alt="" />
                                  </div>
                                 <h1 className="text-white font-bold text-[18px] opacity-100 ml-5 pt-2">Kalam</h1>
                                 <p className="text-[13px] text-white truncate ml-5">Renowned for its lush meadows, waterfalls</p>
                               </div>  
                              </div>
                            </SwiperSlide>  


                            <SwiperSlide>
                              <div className="bg-gray-400  box-content bg-opacity-30 backdrop-blur-sm  border-transparent rounded-2xl ">
                                <div className="h-[430px] border-transparent rounded-2xl relative">
                                  <div className='border-transparent rounded-2xl overflow-hidden h-[350px]'>
                                    <img src={multan} className={`slideimage object-cover object-center w-full h-full mb-1 DragActive1`} alt="" />
                                  </div>
                                 <h1 className="text-white font-bold text-[18px] opacity-100 ml-5 pt-2">Multan</h1>
                                 <p className="text-[13px] text-white truncate ml-5">Renowned for its lush meadows, waterfalls</p>
                               </div>  
                              </div>
                            </SwiperSlide> 

                        </Swiper>
                    </div>
                    <div className="w-full relative z-50 flex justify-center items-center flex-col">
                      <div className="w-full flex justify-end space-x-7 mr-12">
                        <button onClick={handlePrev} className="slidePrev-btn bg-gray-600 hover:bg-gray-700 transitionCs cursor-pointer py-[10px] px-3 border border-white rounded-xl rotate-180">
                          <img className="w-[8px]" src={Arrow} alt="" />
                        </button>
                        <button onClick={handleNext} className="slideNext-btn bg-gray-600 hover:bg-gray-700 transitionCs cursor-pointer py-[10px] px-3 border border-white rounded-xl">
                          <img className="w-[8px]" src={Arrow} alt="" />
                        </button>
                      </div>
                      <a href="#explore" className="text-white py-[2px]">Explore</a>
                      <img className="w-[40px]" src={downArrow} />
                    </div>
                    </div>              
            </div>
        </div>
    
        </SwiperSlide>  
    
      </div>






      <div className="bg-secondary container px-6" id="explore">

        <div className="w-full flex justify-center pt-9 ">
          <ul className="flex space-x-32 text-white text-[20px]">
            <li>Tours</li>
            <li>Transport</li>
            <li>Hotel</li>
          </ul>
        </div>


        <span className="block w-[550px] mx-auto h-1 bg-white my-3 rounded-md"> <span className="rounded-md block z-1 w-[150px] bg-primary h-1"></span></span>                   
       
        <div className="flex max-w-[1080px] mx-auto py-14">
          <div className="w-[1300px]">
            <img src={secondSection} alt=""/> 
          </div>
          <div className="flex flex-col ml-14">
            <h1 className='text-white text-[40px] leading-tight font-bold'> Musafir - <br/>Pakistan ki Sair, <br/> Har Dil Aziz!</h1> 
            <h2 className="text-white text-[22px] leading-tight mt-4"> Dil Chahata Hai, Sair Karen <br/>Pakistan ki Shan-o-Shaukat ke Sang!</h2>
            <p className="text-white text-[13px] leading-tight mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
            <p className="text-white text-[13px] leading-tight mt-4 mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>                
          <div>
            <button className="text-black py-2 px-6 bg-primary hover:bg-[#5b9c57] rounded-lg font-bold transitionCs">More information</button>
          </div>
          </div>
        </div>
    
    
      </div>
   
    </>
  );
}
