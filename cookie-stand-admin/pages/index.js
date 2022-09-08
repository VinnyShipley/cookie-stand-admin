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
				<main>
          
        </main>
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

}
