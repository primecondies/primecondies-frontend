import React from 'react';
import PropTypes from 'prop-types';

function Search({ value, onChange, children }) {
	return (
		<form>
			{children} <input type="text" value={value} onChange={onChange} />
		</form>
	);
}
Search.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Search;
