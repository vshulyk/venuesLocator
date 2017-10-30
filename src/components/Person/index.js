import React from 'react'
import './index.css';

class Person extends React.Component {
  render() {
    const { data, onClick } = this.props;

    return (
      <div className={`person ${data.active ? 'person_active' : ''}`} onClick={onClick}>
        {data.name}
      </div>
    );
  }
}

export default Person;
