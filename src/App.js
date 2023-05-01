import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/AboutUs/OurTeam';
import JoinOurTeam from './components/AboutUs/JoinOurTeam';
import WhyUs from './components/AboutUs/WhyUs';
import TRSInThePress from './components/AboutUs/TRSInThePress';
import Properties from './components/Properties';
import MapView from './components/MapView';
import Blog from './components/Blog';
import OurPartners from './components/OurPartners/OurPartners';
import CapitalFarmCredit from './components/OurPartners/CapitalFarmCredit';
import LeFenceCo from './components/OurPartners/LeFenceCo';
import AhrensRanchWildlifeLLC from './components/OurPartners/AhrensRanchWildlifeLLC';
import RanchersTitle from './components/OurPartners/RanchersTitle';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/our-team' element={<OurTeam />} />
				<Route path='/join-our-team' element={<JoinOurTeam />} />
				<Route path='/why-us' element={<WhyUs />} />
				<Route path='/trs-in-the-press' element={<TRSInThePress />} />
				<Route path='/properties' element={<Properties />} />
				<Route path='/map-view' element={<MapView />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/our-partners' element={<OurPartners />} />
				<Route path='/capital-farm-credit' element={<CapitalFarmCredit />} />
				<Route path='/le-fence-co' element={<LeFenceCo />} />
				<Route
					path='/ahrens-ranch-wildlife-llc'
					element={<AhrensRanchWildlifeLLC />}
				/>
				<Route path='/rancherstitle' element={<RanchersTitle />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
