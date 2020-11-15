
import Link from 'next/link'
import { CardWrapper, TextBox, ImgBox, Button } from './styles'

export default function Card(props) {

  return (
    <CardWrapper>

          <ImgBox src={props.image} alt=""/>
          <TextBox>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </TextBox>
          {props.button == true && (
            <Link href='/'>
            <Button>Assinar</Button>
            </Link>
             
          )}
        </CardWrapper>
  )
}