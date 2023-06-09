import ServicesCarousel from '../components/ServicesCarousel';

export default function Home() {
  return (
    <div>


      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body">

        <section className="flex text-navbar">

        </section>

        <section className="relative flex mx-[200px] mt-24">
          <div className="z-10 flex flex-col">
            <div>
              <p className="text-hero font-heavy">Transformation Coach</p>
              <p className="text-hero font-heavy">Personal Trainer</p>
              <p className="text-hero font-heavy">Powerlifting Expert</p>
            </div>

            <div className="flex pt-10">
              <img src="/hero-bar-gold.svg" alt="" className="w-64 h-3" />
              <img src="/hero-bar-black.svg" alt="" className="w-64 h-3 -ml-2" />
            </div>

            <div className="pt-10">
              <p className="font-medium text-hero-sub max-w-112">
                I help individuals unlock their true potential and overcome limitations set in their mind.
              </p>
            </div>
              
            <div className="flex pt-10 space-x-5">
              <a href="" className="">
                <img src="/linkedin.svg" alt="" className="w-14 h-14" />
              </a>
              <a href="" className="">
                <img src="/insta.svg" alt="" className="w-14 h-14" />
              </a>
              <a href="" className="">
                <img src="/tiktok.svg" alt="" className="w-14 h-14" />
              </a>
              <a href="">
                <div className="h-14 p-4 font-medium flex items-center justify-center border-black border-[1.5px] rounded-[2.5px]">
                  View My Fitness Programs
                </div>
              </a>
            </div>
          </div>

          <div className="absolute right-0 customHeroLogo:left-[50%]">
            <img src="/kevin-ye-logo-hero.svg" alt="" className="min-w-[622px] min-h-[632px]"/>
          </div>
        </section>

        <section className="flex pt-32">
            <div className='w-1/2'>
              <img src="/about-image.jpg" alt="" className='object-cover w-full h-[350px] md:h-[450px] xl:h-[634px]'/>
            </div>

            <div className="flex flex-col justify-center w-1/2 pl-[130px] pr-[200px]">
              <h1 className="font-bold text-h1">
                About Kevin Ye
              </h1>
              <div className="flex pt-3">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat.
              </p>
            </div>
        </section>

        <section className="bg-gold w-full py-[70px] flex flex-col justify-center items-center">
          <h3 className="font-medium text-center text-h3 max-w-[900px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci.”
          </h3>
        </section>

        <ServicesCarousel />
      </main>
    </div>
  )
}
