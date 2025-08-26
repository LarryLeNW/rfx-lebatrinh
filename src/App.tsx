import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import TourCategories from './components/TourCategories'
import TopDestination from './components/TopDestination'
import TripPlan from './components/TripPlan'
import BestRecommend from './components/BestRecommend'
import RecentGallery from './components/RecentGallery'
import Statistic from './components/Statistic'
import TourGuide from './components/TourGuide'
import Testimonial from './components/Testimonial'
import Brands from './components/Brand'
import News from './components/News'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton'

function App() {
  return (
    <div className='pt-[140px]'>
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
  )
}

export default App
