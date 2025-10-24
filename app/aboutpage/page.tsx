import Link from "next/link";
import AnimatedSection from '../AnimatedSection';


export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <p>PortFolio</p>
            <div className="flex justify-center items-center w-full h-screen">
                <AnimatedSection>
                    <Link href="/aboutpage/KwakDoYoung" className="px-6 py-3 rounded-lg border-2 border-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white font-medium">
                        Kwak Do Young
                    </Link>
                </AnimatedSection>  
                <AnimatedSection delay={100}>
                    <Link href="/aboutpage/ParkJuHyun" className="px-6 py-3 rounded-lg border-2 border-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white font-medium">
                        Park Ju Hyun
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
}