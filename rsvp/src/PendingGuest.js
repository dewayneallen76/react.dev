import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const PendingGuest = props => {
  return (
    <li>
      <GuestName
        isEditing={props.isEditing}
        handleNameEdits={e => props.setName(e.target.value)}>
        {props.name}
      </GuestName>

    </li>
  )
}

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PendingGuest;
