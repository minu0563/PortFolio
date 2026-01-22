import ColorChange from '../ColorChange';
import AnimatedSection from "../AnimatedSection";
import '../globals.css';

export default function Home() {
    return (
      <div className='flex flex-col justify-center items-center'>
        <p className="text-5xl md:text-5xl lg:text-7xl mt-5 mb-5 text-center transition-all duration-500"><ColorChange className='gold'>News</ColorChange></p>
      </div>
    );
  }
  
