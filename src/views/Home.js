import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/index'
import PlayerAudio from '../components/PlayerAudio/index'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{
          padding: "2vh"
        }}>
        <h3 >Recente</h3>
      <PlayerAudio />
      </div>
    </div>
  );
}

export default Home;
