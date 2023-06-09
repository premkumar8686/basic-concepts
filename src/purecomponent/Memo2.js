import React from 'react'

function Memo2(props) {
  return (
    <>
      {console.log('Memo 2 Render...')}
      <h1>{props.passData}</h1>
    </>
  )
}
export default React.memo(Memo2);