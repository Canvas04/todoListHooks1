import React from "react";
export default function ButtonAdd({addItem}) {
  return <> 
  <button type ='button' className='btn btn-info' onClick={addItem} >
    Add item
  </button>
  </>;
}
