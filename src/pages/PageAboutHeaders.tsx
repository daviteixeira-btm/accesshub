import { 
    Flex, 
    Hide,
    Show,
    Text,
    Heading, 
    Container
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutHeaders = () => {
    return (
        <Flex>    
            <Hide below='md'>
                <MenuSideBar />
            </Hide>

            <Container
                p='0'
                height='100vh'
                overflowY='auto'
                maxW='container.xl'
            >

                <Show below='md'>
                    <MenuMobile marginBottom='0'/>
                </Show>

                <Flex
                    p='1rem'
                    flexDirection='column'
                >

                    <Heading
                        as='h1'
                        my='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                    >
                        Cabeçalhos
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1rem'
                        fontFamily='Inter'
                    >
                        Ver WCAG 2.0 Critérios de Sucesso 1.3.1 e 2.4.10
                    </Heading>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Utilizar corretamente os níveis de cabeçalho (1.3.1 e 2.4.10)
                    </Heading>
                    
                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os níveis de cabeçalho (elementos HTML H1 a H6) devem ser utilizados de forma 
                        hierárquica, pois organizam a ordem de importância e subordinação dos conteúdos, 
                        facilitando a leitura e compreensão. Além disso, muitos leitores de tela utilizam 
                        a hierarquia de cabeçalhos como uma forma de navegação na página, pulando de um 
                        para outro, agilizando, assim, a navegação.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Conceitualmente, existem seis níveis de títulos, sendo o H1 o mais alto, ou seja, 
                        deverá corresponder ao conteúdo principal da página, assim é recomendável que toda 
                        página tenha apenas um H1. Já os níveis do H2 ao H6 poderão ser utilizados mais de 
                        uma vez na página, mas sem excesso e com lógica textual, obedecendo uma hierarquia.
                    </Text>
                    
                    <PostComponent article_name={'headers_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para compreender melhor os níveis de título pode-se tomar como exemplo um sítio de 
                        um livro, onde o nome do livro é o H1, os capítulos são H2, os subcapítulos são H3 
                        e assim por diante.
                    </Text>

                    <PostComponent article_name={'headers_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutHeaders;