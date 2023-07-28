export default function Services() {
    return (
        <section id="services" className="relative bg-slate-200 flex w-full justify-center py-16">
            <div className="container lg:max-w-7xl justify-center items-center">
                <div className="section-heading flex justify-center mb-1">
                    <h2 className="text-lg uppercase text-gray-800">Services</h2>
                </div>
                <div className="section-sub-heading text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">What we can offer you</h2>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-4 text-center">
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">HVAC Turnkey Solutions</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Electrical</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Mechanical</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">MEP</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Cold Storage</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Architecture & Interior</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Civil Structural</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Utility Piping</div>
                    </div>
                    <div className="service-card bg-white rounded-lg shadow-lg capitalize border-t-2 border-gray-500 py-8">
                        <div className="card-heading">Fire Security Surveilliance</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
