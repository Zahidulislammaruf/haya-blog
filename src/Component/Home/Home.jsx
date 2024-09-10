import BannerWithNav from "../BannerWithNav/BannerWithNav";
import Featured from "../Featured/Featured";
import Populer from "../Popular/Populer";
import Recent from "../Recent/Recent";

const Home = () => {
    return (
        <div>
            <BannerWithNav></BannerWithNav>
            <Featured></Featured>
            <Populer></Populer>
            <Recent></Recent>
            
        </div>
    );
};

export default Home;