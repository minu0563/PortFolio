import AnimatedSection from '../../AnimatedSection';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <div className="justify-center items-center text-center mt-1 mb-0">
        <h1 className="text-transparent bg-clip-text text-4xl font-bold mb-0 bg-gradient-to-br from-yellow-600 via-pink-500 to-blue-600">Portfolio</h1>
            </div>
            <hr />
            <div className="justify-center items-center text-center">
                <AnimatedSection delay={100} className='min-h-screen'>
                    <h3 className="mt-5"> elcome to my portfolio page!</h3>
                    <Image src="/imsiimg.png" alt="" width={600} height={400} className="rounded-full mx-auto mt-5" />
                </AnimatedSection>
                <AnimatedSection delay={100} className='min-h-screen'>
                    <h2 className="mt-5"> This website want to create together with a friend.</h2>
                    <Image src="/imsiimg.png" alt="" width={600} height={400} className="rounded-full mx-auto mt-5" />
                </AnimatedSection>
                <AnimatedSection delay={100} className='min-h-screen'>
                    <h2 className="mt-5"> I`ve worked on developing several <strong>extensions</strong> and <strong>websites</strong>, which you can explore here. </h2>
                    <Image src="/imsiimg.png" alt="" width={600} height={400} className="rounded-full mx-auto mt-5" />
                </AnimatedSection>
            </div>
        </div>
    );
}