import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper =  styled.div` 
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: var(--primary);
  padding: 0 20px;

  justify-content: space-between;
  align-items: center;

  
` 

export const UserImage = styled.img`
  border-radius: 50%;

  height: 40px;
  width: 40px;
  background-color: white;

`

export const Logo = styled.img`
  height: 180px;

  ${media.lessThan('small')`
      display: none ;
  `}

` 