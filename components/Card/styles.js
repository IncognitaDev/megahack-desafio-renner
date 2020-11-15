import styled from 'styled-components';
import media from 'styled-media-query'

export const CardWrapper = styled.div`
  max-width: 600px;
  height: 450px;
  background-color: var(--primary);
  border-radius: 8px;
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