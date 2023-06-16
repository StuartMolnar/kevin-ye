import ServicesCarousel from '@/components/ServicesCarousel';
import ClientStories from '@/components/ClientStories';;
import Hero from '@/components/Hero';

export default function Home() {
  
  return (
    <div>

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[185px]">

        <Hero />

        <section id="about-section" className="flex flex-col pt-32 md:flex-row">
            <div className='md:w-1/2'>
              <img src="/about-image.jpg" alt="" className='object-cover w-full h-[400px] md:h-[450px] xl:h-[634px] transition-all duration-200 ease-in-out'/>
            </div>

            <div className="flex flex-col justify-center md:w-1/2 max-w-[500px] ml-0 md:ml-[60px] xl:ml-[130px] md:pr-[60px] mr-auto transition-all duration-200 ease-in-out pt-[40px] px-12 md:px-0 md:pt-0">
              <h1 className="font-bold text-h1">
                About Kevin Ye
              </h1>
              <div className="flex pt-3">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="mt-10 mb-16 max-h-[450px] md:max-h-[10000px] overflow-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat.
              </p>
            </div>
        </section>
        

        <section className="bg-gold w-full py-[70px] flex flex-col justify-center items-center transition-all duration-200 ease-in-out px-10">
          <h3 className="font-medium text-center text-h3 max-w-[900px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci.”
          </h3>
        </section>

        <ServicesCarousel />

        <section id="quiz-section" className="flex">
          <h2 className="w-full p-32 font-bold text-center text-h2">Questionnaire Component Here</h2>
        </section>

        <ClientStories />

        <section id="contact-section" className="flex items-center pt-20">
        <div className="flex w-3/5">
          <div className="flex flex-col max-w-[600px] ml-auto mr-[40%] pl-32">
            <h1 className="font-bold text-h1">
                Workout with me
              </h1>
              <div className="flex pt-12">
                <img src="/hero-bar-gold.svg" alt="" className="w-[154px] h-3" />
                <img src="/hero-bar-black.svg" alt="" className="w-[154px] h-3 ml-1" />
              </div>
              <p className="pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt.
              </p>
              <h2 className="pt-16 font-bold text-h2">
                address line 1
              </h2>
              <h2 className="font-bold text-h2">
                address line 2
              </h2>
              <h2 className="font-bold text-h2">
                richmond BC, VXX XXX
              </h2>

              <h2 className="pt-6 font-bold text-h2">
              (XXX)-XXX-XXXX
              </h2>

              <h2 className="pt-6 font-bold text-h2">
                kevinye@email.com
              </h2>
          </div>
            
          </div>

          <img src="/footer-image.jpg" alt="" className="object-cover w-2/5 h-screen"/>
          
        </section>


      </main>
    </div>
  )
}