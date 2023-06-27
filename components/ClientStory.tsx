type ClientStoryProps = {
    title: string,
    description: string,
  };
  
  const ClientStory = ({ title,  description}: ClientStoryProps) => {
    const paragraphedDescription = description.split("\\p").map((paragraph, index) => <p key={index}>{paragraph}</p>);
  
    return (
      <div className="flex flex-col w-full h-full text-black card">
        <h1 className="font-bold text-h1 md:text-h1-dsk">{title}</h1>
        <div className="hidden md:flex pt-[12px]">
          <img src="/about-bar-gold.svg" alt="" className="w-24 h-3 -ml-1" />
          <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
        </div>
        <div className="flex pt-[18px] md:hidden ">
          <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
          <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
        </div>
        <div className="mt-[24px] md:mt-[40px] space-y-5 max-h-[450px] lg:max-h-[10000px] overflow-auto">
          {paragraphedDescription}
        </div>
      </div>
    )
  }
  
  export default ClientStory;
  