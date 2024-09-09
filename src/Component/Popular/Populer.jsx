import { IoMdArrowForward } from "react-icons/io";


const Populer = () => {
    return (
        <div className=" container mx-auto">
            <div>
                <div className="">
                    <h2 className="text-[36px] font-semibold">Popular Articles</h2>
                    <h2>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</h2>
                </div>
                <div>
                    <button className="btn bg-transparent border border-blue-600">View All<IoMdArrowForward />
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Populer;