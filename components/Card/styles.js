import styled from 'styled-components';
import media from 'styled-media-query'

export const CardWrapper = styled.div`
  width: 600px;
  height: 450px;
  background-color: var(--primary);
  padding: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('small')`
      flex-direction: column;

      position: absolute;
      height: 100vh;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100vw;
      border-radius: 0;

      justify-content: center;
    
  `}
`

export const TextBox = styled.div`

  color: #fff;
  flex: 1;
  margin-left: 30px;

  ${media.lessThan('small')`
      
     margin-left: 0;
     flex: 0;
     margin-top: 30px;

     h2 {
       text-align: center;
     }
  `}
` 

export const ImgBox = styled.img`
  width: 50%;

  ${media.lessThan('small')`
    width: 100%; 
  `}
`

export const Button = styled.button`
  position: absolute;
  display: block;
  bottom: 80px;
  right: 50px;
  width: 100px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: 0;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
`