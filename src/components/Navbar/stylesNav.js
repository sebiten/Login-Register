import styled from 'styled-components'



export const Container = styled.div`
position: absolute;
width: 500px;
height: 48px;
padding: 1rem .5rem;
left: 0px;
bottom: -220px;
background: #FFFFFF;
box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.14), 0px -1px 10px rgba(0, 0, 0, 0.12), 0px -2px 4px rgba(0, 0, 0, 0.2);
`
export const Navbars = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;

`
export const Enlace = styled.a`
font-style: normal;
font-weight: 900;
font-size: 10px;
line-height: 16px;
/* identical to box height, or 160% */
margin-top: 5px;
text-align: center;
letter-spacing: 0.5px;
text-transform: uppercase;

/* 00. On Surface / High Emphasis */

color: rgba(0, 0, 0, 0.87);

`
