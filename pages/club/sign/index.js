import { useState } from 'react'
import { Form, InputGroup , Field, Label, Select, Item, SubmitButton} from "./styles";
import Header from '../../../components/Header'
import styles from '../../../styles/Home.module.css'

const levels = [
  { id: 1, title: 'P' },
  { id: 2, title: 'M' },
  { id: 3, title: 'G' },
];

export default function Submit() {
  const [level, setLevel] = useState('P');


  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
          <Form>
            <InputGroup>
              <Label htmlFor="Name">Nome</Label>
              <input type="text" name="Name"/>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="Endereço">Endereço</Label>
              <input type="address" name="Endereço"/>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="Numero">Numero</Label>
              <input type="number" name="Numero"/>
            </InputGroup>

            
            <Field>
                            <Label>Tamanho</Label>
                            <Select>
                                {levels.map((levelItem) => (
                                    <Item
                                        type="button"
                                        selected={level === levelItem.title}
                                        onClick={() =>
                                            setLevel(levelItem.title)
                                        }
                                        key={levelItem.id}
                                    >
                                        {levelItem.title}
                                    </Item>
                                ))}
                            </Select>
                        </Field>

            <InputGroup>
              <Label htmlFor="calçado">Calçado</Label>
              <input type="number" name="calçado"/>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="calça">Calça</Label>
              <input type="number" name="Calça"/>
            </InputGroup>

            <h2>R$ 69,99</h2>

              <SubmitButton type='submit'>Assinar</SubmitButton>

          </Form>
      </div>
      
    </div>
  )
}