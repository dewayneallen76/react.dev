import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  // var totalPlayers = props.players.length;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: PropTypes.array.isRequired,
}

export default Stats;
