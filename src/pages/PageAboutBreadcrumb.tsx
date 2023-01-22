import { 
    Flex, 
    Text,
    Hide,
    Show,
    Heading, 
    Container
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutBreadcrumb = () => {
    return (
        <Flex>
            <Hide below='md'>
                <MenuSideBar />
            </Hide>

            <Container maxW='container.xl' height='100vh' overflowY='auto' p='0'>

                <Show below='md'>
                    <MenuMobile marginBottom='0'/>
                </Show>

                <Flex flexDirection='column' p='1rem'>

                    <Heading as='h1' my='1rem'>
                        Breadcrumb
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso 2.4.8
                    </Heading>

                    <Text mb='1rem'>
                        Deverá ser fornecido um mecanismo que permita ao usuário orientar-se dentro de um 
                        conjunto de páginas, permitindo que ele saiba onde está no momento. Assim, poderá 
                        ser utilizado o recurso de “migalha de pão” (breadcrumbs), que são links navegáveis 
                        em forma de lista hierárquica os quais permitem que o usuário saiba qual o caminho 
                        percorrido até chegar à página em que se encontra no momento.
                    </Text>

                    <Text mb='1rem' fontWeight='semibold'>
                        OBS: Na migalha de pão, todas as páginas do caminho, com exceção da qual está o usuário 
                        (posição atual), deverão estar implementadas como links e contidas dentro de uma lista. 
                    </Text>

                    <Text mb='1rem'>
                        Abaixo, um exemplo de implementação de um Breadcrumb em HTML5 e em seguida sua estlização em CSS3:
                    </Text>

                    <PostComponent article_name={'breadcrumb_01'} />

                    <PostComponent article_name={'breadcrumb_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutBreadcrumb;