export default function Table({locations}) {
	const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]
	const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]
	function showTable(locations) {
		if (locations.length == 0) {
			return(
			<p>No Cookie Stands Available</p>
			);
		} else {
			return(
				<table className="  "> 
					<thead>
						<tr>
							<th>Location</th>
							{hours.map(time => <th key={time}>{time}</th>)}
						</tr>
					</thead>
					<tbody>
						{locations.map(loc => (
							<tr key={loc.location}>
								<td className="text-center">{loc.location}</td>
								{hourly_sales.map((sales,idx) => (
									<td className="text-center" key={idx}>{sales}</td>
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
