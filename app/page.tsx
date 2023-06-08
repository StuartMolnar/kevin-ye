export default function Home() {
  return (
    <div>


      <main className="font-poppins font-normal text-body min-h-screen bg-white text-black">

        <section className="flex text-navbar">

        </section>

        <section className="flex flex-col mx-32 mt-24">
          <div>
            <p className="text-hero font-heavy">Transformation Coach</p>
            <p className="text-hero font-heavy">Personal Trainer</p>
            <p className="text-hero font-heavy">Powerlifting Expert</p>
          </div>

          <div className="flex pt-10">
            <img src="/hero-bar-gold.svg" alt="" className="-ml-2 h-3 w-64" />
            <img src="/hero-bar-black.svg" alt="" className="-ml-2 h-3 w-64" />
          </div>

          <div className="pt-10">
            <p className="font-medium text-hero-sub max-w-112">
              I help individuals unlock their true potential and overcome limitations set in their mind.
            </p>
          </div>
            
          <div className="flex space-x-5 pt-10">
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
              <div className="h-14 p-4 font-medium flex items-center justify-center border-black border-[1.5px] rounded-sm">
                View My Fitness Programs
              </div>
            </a>
          </div>


        </section>
      </main>
    </div>
  )
}
