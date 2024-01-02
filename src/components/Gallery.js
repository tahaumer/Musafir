import React from 'react'
import vector1 from '../media/gallery/ali-kazim-KOwjW3N0Cto-unsplash.jpg'
import vector2 from '../media/gallery/pexels-waqar-afzal-15696453.jpg'
import vector3 from '../media/gallery/noman-bukhari-q8ZiBGZID1g-unsplash.jpg'
import vector4 from '../media/gallery/pexels-saad-khan-10102609.jpg'
import vector5 from '../media/gallery/shuttergames-HhShy9W1tAs-unsplash.jpg'
import vector6 from '../media/gallery/ossama-safi-3IVzEolMM_I-unsplash.jpg'
import vector7 from '../media/gallery/ali-kazim-KOwjW3N0Cto-unsplash.jpg'
import vector8 from '../media/gallery/pexels-aa-dil-5303063.jpg'
import vector9 from '../media/gallery/dr-muhammad-amer-TXJEdxs5Hh4-unsplash.jpg'
import vector11 from '../media/gallery/dr-muhammad-amer-TXJEdxs5Hh4-unsplash.jpg'

export default function Gallery() {
  return (
    <>
    <div className='bg-[#252525] py-20 '>
    <div className='container px-6 mx-auto'>
    <div className=' pb-10 items-center justify-center'>
        <p className='text-[40px] font-bold text-white text-center'>Popular Destinations</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div class="grid gap-4">
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector1} alt=""/>
            </div>
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector3} alt=""/>
            </div>
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector7} alt=""/>
            </div>
        </div>
        <div class="grid gap-4">
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector4} alt=""/>
            </div>
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector2} alt=""/>
            </div>
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector8} alt=""/>
            </div>
        </div>
        <div class="grid gap-4">
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector11} alt=""/>
            </div>  
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector6} alt=""/>
            </div>
        </div>
        <div class="grid gap-4">
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector9} alt=""/>
            </div>       
            <div className='rounded-2xl overflow-hidden'>
                <img class="h-full w-full object-cover" src={vector5} alt=""/>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
