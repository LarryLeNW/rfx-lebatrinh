import Banner from "../../components/Banner";
import BestRecommend from "../../components/BestRecommend";
import Brands from "../../components/Brand";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import News from "../../components/News";
import RecentGallery from "../../components/RecentGallery";
import Statistic from "../../components/Statistic";
import Testimonial from "../../components/Testimonial";
import TopDestination from "../../components/TopDestination";
import TourCategories from "../../components/TourCategories";
import TourGuide from "../../components/TourGuide";
import TripPlan from "../../components/TripPlan";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

function A1() {
    return <div className='pt-[140px]'>
        <Header></Header>
        <Banner></Banner>
        <TourCategories></TourCategories>
        <TopDestination></TopDestination>
        <TripPlan></TripPlan>
        <BestRecommend></BestRecommend>
        <RecentGallery></RecentGallery>
        <Statistic></Statistic>
        <TourGuide></TourGuide>
        <Testimonial></Testimonial>
        <Brands></Brands>
        <News></News>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
    </div>
}

export default A1;