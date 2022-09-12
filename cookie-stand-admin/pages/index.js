import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import StoreForm from '../components/StoreForm'

export default function Home() {
	const [locations, setLocations] = useState([]);

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



function Table({locations}) {
	const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]
	const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]
	function showTable(locations) {
		if (locations.length == 0) {
			return(
			<p>need numbers</p>
			);
		} else {
			return(
				<table> 
					<thead>
						<tr>
							<th>Location</th>
							{hours.map(time => <th key={time}>{time}</th>)}
						</tr>
					</thead>
					<tbody>
						{locations.map(loc => (
							<tr key={loc.location}>
								<td>{loc.location}</td>
								{hourly_sales.map((sales,idx) => (
									<td key={idx}>{sales}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)
		}
	}
	return showTable(locations);
}
