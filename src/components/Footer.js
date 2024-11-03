import React from 'react'
import logo from '../media/logo.png'
import pio from '../media/footerImages/Group 8.png'
import vector7 from '../media/footerImages/Path 92.png'
import vector8 from '../media/footerImages/Path 93.png'
import vector9 from '../media/footerImages/Path 94.png'

export default function Footer() {
  return (
    <>
    <footer>
        <div className='bg-primary '>
            <div className='container xl:mx-auto py-5  px-10'>
                <div className=' md:py-5 '>
                    <p className='text-[24px] text-white font-bold '>Popular Destinations</p>
                </div>
                <div className='grid grid-cols-1 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5  py-5 '>
                    <div>
                        <div className='mt-5 md:mt-0'>
                            <p className='text-[20px] font-bold pb-3'>Punjab</p>
                            <p className='text-[16px] font-medium'>Lahore</p>
                            <p className='text-[16px] font-medium'>Faisalabad</p>
                            <p className='text-[16px] font-medium'>Nankana Sahib</p>
                            <p className='text-[16px] font-medium'>Sialkot</p>
                            <p className='text-[16px] font-medium'>Bahawalpur</p>
                            <p className='text-[16px] font-medium'>Multan</p>
                            <p className='text-[16px] font-medium'>Rahim Yar Khan</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 md:mt-0'>
                            <p className='text-[20px] font-bold pb-3'>KPK</p>
                            <p className='text-[16px] font-medium'>Swat</p>
                            <p className='text-[16px] font-medium'>Peshawar</p>
                            <p className='text-[16px] font-medium'>Kalam</p>
                            <p className='text-[16px] font-medium'>Naran</p>
                            <p className='text-[16px] font-medium'>Khagan</p>
                            <p className='text-[16px] font-medium'>Mardan</p>
                            <p className='text-[16px] font-medium'>Abbottabad</p>
                        </div>
                    </div>                  
                    <div>
                        <div className='mt-5 md:mt-0'>
                            <p className='text-[20px] font-bold pb-3'>Gilgit</p>
                            <p className='text-[16px] font-medium'>Hunza</p>
                            <p className='text-[16px] font-medium'>Skardu</p>
                            <p className='text-[16px] font-medium'>Khaplu</p>
                            <p className='text-[16px] font-medium'>Tolti</p>
                            <p className='text-[16px] font-medium'>Shigar</p>
                            <p className='text-[16px] font-medium'>Karimabad</p>
                            <p className='text-[16px] font-medium'>Chilas</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 md:mt-0'>
                            <p className='text-[20px] font-bold pb-3'>Sindh</p>
                            <p className='text-[16px] font-medium'>Dadu</p>
                            <p className='text-[16px] font-medium'>Khairpur Mirs</p>
                            <p className='text-[16px] font-medium'>Jamshoro</p>
                            <p className='text-[16px] font-medium'>Kot Diji</p>
                            <p className='text-[16px] font-medium'>Mohenjo-daro</p>
                            <p className='text-[16px] font-medium'>Nawabshah</p>
                            <p className='text-[16px] font-medium'>Umerkot</p>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <div>
                            <p className='text-[20px] font-bold pb-3'>Kashmir</p>
                            <p className='text-[16px] font-medium'>Arang Kel</p>
                            <p className='text-[16px] font-medium'>Muzaffarbad</p>
                            <p className='text-[16px] font-medium'>Kotli</p>
                            <p className='text-[16px] font-medium'>Bagh</p>
                            <p className='text-[16px] font-medium'>Neelum Valley</p>
                            <p className='text-[16px] font-medium'>Haveli</p>
                            <p className='text-[16px] font-medium'>Rawalakot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-secondary'>
            <div className='container xl:mx-auto  px-10'>
                <div className='py-10 md:pb-24 pb-12'>
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-4 md:grid md:grid-cols-5 '>
                        <div className=' '>
                            <img src={logo} alt="logo" width={140}/>
                            <p className='text-[12px] text-white pt-3'> Dil Chahata Hai, Sair Karen <br />Pakistan ki Shan-o-Shaukat ke Sang!</p>
                        </div>
                        <div className='text-white md:leading-7 mt-5 sm:mt-0'>
                            <p className='text-[16px] hover:text-primary cursor-pointer w-fit font-bold pb-2'>Company</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>About US</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>FAQs</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Contact us</p>
                        </div>
                        <div className='text-white md:leading-7 mt-5 sm:mt-0'>
                            <p className='text-[16px] hover:text-primary cursor-pointer w-fit font-bold pb-2'>Legal</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Refunds Policy</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>terms & Conditions</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Privacy Policy</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Rules for Tourism</p>
                        </div>
                        <div className='text-white md:leading-7 mt-5 sm:mt-0'>
                            <p className='text-[16px] hover:text-primary cursor-pointer w-fit font-bold pb-2' >Popular Categories</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Faisal Masjid</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Katas Raj Temple</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Nankana Sahib</p>
                            <p className='text-[14px] hover:text-primary cursor-pointer w-fit font-medium'>Wahga Border</p>
                        </div>
                        <div className='text-white md:ml-5 lg:m-0 mt-5 md:mt-0'>
                            <p className='text-[16px] hover:text-primary cursor-pointer w-fit font-bold pb-3'>Social Media</p>
                            <div className='flex gap-5  '>
                                <img src={vector7}/>
                                <img src={pio}/>
                                <img src={vector8}/>
                                <img src={vector9}/>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
        <div className='bg-[#252525] border-t'>
            <div className='container xl:mx-auto  px-10'>
                <div className='text-white sm:flex sm:justify-between py-5 '>
                    <p> Copyright @ 2023 - Musafir</p>
                    <p>All rights are reserved</p>
                </div>
                
            </div>
        </div>
    </footer>
    </>
  )
}
