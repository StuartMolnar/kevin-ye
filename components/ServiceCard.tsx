type ServiceCardProps = {
  title: string,
  imageUrl: string,
  description: string,
  link: string,
};

const ServiceCard = ({ title, imageUrl, description, link}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full card">
      <div className="h-[320px] w-full max-w-[480px]">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full"/>
      </div>
      <div className="flex flex-col justify-between w-full md:px-10 pt-5 md:pt-10 max-w-[480px]">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-h2">{title}</h2>

              <div className="hidden md:flex pt-[30px]">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <div className="flex pt-6 md:hidden ">
                <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
                <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
              </div>

              <p className="pt-[24px] md:pt-[30px]">{description}</p>
            </div>
            <a href={link} className="pt-[24px] md:pt-[30px]">
              <button className="w-full mx-2 md:mx-0 md:w-auto my-[15px] py-[15px] px-[30px] bg-black text-white text-center self-start hover:bg-gold hover:text-black">View Program Highlights</button>
            </a>
          </div>
      </div>
    </div>
  )
}


  
export default ServiceCard;
