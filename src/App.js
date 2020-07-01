import React from 'react';
import Iframe from 'react-iframe'
import Chart from './chart'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row} from "react-bootstrap";

function App() {
  return (
      <Container fluid>

        <Chart width={550} height={500}
               url={["https://plotly.com/~Kshit96/29"]}/>


        <Chart width={550} height={500}
               url={["https://plotly.com/~Kshit96/32",
                 "https://plotly.com/~Kshit96/53",
                 "https://plotly.com/~Kshit96/50"]}/>

        <Chart width={550} height={500}
               url={["https://plotly.com/~Kshit96/43",
                 "https://plotly.com/~Kshit96/48"]}/>


        {/*<img*/}
        {/*    src="https://plotly.com/~Kshit96/29.png?share_key=bR06bv6DeVlGhOKhzIejfP"*/}
        {/*    alt="card-statuses"*/}
        {/*    width="600"*/}
        {/*    onError="this.onerror=null;this.src='https://plotly.com/404.png';"/>*/}

      </Container>
  );
}

export default App;
