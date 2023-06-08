
export default function Home() {
  return (
    <div>


      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body">

        <section className="flex text-navbar">

        </section>

        <section className="relative flex mx-64 mt-24">
          <div className="z-10 flex flex-col">
            <div>
              <p className="text-hero font-heavy">Transformation Coach</p>
              <p className="text-hero font-heavy">Personal Trainer</p>
              <p className="text-hero font-heavy">Powerlifting Expert</p>
            </div>

            <div className="flex pt-10">
              <img src="/hero-bar-gold.svg" alt="" className="w-64 h-3 -ml-2" />
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

          <div className="absolute right-0 customHeroLogo:left-[850px]">
            <img src="/kevin-ye-logo-hero.svg" alt="" className="min-w-[622px] min-h-[632px]"/>
          </div>
        </section>
      </main>
    </div>
  )
}
