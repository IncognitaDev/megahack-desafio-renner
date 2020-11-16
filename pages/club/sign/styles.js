import styled from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  width: 600px;
  min-height: 450px;
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: #fff;
  box-shadow: #cdcdcd 1px 1px 30px;
  border-radius: 10px;
  padding: 50px;

  ${media.lessThan('small')`
        width: 100vw;
        height: 100%;
    `}
` 

export const InputGroup = styled.div`
  display:flex;
  flex-direction:column;

  input {
    width: 500px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #dedede;
    padding: 20px;
    ${media.lessThan('small')`
        width: 100%;
        
    `}
  }
  ${media.lessThan('small')`
        width: 100%;
        
    `}

`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 15px;
    ${media.lessThan('small')`
        flex-direction: column;
        align-items: flex-start;
    `}
`;
export const Label = styled.p`
    margin-bottom: 3px;
    font-size: 18px;
`;

export const Select = styled.div`
    display: flex;
    height: 40px;

    ${media.lessThan('small')`
        margin-bottom: 10px;
        width: 100%;
    
    `}
`;


export const Item = styled.button`
    width: 100px;
    padding: 5px 10px;
    margin: 0 20px ;

    text-transform: uppercase;
    color: var(--tertiary);
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;

    cursor: pointer;

    &:first-child {
        background-color: ${(props) =>
            props.selected
                ? 'red'
                : 'white' };
    }

    &:nth-child(2) {
        background-color: ${(props) =>
             props.selected
                ? 'red'
                : 'white' };
    }

    &:last-child {
        background-color: ${(props) =>
            props.selected
                ? 'red'
                : 'white' };
    }

    ${media.lessThan('small')`
        width: 100%;
        
    `}
`;

export const SubmitButton = styled.button`
    width:300px;
    height:  45px;

    background-color: var(--primary);
    color: white;
    border: 0;
    border-radius: 10px;
    margin-top: 30px;

    font-size: 20px;
`
