const genFilterItems = (items) => {
	return items.map((item) => (
		<li key={item.region} className="filter__option-item">
			<input type="checkbox" id={`region__${item.region}`} className="filter__option-checkbox" onChange={() => {console.log(items); item.checked = !item.checked}} />
			<label htmlFor={`region__${item.region}`} className="filter__option-label">{item.region}</label>
		</li>
	))
}

export const Filter = () => {
	const items = [
		{checked: false, region: "Asia"},
		{checked: false, region: "Europe"},
		{checked: false, region: "Africa"},
		{checked: false, region: "Australia"},
	]

	return (
		<div className="filter__container">
			<input type="checkbox" className="filter__dropdown-checkbox" id="filter__dropdown" />
			<label htmlFor="filter__dropdown" className="filter__dropdown-text">Filter by Region</label>
			<label htmlFor="filter__dropdown" className="filter__dropdown-icon"></label>
			<ul className="filter__option">
				{genFilterItems(items, (item) => console.log(item))}
			</ul>
		</div>
	)
}