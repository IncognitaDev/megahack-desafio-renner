import { CardWrapper, TextBox, ImgBox } from './styles'

export default function Card(props) {

  return (
    <CardWrapper>

          <ImgBox src={props.image} alt=""/>
          <TextBox>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </TextBox>

        </CardWrapper>
  )
}