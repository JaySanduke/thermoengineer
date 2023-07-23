import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative bg-[#ebf8ff] flex flex-col items-center py-26 lg:py-32 lg:flex-row lg:justify-center">
      <div className="container bg-white px-16 py-20">
        <div className="setion-heading">
          <h2 className="text-2xl font-semibold uppercase mb-10 text-gray-800">About Us</h2>
        </div>
        <div className="relative flex">
          <div className="w-1/2">
            <p className='mb-3'>&emsp; We started our registered HVAC Projects Designing & Execution firm in Indore (M.P.) India, since 2012.</p>
            <p className='mb-3'>&emsp; We are a team of highly qualified and experienced professionals in the field of HVAC Projects Designing & Execution.</p>
            <p>&emsp; We present ourselves as one of HVAC Designer & Executor in the India based at Indore, the Commercial Capital of Madhya Pradesh state, we have successfully HVAC designed and executed many projects in all over India during this period.</p>
          </div>
          <div className="relative flex align-middle justify-center w-1/2 p-6">
            <Image src="/Logos/Logo.png" className='h-max' alt="about" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
