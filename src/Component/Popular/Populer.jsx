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
            <div className="card bg-base-100 image-full  shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/fG9Qtcr/Image-1.png"
      alt="Shoes" />
  </figure>
  <div className="  opacity-90">
    <p className="bg-white ">Feature</p>
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Populer;