import React from 'react';
import Iframe from 'react-iframe'

function chart(props) {
  return (
      <div className="App">
        <Iframe
            url={props.url}
            width={props.width}
            height={props.height}
        />
      </div>
  )
}

export default chart;
