import styled from 'styled-components'
import teste from '../../assets/podcasts/images/codersgatelogo.jpeg'

export const Cover = styled.div`
    display: flex;
    max-width: 100%;
    height: 35vh;
    padding: 2.5vh;
    background-image: url(".${teste}");
    background-repeat: no-repeat;
    color: #fff;
    #profile{
        position: relative;
        max-width: 30vh;
        max-height: 30vh;
        border: 5px solid #ffff;
    }
    .Leftside{
        display: flex;
        align-items: center;
    }
`
export const Menu = styled.div`
    position: relative;
    top: 2.5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-itens: center;
    a{
        text-decoration: none;
        color: #000;
        :hover{
            color: #21618C;
        }
    }
`