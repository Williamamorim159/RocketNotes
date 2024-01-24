import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout} from "./style";

export function Header(){
    return(
        <Container>
            <Profile to = '/profile'>
                <img src="https://github.com/Williamamorim159.png"
                alt = "Foto do usuario"/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>William Amorim</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}