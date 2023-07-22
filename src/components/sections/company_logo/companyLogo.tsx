import Image from "next/image"
import "./style.css"

export default function CompanyLogo() {
    return (
        <section id="companies-logo" className="relative flex flex-col items-center py-16 lg:py-12 lg:px-10 lg:flex-row lg:justify-center">
            <div className="w-full px-12 py-16">
                <div className="setion-heading text-center">
                    <h2 className="text-3xl font-bold uppercase mb-10 text-gray-800">Companies</h2>
                </div>
                <div className="logo-container overflow-x-hidden py-10">
                    <div className="logo-slider whitespace-nowrap">
                        <div className="logo-wrapper">
                            <Image src="/companies_Logo/Amneal.png" className="h-[120px] w-auto" alt="Amneal" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/Apollo__hospitals.png" className="h-[120px] w-auto" alt="Apollo hospitals" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/Bank_Note_Press_Dewas.png" className="h-[120px] w-auto" alt="Bank Note Press Dewas" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/Biochem_Pharma.png" className="h-[120px] w-auto" alt="Biochem Pharma" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/BridgeStone.png" className="h-[120px] w-auto" alt="BridgeStone" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/Cooper_Pharma_Ltd.png" className="h-[120px] w-auto" alt="Cooper Pharma Ltd" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/ICAI.png" className="h-[120px] w-auto" alt="ICAI" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/MSN.png" className="h-[120px] w-auto" alt="MSN Laboratories Ltd" width={200} height={120} />
                        </div>
                        <div className="logo-wrapper">
                            <Image src="/Companies_Logo/Zydus_Cadila.png" className="h-[120px] w-auto" alt="Zydus Cadila" width={200} height={120} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
