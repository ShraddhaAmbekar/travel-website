
import React from 'react' 
import Navbar from '../Navbar'
import HeroSearch from './HeroSearch'
import Services from './Services'
import Destination from './Destination'
import DestinationTours from './DestinationTours'
import AboutVideo from './AboutVideo'
import AboutSection from './AboutSection'
// import TestimonialSection from './TestmonialSection'
// import BlogSection from './BlogSection'
// import IntroSection from './IntroSection'
// import Footer from '../Footer.'


const Home = () => {
	return (
		<div>
			<Navbar/>
			<HeroSearch/>
			<Services/>
			<Destination/>
			<DestinationTours/>
			<AboutVideo/>
			<AboutSection/>
			{/* <TestimonialSection/>
			<BlogSection/>
			<IntroSection/> */}
			{/* <Footer/> */}
		</div>
	)
}

export default Home
