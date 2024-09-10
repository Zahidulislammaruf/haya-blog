import { IoMdArrowForward } from "react-icons/io";


const Populer = () => {
    return (
        <div className=" container mx-auto px-6">
            
            <h2 className="text-[36px] font-semibold">Popular Articals </h2>
            <div className="flex justify-between pb-8">
            <h2 className=" flex-1">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</h2>
            <button className="btn bg-transparent border border-blue-600 hover:bg-transparent hover:border-blue-500">View All<IoMdArrowForward />
            </button>
            </div>
            <div>
            <div className=" text-white bg-cover bg-no-repeat rounded  bg-base-100 image-full  shadow-xl" style={{
    backgroundImage: "url(https://i.ibb.co.com/W5NkcNp/Image-2.png)",
  }}>

                 <div className=" p-[5%]">
                 <p className=" badge bg-white text-[18px] text-green-500  font-semibold">Feature</p>
                    <div className=" pt-[65%]">

                    <h2 className=" text-[36px] shadow-md font-semibold">How to prevent and protect your family from carbon monoxide</h2>
                    <div className=" flex justify-between mt-4 lg:mt-12 ">
        <div className=" flex gap-4">
        <div className="avatar">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
         </div>
         <div>
            <h2 className=" text-[20px] font-mono font-semibold">Miss Diana</h2>
            <h2 className="badge badge-info">Verified</h2>
         </div>
        </div>
        <div>
            <p className=" font-thin">4:55 PM</p>
            <p className=" font-thin">02 May</p>
        </div>
     </div>
                    </div> 
                </div>
           </div>
            </div>
            
        </div>
    );
};

export default Populer;