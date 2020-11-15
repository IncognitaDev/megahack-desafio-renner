import Card from "../../components/Card";
import Header from "../../components/Header";

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';

import { Slider } from './styles'
import styles from '../../styles/Home.module.css'

const cards = [
  {title: 'Clube dos recebidos' , description: 'Faça parte do clube Renner e receba looks personalizados em casa', image: '/Gift-Box.svg',  button: false },
  {title: 'No seu estilo' , description: 'Mostre do que gosta mais e receba looks completos que são a sua cara  ', image: '/styled-walk.svg', 
  button: true}
]

export default function Club() {

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>


          <Slider infinite={false}>
          {cards.map((item) => (
            <div key={item}>
              <Card title={item.title} description={item.description} image={item.image} button={item.button}/>
            </div>
              
          ))}

          </Slider>
            
      </div>
      
    </div>
  )
}