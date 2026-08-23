import React from 'react'
import LargeImg from '../assets/grid-img.jpeg'
const About = () => {
  return (
    <section className='px-6 md:px-10 lg:px-16 py-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                What is USD Bloom?
            </h2>

            <button className="bg-purple-950 rounded-2xl text-white px-5 py-1 mt-5">
                Explore now
            </button>
            </div>

            <div className="md:flex md:justify-end">
            <p className="max-w-sm text-2xl leading-tight text-gray-700">
                USD Bloom is a yield-bearing stablecoin that helps your
                capital grow while staying pegged to the U.S. dollar.
            </p>
            </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>

            {/* Card 1 */}
            <div className="md:col-span-2  min-h-82 rounded-3xl p-7 flex flex-col justify-between bg-cover bg-position-[100%_center]" style={{backgroundImage: `url(${LargeImg})`}}>
                <h3 className='text-2xl font-medium'>Capital that grows</h3>

                <p className="max-w-xs text-gray-700">
            Earn passive income as your stablecoins are deployed into
            high-performing DeFi protocols.
          </p>
            </div>

            {/* Card2 */}
            <div className="min-h-82 bg-[#292640] rounded-3xl text-white flex flex-col justify-between ">
                <h3 className='text-2xl font-medium max-w-68 p-4'>Always liquid, always stable</h3>
                <p className='text-gray-300 max-w-xs text-sm p-5'>Stay fully dollar-pegged with instant access to your funds — no lockups or delays.</p>
            </div>

            {/* Card3 */}
            <div className="min-h-82 bg-[#292640] rounded-3xl text-white flex flex-col justify-between">
                    <h3 className='text-2xl font-medium max-w-40 p-4'>
                        100% hands-free
                    </h3>
                    <p className='text-gray-300 max-w-xs text-sm p-5'>No need to manage strategies manually. USD Bloom works
            in the background for you.</p>
            </div>
        </div>


      
    </section>
  )
}

export default About
