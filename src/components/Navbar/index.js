import React from 'react';
import * as S from './styles'

import teste from '../../assets/podcasts/images/codersgatelogo.jpeg'

function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Coder's Gate</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <S.Cover>
            <div className="Leftside">
                <div className="col">
                    <img id="profile" src={teste} className="rounded-circle"/>
                </div>
                <div className="col">
                    <h3>Coder's Gate - Seu podcast sobre carreira</h3>
                </div>
            </div>
        </S.Cover>
        <S.Menu>
          <a href="">Todas</a>
          <a href="">Faixas recentes</a>
          <a href="">Faixas antigas</a>
        </S.Menu>
        <hr />
        </div>
    )
}

export default Navbar