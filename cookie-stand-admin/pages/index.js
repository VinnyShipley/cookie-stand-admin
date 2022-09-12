import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import StoreForm from '../components/StoreForm'

export default function Home() {
	const [locations, setLocations] = useState('');

	function createLocation(location, min, max, avg) {
		const locationObj = {
			location: location,
			min: min,
			max: max,
			avg: avg,
		};

		setLocations([...locations, locationObj]);
	}

	return (
		<>
			<Head>
				<title>Cookie Stand Admin</title>
			</Head>
			<div className='bg-emerald-50'>
				<Header />
				<main className='grid justify-items-stretch'>
					<StoreForm createLocationHandler={ createLocation } />
					<p className='justify-self-center mb-12'>
						Report Table Coming Soon...
					</p>
					<Table locations={locations} />
				</main>
				<Footer locationNumber={locations.length} />
			</div>
		</>
	);
}

function Header() {
	return (
		<header className='text-3xl bg-emerald-400 pl-4 py-2'>
			Cookie Stand Admin
		</header>
	);
}



function Table(locations) {
	function showTable(locations) {
		console.log(locations);
		if (locations.length == 0) {
			return <p>need numbers</p>;
		} else {
			return <p>{ locations.storeLocation }</p>;
		}
	}
	return showTable(locations);
}
