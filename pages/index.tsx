import dynamic from 'next/dynamic';
const ServicesCarousel = dynamic(() => import('@/components/index/ServicesCarousel'), { ssr: false });
const ClientStories = dynamic(() => import('@/components/index/ClientStories'), { ssr: false });
const Navbar = dynamic(() => import('@/components/index/IndexNavbar'), { ssr: false });
import Hero from '@/components/index/Hero';
import Copyright from '@/components/Copyright';
import Image from 'next/image';
import AboutSection from '@/components/index/AboutSection';
import Footer from '@/components/index/Footer';

export default function Home() {

  return (
    <div id="screen-top">
      <Navbar />
      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px]">

        <Hero />

        <AboutSection />
        

        <section className="bg-gold w-full py-[40px] md:py-[70px] px-[20px] md:px-10 flex flex-col justify-center items-center transition-all duration-200 ease-in-out">
          <h3 className="font-medium text-center text-h3 md:text-h3-dsk max-w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci.
          </h3>
        </section>

        <ServicesCarousel />

        <ClientStories />

        <Footer />       

      </main>
    </div>
  )
}
