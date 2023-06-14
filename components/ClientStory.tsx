type ClientStoryProps = {
    title: string,
    description: string,
  };
  
  const ClientStory = ({ title,  description}: ClientStoryProps) => {
    const paragraphedDescription = description.split("\\p").map((paragraph, index) => <p key={index}>{paragraph}</p>);
  
    return (
      <div className="flex flex-col w-full h-full text-black card">
        <h1 className="font-bold text-h1">{title}</h1>
        <div className="flex pt-[12px]">
          <img src="/about-bar-gold.svg" alt="" className="w-24 h-3 -ml-1" />
          <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-2" />
        </div>
        <div className="pt-[40px] space-y-5">
          {paragraphedDescription}
        </div>
      </div>
    )
  }
  
  export default ClientStory;
  