import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<body className='bg-emerald-50'>
				<Head>
					<title>Cookie Stand Admin</title>
				</Head>
				<Header />
				<main className='grid justify-items-stretch'>
          <StoreForm />
					<p className='justify-self-center'>Report Table Coming Soon...</p>
        </main>
				<Footer copyright='2022'/>
			</body>
		</div>
	);
}

function Header() {
	return (
		<header className='text-3xl bg-emerald-400 pl-4 py-2'>
			Cookie Stand Admin
		</header>
	);
}

function StoreForm() {
	return(
		<form className='bg-emerald-300 mt-40 mb-40 mx-40 py-8 grid-justify-items-stretch'>
			<legend className='justify-self-center'>Create Cookie Stand</legend>
			<label className='block my-2'>
				Location
				<input name='loc' type='text' placeholder='Enter city name here'></input>
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
			<button type='submit' className='bg-emerald-400 '>Create</button>
		</form>
	)
}

function Footer(props) {
	return(
		<p className='bg-emerald-400 mb-0 py-5'>&copy;{props.copyright}</p>
	)
	
}
