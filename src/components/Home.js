import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import Form from './Form';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<>
			<div className='home-carousel'>
				<img src='' alt='main carousel goes here' />
			</div>
			<div className='home-section1'>
				<div className='home-section1-inner-column1'>
					<div className='trs-brand-image-wrapper'>
						<img
							className='grid-content'
							decoding='async'
							src='https://trsteamportal.com/wp-content/uploads/2021/12/TRS-1c-BLK-Hor-Logo@4x.png'
							alt='Texas Ranch Sales Logo'
							title='Texas is our brand.'></img>
					</div>
					<div className='home-intro-paragraph'>
						<h4>Premier Texas Ranch Broker</h4>
						<h6>Live Water | Cattle | Horse | Recreational | Hunting</h6>
						<p className='p1'>
							Texas Ranch Sales brokers and represents an astonishing array of
							some of the finest hunting, livestock, and recreational ranches
							for sale in Texas. From luxurious personal estates, impressive
							hunting ranches with stunning varieties of exotics, and massive
							commercial cattle operations, to family farms and vacant land, we
							have the knowledge and experience to sell any Texas ranch. It is
							not enough that our team of brokers has extensive knowledge of the
							many facets of Texas ranching, above all, they have a deep and
							personal connection to the ranching community in their region of
							the state. When you meet them you’ll understand that what they do
							is not a job, it is a passion… a passion to match an extraordinary
							Texas ranch with the buyer that can make the most of the resources
							and potential of that ranch. Licensed in Texas, New Mexico,
							Arizona, and Oregon.
						</p>
						<p>
							<strong>
								Licensed in Texas, New Mexico, Arizona, and Oregon.
							</strong>
						</p>
						<div className='home-listings-btn-parent'>
							<button className='home-listings-btn'>View All Listings</button>
						</div>
					</div>
				</div>
				<div className='home-section1-inner-column2'>
					<div className='home-join-paragraph'>
						<h1>JOIN OUR TEAM</h1>
						<div className='join-video'>
							<YoutubeEmbed className='grid-content' embedId='8qpwK2ZQgiA' />
						</div>
						<p>
							<strong>Join the Texas Ranch Sales Team</strong>
						</p>
						<p>
							“Texas Ranch Sales is looking for Associates and Brokers from all
							areas of the great state of Texas. If you are satisfied with where
							you’re currently at and you feel supported and rewarded for your
							effort, then that’s great and we hope to do a deal with you soon.
							But if you want to see what “Best in Class Marketing”, “Superior
							Transaction Coordination”, “Training and Development”, and a team
							of leaders that support and encourage you to be your very best,
							give us a call! I look forward to showing you the difference that
							riding for the TRS Brand can make for your career.” –
							<strong> Dave Wilcox, COO</strong>
						</p>
						<div className='home-listings-btn-parent'>
							<button className='home-listings-btn'>Learn More</button>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='home-section2'>
				<div className='home-section2-inner-row1'>
					<h1>Latest Property Listings</h1>
				</div>
				<div className='home-section2-inner-row2'>
					<div className='home-slideshow'>Property cards go here, actually</div>
				</div>
				<div className='home-section-inner-row3'>
					<button className='home-btn-alternate'>View All Listings</button>
				</div>
			</div>
			<hr />
			<h3>Send Us A Message</h3>
			<Form />
			<div className='home-links-below-form'>
				<span>
					<Link
						to={
							'https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf'
						}>
						<strong>
							Texas Real Estate Commission Consumer Protection Notice
						</strong>
					</Link>
				</span>
				{/* this middle span is only to space the links a bit, delete it once the CSS fixes this */}
				<span> </span>
				<span>
					<Link
						to={
							'https://www.texasranchsalesllc.com/TRS/TRS-forms/IABS-Forms/IABS-Sheldon-Grothaus.pdf'
						}>
						<strong>
							Texas Real Estate Commission Information About Brokerage Services
						</strong>
					</Link>
				</span>
			</div>

			<hr />
			<Footer />
		</>
	);
}

export default Home;
