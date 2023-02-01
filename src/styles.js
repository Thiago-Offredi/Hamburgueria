import styled from 'styled-components';
import Burger from './assets/burger.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
background: #0A0A10;
min-height: 100vh;
height: 100%;
`
export const ContainerItens = styled.div`
width: 414px;
height: 896px;
background: #0A0A10;
min-height: calc(100vh-170px);

`
export const ImagemCodeBurger = styled.img`
 background: url("${Burger}");
 background-size: cover;
 margin-top: 30px;
`

export const H1 = styled.h1`
text-align: center;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;
margin-right: 68px;
margin-bottom: 40px;
`
export const InputsLabel = styled.p`
margin-left: 12px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;

`

export const Inputs = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border:none ;
outline: none;
padding-left: 15px;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 21px;
color: #FFFFFF;
margin-bottom: 34px;




`
export const Button = styled.button`
width: 342px;
height: 68px;
border-radius: 8px;
background: #D93856;
border: none;
font-weight: 900;
font-size: 17px;
text-align: center;
color: #FFFFFF;
cursor: pointer;
&:hover{
    opacity: .5;
}
&:active{
    opacity: .8;
}
`
export const Pedido = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;

p{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;;
}
.client{
    display: flex;
    justify-content: flex-start;

}
button{
    background: none;
    border: none;
    cursor: pointer;
}
`
