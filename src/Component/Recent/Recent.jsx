import { IoMdArrowForward } from "react-icons/io";

const Recent = () => {
    return (
        <div className=" container mx-auto mb-12 mt-12 px-6">
            <h2 className="text-[36px] font-semibold">Recent Articals </h2>
            <div className="flex justify-between pb-8">
            <h2 className=" flex-1">Here’s what we've been up to recently.</h2>
            <button className="btn bg-transparent border border-blue-600 hover:bg-transparent hover:border-blue-500">View All<IoMdArrowForward />
            </button>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
           <div className=" text-white bg-no-repeat rounded  bg-base-100 image-full bg-cover  shadow-xl" style={{
    backgroundImage: "url(https://i.ibb.co.com/NYRrLm5/Base.png)",
  }}>

                 <div className="pt-[70%] p-[5%]">
                    <h2 className=" text-[28px] font-bold">Future Of Work</h2>
                    <h2 className=" text-[20px]">Majority of peole will work in jobs that don’t exist today.</h2>
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
           <div className=" text-white bg-cover bg-no-repeat rounded  bg-base-100 image-full  shadow-xl" style={{
    backgroundImage: "url(https://i.ibb.co.com/XCDhmyr/Base-1.png)",
  }}>

                 <div className="pt-[70%] p-[5%]">
                    <h2 className=" text-[28px] font-bold">Future Of Data</h2>
                    <h2 className=" text-[20px]">Thanks to never-ending piles of data & the amount of insight</h2>
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
           <div className=" text-white bg-cover bg-no-repeat rounded  bg-base-100 image-full  shadow-xl" style={{
    backgroundImage: "url(https://i.ibb.co.com/vZXfw7B/Base-2.png)",
  }}>

                 <div className="pt-[70%] p-[5%]">
                    <h2 className=" text-[28px] font-bold">Future Of Learning</h2>
                    <h2 className=" text-[20px]">A constant ability to learn will be on the most crucial skills</h2>
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
    );
};

export default Recent;