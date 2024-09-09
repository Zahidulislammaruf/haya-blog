import BannerWithNav from "../BannerWithNav/BannerWithNav";
import Featured from "../Featured/Featured";
import Populer from "../Popular/Populer";

const Home = () => {
    return (
        <div>
            <BannerWithNav></BannerWithNav>
            <Featured></Featured>
            <Populer></Populer>
        </div>
    );
};

export default Home;