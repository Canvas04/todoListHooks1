import React from "react";
import propTypes from 'prop-types';

export default function ButtonAdd({addItem}) {
  return <> 
  <button type ='button' className='btn btn-info' onClick={addItem} >
    Add item
  </button>
  </>;
}
ButtonAdd.propTypes = {
  addItem : propTypes.func.isRequired
}