import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';
import SpecialOffers from '../special offers/SpecialOffers';
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

            <div className="my-5">
                <SpecialOffers></SpecialOffers>
            </div>
        </div>
    );
};

export default Home;
