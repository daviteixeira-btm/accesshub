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

const PageAboutFunctionChangeFontSize = () => {
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
                        Funcionalidade para alterar o tamanho da fonte
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso ???
                    </Heading>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Aqui está um exemplo de código que pode ser usado para 
                        aumentar, diminuir e resetar o tamanho da fonte em um site:
                    </Heading>

                    <PostComponent article_name={'alterarFontes_01'} />

                    <Text my='1rem'>
                        Este código apresenta três botões com os textos "(A+)", "(A)" e "(A-)" 
                        e os adiciona a página. Quando os botões são clicados, o código 
                        seleciona todos os elementos com a classe "font-size" 
                        (que deve ser adicionada aos elementos que deseja alterar o tamanho da fonte) e 
                        altera o tamanho da fonte em 2 pixels.
                    </Text>

                    <Text mb='1rem'>
                        Dentro da tag {'<script></script>'} podemos ver os exemplos de como as 
                        funções de aumentar, diminuir e resetar o tamanho da fonte são feitos e 
                        como eles podem ser acessados a partir do atributo "onclick" de um botão no HTML.
                    </Text>

                    <Text mb='1rem'>
                        Assim, quando um botão é clicado, a função correspondente é chamada e o 
                        tamanho da fonte é alterado. Isso permite que você adicione os botões 
                        diretamente no HTML, sem precisar criá-los dinamicamente usando JavaScript.
                    </Text>

                    <Text mb='1rem'>
                        Você pode adicionar limites de aumento e diminuição de fonte no código acima 
                        adicionando condições dentro dos event listeners dos botões. Os limites são 
                        definidos nas linhas if {`(fontSize < 30)`} e if {`(fontSize > 12)`}, 
                        onde 30px é o limite máximo para o aumento e 12px é o limite mínimo para a 
                        diminuição. Esses limites podem ser ajustados de acordo com as necessidades 
                        do seu site.
                    </Text>

                    <Text mb='1rem'>
                        Você pode armazenar o tamanho atual da fonte de cada elemento individualmente, 
                        em vez de usar uma variável global. Dessa forma, cada elemento terá seu próprio 
                        tamanho de fonte e não haverá interferência entre os elementos.
                    </Text>

                    <Text mb='1rem'>
                        Dentro do for loop, usamos a função 
                        getComputedStyle(elements[i]).fontSize para recuperar o tamanho atual da fonte do 
                        elemento, e armazenando esse valor na variável fontSize. Depois, verificamos se esse 
                        tamanho é menor que 30px e, se for, adicionando 2 pixels a ele. Dessa forma, cada 
                        elemento com a classe "font-size" terá seu próprio tamanho de fonte e será 
                        aumentado ou diminuido em 2 pixels a cada clique nos botões.
                    </Text>

                    <Text mb='1rem'>
                        Para garantir que os valores originais sejam restaurados corretamente, você pode 
                        armazenar os valores originais da fonte de cada elemento individualmente no 
                        momento em que a página é carregada e, em seguida, usar esses valores para 
                        restaurar a fonte quando a função "resetFont" é chamada.
                    </Text>

                    <Text mb='1rem'>
                        No momento em que a página é carregada, armazenamos os valores originais da fonte 
                        de cada elemento com a classe "font-size" em uma variável 
                        chamada "originalFontSizes". Depois, na função "resetFont", estamos percorrendo 
                        cada elemento e definindo seu tamanho de fonte como o valor armazenado na 
                        variável "originalFontSizes". Dessa forma, cada elemento terá seu tamanho de 
                        fonte original restaurado, independentemente de ter um tamanho diferente 
                        antes de ser modificado.
                    </Text>

                    <Text mb='1rem'>
                        Lembrando que é importante testar o site com usuários e verificar se o 
                        limite de aumento e diminuição, além da funcionalidade de resetar o 
                        tamanho da fonte, atende a necessidade de todos os usuários.
                    </Text>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Recomendações
                    </Heading>

                    <Text mb='1rem'>
                        É importante lembrar que este código apresentado é apenas uma 
                        sugestão e pode ser adaptado de acordo com as necessidades específicas do 
                        seu projeto.
                    </Text>

                    <Text mb='1rem'>
                        Além disso, é importante também que seja feito testes de usabilidade para verificar se 
                        a fonte voltando ao tamanho original está de acordo com as necessidades 
                        do usuário, além de verificar se não há problemas de acessibilidade, 
                        como fonte muito pequena, após o reset.
                    </Text>

                    <Text mb='1rem'>
                        Também é uma boa prática manter o controle do tamanho da fonte em toda 
                        a página, isto é, deixar o tamanho da fonte do conteúdo dinâmico, e não 
                        fixo, para atender a necessidade de usuários com diferentes necessidades.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutFunctionChangeFontSize;