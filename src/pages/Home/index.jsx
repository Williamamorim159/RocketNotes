import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title= 'Todos' isActive/></li>   
                <li><ButtonText title= 'Frontend'/></li>    
                <li><ButtonText title= 'Node'/></li>    
                <li><ButtonText title= 'React'/></li>   
            </Menu>

            <Search>
                <Input placeholder = 'Pesquisar pelo título'/>
            </Search>
                
            <Content>
                <Section title='Minhas notas'>
                <Note data={{
                    title: 'React',
                    tags: [
                    {id: '1', name: 'React'},
                    ]   
                }}>
                </Note>

                <Note data={{
                    title: 'Exemplo de Middleware',
                    tags: [
                    {id: '2', name: 'express'},
                    {id: '3', name: 'nodejs'}
                    ]   
                }}>
                </Note>
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}