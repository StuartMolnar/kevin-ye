type ServiceCardProps = {
  title: string,
  imageUrl: string,
  description: string,
  func: () => any,
};

const ServiceCard = ({ title, imageUrl, description, func}: ServiceCardProps) => {
    return (
      <div className="flex flex-col flex-grow-0 flex-shrink-0 h-full card w-[480px]">
        <div className="h-[320px]">
            <img src={imageUrl} alt={title} className="object-cover w-full h-full"/>
        </div>
        <div className="flex flex-col justify-between flex-grow px-10 pt-10">
            <div>
              <h2 className="font-bold text-h2">{title}</h2>
              
              <div className="flex pt-[30px]">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>

              <p className="pt-[30px]">{description}</p>
            </div>
            <button className="my-[15px] py-[15px] px-[30px] bg-black text-white text-center self-start">View Program Highlights</button>
        </div>
      </div>
    )
  }
  
export default ServiceCard;
