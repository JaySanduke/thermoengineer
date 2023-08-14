import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative bg-[#ebf8ff] flex flex-col items-center py-0 sm:py-12 lg:py-32 lg:flex-row lg:justify-center">
      <div className="container lg:max-w-7xl bg-white px-8 sm:px-12 py-12 sm:py-20">
        <div className="section-heading">
          <h2 className="relative text-2xl sm:text-3xl uppercase mb-10 text-gray-800 before:block before:absolute before:-bottom-1 before:bg-sky-500 before:w-16 before:h-1">About Us</h2>
        </div>
        <div className="relative flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 text-sm sm:text-base">
            <p className='mb-3'>&emsp; We started our registered HVAC Projects Designing & Execution firm in Indore (M.P.) India, since 2012.</p>
            <p className='mb-3'>&emsp; We are a team of highly qualified and experienced professionals in the field of HVAC Projects Designing & Execution.</p>
            <p className='mb-8'>&emsp; We present ourselves as one of HVAC Designer & Executor in the India based at Indore, the Commercial Capital of Madhya Pradesh state, we have successfully HVAC designed and executed many projects in all over India during this period.</p>
            <a
              href="/"
              aria-label="learn more"
              className="flex w-fit text-center font-medium rounded-md shadow-md px-4 py-3 border-[1px] border-sky-500 text-sky-500 transition-colors duration-200 hover:bg-sky-500 hover:text-sky-700"
            >
              Learn More
            </a>
          </div>
          <div className="relative flex align-middle justify-center md:items-center lg:items-start mx-auto mb-6 max-w-xs sm:max-w-sm md:max-w-full md:w-1/2 md:mb-0 p-6 px-6 lg:px-12">
            <Image src="/Logos/Logo.png" className='h-max' alt="about" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
