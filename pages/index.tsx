import dynamic from 'next/dynamic';
const ServicesCarousel = dynamic(() => import('@/components/ServicesCarousel'), { ssr: false });
const ClientStories = dynamic(() => import('@/components/ClientStories'), { ssr: false });
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
import Hero from '@/components/Hero';
import Copyright from '@/components/Copyright';

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px]">

        <Hero />

        <section id="about-section" className="flex flex-col pt-16 md:pt-32 md:flex-row">
            <div className='md:w-1/2'>
              <img src="/about-image.jpg" alt="" className='object-cover w-full h-[400px] md:h-[600px] xl:h-[634px] transition-all duration-200 ease-in-out'/>
            </div>

            <div className="flex flex-col justify-center md:w-1/2 ml-0 md:m-[60px] xl:m-[130px] pt-[40px] px-[20px] md:px-0 md:pt-0 transition-all duration-200 ease-in-out">
              <h1 className="font-bold text-h1 md:text-h1-dsk">
                About Kevin Ye
              </h1>
              <div className="hidden pt-3 md:flex">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <div className="md:hidden flex pt-[18px] ">
                <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
                <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
              </div>
              <p className="mt-[24px] md:mt-10 mb-[40px] md:mb-16 max-h-[450px] md:max-h-[10000px] overflow-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat.
              </p>
            </div>
        </section>
        

        <section className="bg-gold w-full py-[40px] md:py-[70px] px-[20px] md:px-10 flex flex-col justify-center items-center transition-all duration-200 ease-in-out">
          <h3 className="font-medium text-center text-h3 md:text-h3-dsk max-w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci.
          </h3>
        </section>

        <ServicesCarousel />

        <section id="quiz-section" className="flex">
          <h2 className="w-full p-32 font-bold text-center text-h2 md:text-h2-dsk">Questionnaire Component Here</h2>
        </section>

        <ClientStories />

        {/* mobile footer */}
        <section id="contact-section" className="flex pt-16 lg:hidden">
          
          <div className="flex flex-col">
            

            <img src="/footer-image.jpg" alt="" className="object-cover w-screen"/>


            <div className="flex flex-col pt-10 mx-[20px] h-full">
              <h1 className="font-bold text-h1 md:text-h1-dsk">
                  Workout with me
                </h1>
                <div className="flex pt-[18px]">
                  <img src="/hero-bar-gold.svg" alt="" className="w-[154px] h-3" />
                  <img src="/hero-bar-black.svg" alt="" className="w-[154px] h-3 ml-1" />
                </div>
                <p className="pt-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt.
                </p>
                <div className="mt-20">
              
              <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px]">Contact Me Now</div>
              <h2 className="pt-10 font-bold text-h2">
                (778)-1234-5678
              </h2>
              <h2 className="pb-10 font-bold text-h2">
                kevinye@email.com
              </h2>
              <Copyright />
            </div>
            </div>
            
          </div>

        </section>

      {/* desktop footer */}
      {/* desktop footer */}
      <section id="contact-section" className="hidden pt-20 lg:flex">

        <div className="flex items-center w-3/5"> {/* Added items-center here */}
            <div className="flex flex-col max-w-[500px] mx-[20px] lg:mx-auto">
                <h1 className="font-bold text-h1 md:text-h1-dsk">
                    Workout with me
                </h1>
                <div className="flex pt-12">
                    <img src="/hero-bar-gold.svg" alt="" className="w-[154px] h-3" />
                    <img src="/hero-bar-black.svg" alt="" className="w-[154px] h-3 ml-1" />
                </div>
                <p className="pt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt.
                </p>
                <div className="mt-20">
            
                <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px]">Contact Me Now</div>
                <h2 className="pt-10 font-bold text-h2">
                    (778)-1234-5678
                </h2>
                <h2 className="pb-10 font-bold text-h2">
                    kevinye@email.com
                </h2>
                <Copyright />
            </div>
            </div>
            
        </div>

        <img src="/footer-image.jpg" alt="" className="object-cover w-2/5 h-screen"/>

      </section>


    

      </main>
    </div>
  )
}
