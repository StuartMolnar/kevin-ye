type ServiceCardProps = {
  title: string,
  imageUrl: string,
  description: string,
  link: string,
};

const ServiceCard = ({ title, imageUrl, description, link}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[812px] card max-w-[480px] my-5 bg-white rounded shadow-custom">
      <div className="h-[320px] w-full max-w-[480px]">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full"/>
      </div>
      <div className="flex flex-col justify-between h-full px-[20px] w-full md:px-10 pt-5 md:pt-10 max-w-[480px]"> 
          <div>
            <h2 className="font-bold text-h2 md:text-h2-dsk">{title}</h2>
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
          <a href={link} className="pt-[24px] md:pt-[30px] self-start">
            <div className="mb-[40px] py-[15px] px-[30px] bg-black text-white text-center hover:bg-gold hover:text-black">View Program Highlights</div>
          </a>
      </div>
    </div>
  )
}



  
export default ServiceCard;
