import React, { useState } from 'react'
import img1 from '../media/secondSec/tour.jpg'
import img2 from '../media/secondSec/transport.jpg'
import img3 from '../media/secondSec/hotel.jpg'

const MultiPart = () => {
    const [active, setActive] = useState('tours');

    return (
        <div>
            <div className="bg-secondary container px-6" id="explore">

                <div className="w-full flex justify-center pt-9 ">
                    <ul className="flex space-x-32 text-white text-[20px]">
                        <li className={`cursor-pointer ${active === 'tours' ? 'text-primary' : ''}`} onClick={() => setActive("tours")}>Tours</li>
                        <li className={`cursor-pointer ${active === 'transport' ? 'text-primary' : ''}`} onClick={() => setActive("transport")}>Transport</li>
                        <li className={`cursor-pointer ${active === 'hotel' ? 'text-primary' : ''}`} onClick={() => setActive("hotel")}>Hotel</li>
                    </ul>
                </div>


                <span className="block w-[550px] mx-auto h-1 bg-white my-3 rounded-md relative">
                    <span
                        className="rounded-md block z-1 w-[150px] bg-primary h-1 absolute transition-all duration-300"
                        style={{
                            left: active === 'tours' ? '0px' :
                                active === 'transport' ? '200px' :
                                    '400px'
                        }}
                    ></span>
                </span>

                {active === 'tours' && (
                    <div className="flex max-w-[1080px] mx-auto py-14">
                        <div className="w-[1300px] h-[400px]">
                            <img src={img1} alt="" className='w-full h-full object-cover  rounded-2xl' />
                        </div>
                        <div className="flex flex-col ml-14">
                            <h1 className='text-white text-[40px] leading-tight font-bold'>Discover Pakistan's Hidden Gems</h1>
                            <h2 className="text-white text-[22px] leading-tight mt-4">Embark on Unforgettable Journeys Across Majestic Landscapes</h2>
                            <p className="text-white text-[13px] leading-tight mt-4 mb-12">Explore the beauty and diversity of Pakistan through our well-planned tours. From the majestic mountains of the north to the serene beaches of the south, experience the culture, history, and breathtaking views that make Pakistan a traveler’s paradise.</p>
                            <div>
                                <button className="text-black py-2 px-6 bg-primary hover:bg-[#5b9c57] rounded-lg font-bold transitionCs">More information</button>
                            </div>
                        </div>
                    </div>
                )}

                {active === 'transport' && (
                    <div className="flex max-w-[1080px] mx-auto py-14">
                        <div className="flex flex-col mr-14">
                            <h1 className='text-white text-[40px] leading-tight font-bold'>Seamless Travel, Every Step of the Way</h1>
                            <h2 className="text-white text-[22px] leading-tight mt-4">Reliable and Comfortable Transport for Your Adventures</h2>
                            <p className="text-white text-[13px] leading-tight mt-4 mb-12">Travel with ease and comfort with our top-tier transportation services. Whether you prefer private vehicles, group buses, or luxury coaches, we have solutions that cater to your needs, ensuring your journey is as enjoyable as your destination.</p>
                            <div>
                                <button className="text-black py-2 px-6 bg-primary hover:bg-[#5b9c57] rounded-lg font-bold transitionCs">More information</button>
                            </div>
                        </div>
                        <div className="w-[1300px] h-[400px]">
                            <img src={img2} alt="" className='w-full h-full object-cover object-bottom rounded-2xl' />
                        </div>
                    </div>
                )}

                {active === 'hotel' && (
                    <div className="flex max-w-[1080px] mx-auto py-14">
                      <div className="w-[1300px] h-[400px]">
                            <img src={img3} alt="" className='w-full h-full object-cover  rounded-2xl' />
                        </div>
                        <div className="flex flex-col ml-14">
                            <h1 className='text-white text-[40px] leading-tight font-bold'>Your Home Away from Home</h1>
                            <h2 className="text-white text-[22px] leading-tight mt-4">Stay at the Best Hotels for Maximum Comfort</h2>
                            <p className="text-white text-[13px] leading-tight mt-4 mb-12">Rest and recharge in our hand-picked hotels and accommodations. We partner with top-rated hotels to offer you quality service, luxurious rooms, and a peaceful environment so you can relax after a day of exploration.</p>
                            <div>
                                <button className="text-black py-2 px-6 bg-primary hover:bg-[#5b9c57] rounded-lg font-bold transitionCs">More information</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MultiPart