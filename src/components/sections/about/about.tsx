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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate a enim sed delectus doloremque neque blanditiis facilis hic repellendus dolor voluptas illum necessitatibus consequatur similique, odit explicabo reprehenderit autem exercitationem?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate a enim sed delectus doloremque neque blanditiis facilis hic repellendus dolor voluptas illum necessitatibus consequatur similique, odit explicabo reprehenderit autem exercitationem?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate a enim sed delectus doloremque neque blanditiis facilis hic repellendus dolor voluptas illum necessitatibus consequatur similique, odit explicabo reprehenderit autem exercitationem?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate a enim sed delectus doloremque neque blanditiis facilis hic repellendus dolor voluptas illum necessitatibus consequatur similique, odit explicabo reprehenderit autem exercitationem?
          </div>
          <div className="relative flex align-middle justify-center w-1/2 p-6">
            <Image src="/Logos/Logo.png" className='h-max' alt="about" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
