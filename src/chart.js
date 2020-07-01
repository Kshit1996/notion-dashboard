import React from 'react';
import Iframe from 'react-iframe'

function chart(props) {
  return (
        <Iframe
            url={props.url}
            width={props.width}
            height={props.height}
            frameBorder={0}
        />
  )
}

export default chart;
