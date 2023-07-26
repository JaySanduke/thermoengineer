import Image from "next/image"
import "./style.css"

export default function CompanyLogo() {
    return (
        <section id="companies-logo" className="relative flex flex-col items-center py-16 lg:py-12 lg:px-10 lg:flex-row lg:justify-center">
            <div className="w-full px-12 py-12">
                <div className="section-heading mb-24 text-center">
                    <h2 className="text-3xl uppercase text-gray-800">Companies</h2>
                </div>
                <div className="logo-container w-full py-8 whitespace-nowrap overflow-x-hidden">
                    <div className="logo-slider inline-block whitespace-nowrap">
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src={"/Companies_Logo/Amneal.png"} className="h-full w-auto" alt="Amneal" width={390} height={162} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Apollo__hospitals.png" className="h-full w-auto" alt="Apollo hospitals" width={2400} height={2616} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Bank_Note_Press_Dewas.png" className="h-full w-auto" alt="Bank Note Press Dewas" width={450} height={450} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Biochem_Pharma.png" className="h-full w-auto" alt="Biochem Pharma" width={5000} height={1900} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/BridgeStone.png" className="h-full w-auto" alt="BridgeStone" width={2400} height={1600} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Cooper_Pharma_Ltd.png" className="h-full w-auto" alt="Cooper Pharma Ltd" width={2000} height={841} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/ICAI.png" className="h-full w-auto" alt="ICAI" width={912} height={916} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/MSN.png" className="h-full w-auto" alt="MSN Laboratories Ltd" width={1540} height={670} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Zydus_Cadila.png" className="h-full w-auto" alt="Zydus Cadila" width={600} height={90} />
                        </div>
                    </div>
                    <div className="logo-slider inline-block whitespace-nowrap">
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src={"/Companies_Logo/Amneal.png"} className="h-full w-auto" alt="Amneal" width={390} height={162} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Apollo__hospitals.png" className="h-full w-auto" alt="Apollo hospitals" width={2400} height={2616} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Bank_Note_Press_Dewas.png" className="h-full w-auto" alt="Bank Note Press Dewas" width={450} height={450} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Biochem_Pharma.png" className="h-full w-auto" alt="Biochem Pharma" width={5000} height={1900} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/BridgeStone.png" className="h-full w-auto" alt="BridgeStone" width={2400} height={1600} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Cooper_Pharma_Ltd.png" className="h-full w-auto" alt="Cooper Pharma Ltd" width={2000} height={841} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/ICAI.png" className="h-full w-auto" alt="ICAI" width={912} height={916} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/MSN.png" className="h-full w-auto" alt="MSN Laboratories Ltd" width={1540} height={670} />
                        </div>
                        <div className="logo-wrapper inline-flex justify-center items-center mx-36 h-[120px] w-[280px]">
                            <Image src="/Companies_Logo/Zydus_Cadila.png" className="h-full w-auto" alt="Zydus Cadila" width={600} height={90} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
