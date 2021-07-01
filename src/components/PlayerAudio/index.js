import React from 'react';

import * as S from './styles'

import image1 from '../../assets/podcasts/images/codersgatelogo.jpeg'
import sound0 from '../../assets/podcasts/sounds/Coders Gate 000.m4a'
import sound1 from '../../assets/podcasts/sounds/Coders Gate 001.m4a'
import sound2 from '../../assets/podcasts/sounds/Coders Gate 002.m4a'
import sound3 from '../../assets/podcasts/sounds/Coders Gate 003.m4a'
import sound4 from '../../assets/podcasts/sounds/Coders Gate 004.mp3'
import sound5 from '../../assets/podcasts/sounds/Coders Gate 005.m4a'
import sound6 from '../../assets/podcasts/sounds/Coders Gate 006.m4a'

function PlayerAudio(){
    return(
        <S.Container>
        <div id="player">
            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #000 - Uma Breve Introdução</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound0} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #001 - Home office e Home schooling feat. Abner Matias e Alex Morais</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound1} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #002 - Faculdade pública e vida acadêmica ft. Prof. Ms. Sérgio Donisete Clauss</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="player">
            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #003 - Universidades, quais as opções para a minha renda e como posso chegar nelas?</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound3} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #004 - Faça de tudo um pouco na vida Ft. Prof.Dr.Sérgio Furgeri</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound4} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #005 - Importância da Gestão de Pessoas e TI na Pandemia Ft. Robert Soares</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="player">
            <div class="card">
                <div className="row">
                    <div className="col">
                        <img class="card-img-top" src={image1}/>
                    </div>
                    <div className="col">
                        <div class="card-body">
                            <h5>Coder's Gate #006 - Mitos e técnicas de entrevista Part.1 Entrevistas de TI</h5>
                            <p class="artist">Coder's Gate</p>
                            <audio controls src={sound6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </S.Container>
    )
}

export default PlayerAudio