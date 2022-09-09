import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

export default function Home() {
	const [locations, setLocations] = useState('');

	function createLocationHandler(event) {
		event.preventDefault();
		setLocations(
			JSON.stringify({
				location: event.target.loc.value,
				minCust: event.target.min.value,
				maxCust: event.target.max.value,
				avgCookie: event.target.avg.value,
			})
		);

		const locationObj = {
			id: locations.length + 1,
			storeLocation: location,
			storeMinCust: minCust,
			storeMaxCust: maxCust,
			storeAvg: avgCookie,
		};

		setLocations([...locations, locationObj]);
		event.target.reset();
	}

	return (
		<>
			<Head>
				<title>Cookie Stand Admin</title>
			</Head>
			<div className='bg-emerald-50'>
				<Header />
				<main className='grid justify-items-stretch'>
					<StoreForm createLocationHandler={createLocationHandler} />
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

function StoreForm({createLocationHandler}) {
	return (
		<form
			onSubmit={ createLocationHandler }
			className='bg-emerald-300 mt-40 mb-40 mx-40 py-8 grid-justify-items-stretch rounded-lg'
		>
			<legend className='space-y-8'>Create Cookie Stand</legend>
			<label className='block my-2'>
				Location
				<input
					name='loc'
					type='text'
					placeholder='Enter city name here'
				></input>
			</label>
			<label>
				Minimum Customers Per Hour
				<input name='min' type='text' placeholder='Enter minimum here'></input>
			</label>
			<label>
				Maximum Customers Per Hour
				<input name='max' type='text' placeholder='Enter maximum here'></input>
			</label>
			<label>
				Average Cookies Per Hour
				<input name='avg' type='text' placeholder='Enter avg here'></input>
			</label>
			<button type='submit' className='bg-emerald-400 '>
				Create
			</button>
		</form>
	);
}

function Table(locations) {
	function showTable(locations) {
		console.log(locations);
		if (locations.length == 0) {
			return <p>need numbers</p>;
		} else {
			return <p>{locations.loc}</p>;
		}
	}
	return showTable(locations);
}
