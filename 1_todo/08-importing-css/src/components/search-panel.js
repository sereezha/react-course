import React from 'react';

import './search-panel.scss';

const SearchPanel = () => {
	return (
		<input
			type="text"
			className="form-control search-input"
			placeholder="type to search"
		/>
	);
};

export default SearchPanel;
