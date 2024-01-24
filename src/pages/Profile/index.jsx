import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar} from "./style";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/Williamamorim159.png" 
                    alt="Foto do usuario" />

                    <label htnlFor='avatar'>
                        <FiCamera/>
                        <input
                        id='avatar'
                        type='file'
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder ='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input
                    placeholder ='Email'
                    type='text'
                    icon={FiMail}
                />

                <Input
                    placeholder ='Senha atual'
                    type='password'
                    icon={FiLock}
                />
                <Input
                    placeholder ='Nova senha'
                    type='password'
                    icon={FiLock}
                />
                <Button title ='Salvar'/>
            </Form>
        </Container>
    )
}