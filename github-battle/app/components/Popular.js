var React = require('react');
var PropTypes = require('prop-types');

// This is a stateless functional component it does not have any state, we are receiving everything through props. It is a functional component because it's just a function that is rendering or returning some UI. 
function SelectLanguage (props) {

  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(function(lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? { color : '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            { lang }
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
