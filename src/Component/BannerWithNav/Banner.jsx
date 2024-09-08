
const Banner = () => {
    return (
        <div>
          <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/h8MRHYf/pexels-cottonbro-6209562.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h2 className=" text-[48px]">Our Classroom</h2>
      <label className="input input-bordered flex items-center gap-2">
         <input type="text" className="grow" placeholder="Search" />
          <span className=" p-2 rounded  bg-black text-white">Search</span>
      </label>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;