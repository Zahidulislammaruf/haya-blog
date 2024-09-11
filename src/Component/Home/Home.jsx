import Articals from "../Articals/Articals";
import BannerWithNav from "../BannerWithNav/BannerWithNav";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Populer from "../Popular/Populer";
import Recent from "../Recent/Recent";

const Home = () => {
    return (
        <div>
            <BannerWithNav></BannerWithNav>
            <Featured></Featured>
            <Populer></Populer>
            <Recent></Recent>
            <Articals></Articals>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;