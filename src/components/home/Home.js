import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div className="my-5">
                <Products></Products>
            </div>

            <div className="my-5">
                <ShowReviews></ShowReviews>
            </div>
        </div>
    );
};

export default Home;
