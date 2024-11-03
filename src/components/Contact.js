import React from 'react'

const Contact = () => {
  return (
   <div className='contactbg mt-10'>
   <form className='mx-auto max-w-[700px] px-10 pb-10 '>
        <h1 className='text-white text-center mx-auto text-[40px] w-[400px] mb-10'>Contact Us</h1>
		<div className="relative z-0 mb-6 w-full group">
			<input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-300 appearance-none border-gray-600focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
			<label htmlFor="floating_email" className="absolute text-sm  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
		</div>
		<div className="relative z-0 mb-6 w-full group">
			<input type="text" name="Address" id="Address" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-300 appearance-none text-whiteborder-gray-600focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
			<label htmlFor="Address" className="absolute text-sm  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Address</label>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
				<label htmlFor="floating_first_name" className="absolute text-sm  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
				<label htmlFor="floating_last_name" className="absolute text-sm  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
			</div>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
				<label htmlFor="floating_phone" className="absolute text-sm  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
				<label htmlFor="floating_company" className="absolute text-sm  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
			</div>
		</div>
		<button type="submit" className="bg-secondary text-primary hover:bg-[#394537] hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transitionCs">Submit</button>
	</form>
   </div>
  )
}

export default Contact