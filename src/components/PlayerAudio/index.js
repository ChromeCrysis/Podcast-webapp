import React from 'react';

import * as S from './styles'

import image1 from '../../assets/podcasts/images/como-comecei.jpg'
import sound1 from '../../assets/podcasts/sounds/como-comecei.mp3'

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
                            <h5>Tittle</h5>
                            <p class="artist">Artista</p>
                            <audio controls src={sound1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </S.Container>
    )
}

export default PlayerAudio