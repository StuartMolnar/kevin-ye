import { Fade } from 'react-awesome-reveal';
import dynamic from 'next/dynamic';
const ServicesCarousel = dynamic(() => import('@/components/index/ServicesCarousel'), { ssr: false });
const ClientStories = dynamic(() => import('@/components/index/ClientStories'), { ssr: false });
const Navbar = dynamic(() => import('@/components/index/IndexNavbar'), { ssr: false });
import Hero from '@/components/index/Hero';
import AboutSection from '@/components/index/AboutSection';
import TaglineBar from '@/components/index/TaglineBar';
import Footer from '@/components/index/Footer';



export default function Home() {

  return (
    <div id="screen-top">
      <Navbar />
      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px]">

        <Fade>
          <Hero />
        </Fade>

        <Fade>
          <AboutSection />
        </Fade>

        <Fade>
          <TaglineBar />
        </Fade>   
        
        <Fade>
          <ServicesCarousel />
        </Fade>
        <Fade>
          <ClientStories />
        </Fade>
        
        <Fade>
          <Footer />  
        </Fade>
             

      </main>
    </div>
  )
}
