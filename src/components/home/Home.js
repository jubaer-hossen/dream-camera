import Products from '../Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;
