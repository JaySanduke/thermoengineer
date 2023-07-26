export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#ebf8ff] flex flex-col items-center py-26 lg:py-32 lg:flex-row lg:justify-center">
      <div className="container flex lg:max-w-7xl rounded-lg bg-slate-200 px-16 py-20">
        <div className="w-1/2">
          <div className="section-heading mb-6">
            <h2 className="text-lg uppercase text-gray-800">Contact Us</h2>
          </div>
          <div className="section-sub-heading mb-10">
            <h2 className="text-4xl font-bold leading-[2.75rem] text-gray-800">Feel free to<br />Connect with us</h2>
          </div>
          <div className="section-description">
            <div className="flex">
              <div className="font-bold mr-2 mb-1">Call Us: </div>
              <div className="text-gray-600">+ 91 99074 99740</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-2 mb-1">Address: </div>
              <div className="text-gray-600">4D, Fifth Floor, BCM City, Navlakha Square, A.B. Road, <br /> Indore, (M.P.) India 452001</div>
            </div>
            <div className="flex">
              <div className="font-bold mr-2">Email: </div>
              <div className="text-gray-600">thermoengindore@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-4">
          <form className="w-full">
            <div className="flex w-full mb-6 justify-between">
              <input className="p-3 w-[47%] mr-6 border-[1px] border-gray-100 shadow-md rounded-md" type="text" title="firstname" placeholder="First Name" />
              <input className="p-3 w-[47%] border-[1px] border-gray-100 shadow-md rounded-md" type="text" title="lastname" placeholder="Last Name" />
            </div>
            <div className="mb-6">
              <input className="p-3 w-full border-[1px] border-gray-100 shadow-md rounded-md" type="email" title="email" placeholder="Email" />
            </div>
            <div className="flex w-full mb-6 justify-between">
              <input className="p-3 w-[47%] border-[1px] border-gray-100 shadow-md rounded-md" type="text" title="subject" placeholder="Subject" />
              <input className="p-3 w-[47%] border-[1px] border-gray-100 shadow-md rounded-md" type="text" title="phone" placeholder="Contact Number" />
            </div>
            <div className="mb-6">
              <textarea className="p-3 w-full border-[1px] border-gray-100 shadow-md rounded-md" title="message" placeholder="Message" />
            </div>
            <div>
              <button className="bg-slate-800 text-white uppercase font-bold py-3 px-6 rounded-lg shadow-md">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
