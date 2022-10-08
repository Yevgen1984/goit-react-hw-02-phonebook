import React from 'react';

import PropTypes from 'prop-types';

export const Filter = ({filter, onChange}) => {
  return (
    <>
      <label>
        <span>Find contact by name</span>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};