
const Featured = () => {
    return (
        <div className=" w-3/4 mx-auto mt-12 mb-12">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className="flex-1">
    <img
      src="https://i.ibb.co.com/n0bGpcp/Image.png"
      alt="Album" />
  </figure>
  <div className=" p-4 flex-1">
     <p className=" badge badge-primary">Feature</p>
    <div className="flex flex-col mt- lg:mt-12">
    <h2 className=" underline cursor-pointer text-[20px] lg:text-[38px] font-semibold">Cheap Airline Tickets Great  Ways <br /> <span className="text-red-500">To Save</span> </h2>
     <p className=" lg:mt-6 ">
     In this digital generation where information can be easily obtained within seconds, business cards ...  
     </p>
    </div>
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
    );
};

export default Featured;