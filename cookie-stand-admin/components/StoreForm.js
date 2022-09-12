export default function StoreForm({createLocationHandler}) {
	function handleSubmit(event) {
		event.preventDefault();
		createLocationHandler(event.target.loc.value, event.target.min.value, event.target.max.value, event.target.avg.value)
		event.target.reset
	}

	return (
		<form
			onSubmit={ handleSubmit }
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