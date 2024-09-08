
const Banner = () => {
    return (
        <div>
          <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/h8MRHYf/pexels-cottonbro-6209562.jpg)",
  }}>
  <div className="hero-overlay  bg-opacity-30"></div>
  <div>
    <h2 className=" text-[48px] text-center text-white">Our Classroom</h2>
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow w-48 md:w-96 " placeholder="Search Anything" />
  <span className=" p-1 px-3 bg-blue-500 m-2 rounded text-white font-semibold ">Search</span>
</label>
<div className="flex text-white gap-6 mt-4">
  <p>Populer Tags : </p>
  <p className=" border border-white bg-white bg-opacity-40 p-1 px-2 text-black font-semibold"><a href="">Desing</a></p>
  <p className=" border border-white bg-white bg-opacity-40 p-1 px-2 text-black font-semibold"><a href="">Sports</a></p>
  <p className=" border border-white bg-white bg-opacity-40 p-1 px-2 text-black font-semibold"><a href="">Weather</a></p>
</div>
  </div>
</div>  
        </div>
    );
};

export default Banner;