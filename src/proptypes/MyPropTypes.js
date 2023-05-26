import React from 'react';
import PropTypes from 'prop-types'


export default function MyPropTypes({name = 'Default Name', age, cars, children}) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{cars}</h1>
      <h1>{children}</h1>
    </>
  )
}

MyPropTypes.propTypes = {

   name: PropTypes.string.isRequired,
   age: PropTypes.number,
   cars: PropTypes.oneOf(['tata', 'Honda']),
   children: PropTypes.element
}