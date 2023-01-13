import {
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Logo from "../../assets/logoEscola/logoNoBg.png";

export const UseTerms = () => {
  return (
    <Flex
      flexDir={"column"}
      align="center"
      gap={"1rem"}
      p="1rem"
      textAlign="left"
    >
      <Image src={Logo} maxW="400px" mb={"2rem"} />
      <Heading>POLÍTICA DE PRIVACIDADE</Heading>
      <Heading as="h2">
        1.Sobre nossa política de privacidade
      </Heading>
      <Text>
        Esta Política de Privacidade aplica-se às informações pessoais coletadas
        de você ou sobre você pelo Instituto Yassuda, quando visita nossa
        plataforma ou usa nossos serviços. Explicamos abaixo por que e como
        processamos suas informações pessoais. Responsável por processar dados
        dentro do escopo do aplicativo Instituto Yassuda. Essa Política de
        Privacidade será efetiva a partir 01/01/2023. Podemos alterar esta
        Política de Privacidade, especialmente no caso de surgimento de novos
        atos legislativos e documentos regulamentares sobre o processamento e a
        proteção de dados pessoais. A versão atualizada da Política de
        Privacidade será automaticamente disponibilizada nesta página.
      </Text>
      <Heading as="h2">
        2. Definições
      </Heading>
      <Text>
        "Serviços" significa todos os serviços online oferecidos a você quando
        acessa ou usa nossa Plataforma. "Plataforma" refere-se ao nosso site.
        Informações Pessoais significa qualquer informação relacionada a você, e
        com base na qual você pode ser identificado, direta ou indiretamente.
      </Text>
      <Text>
        O Instituto Yassuda em conformidade com a legislação comercial se
        comprometem a proteger sua privacidade e garantem o cumprimento da
        legislação de proteção de dados pessoais, mais especificamente, o
        Regulamento Geral de Proteção de Dados ("RGPD").
      </Text>
      <Text>
        Seus dados pessoais serão tratados de forma lícita, leal e transparente,
        de acordo com as finalidades determinadas explícitas e legítimas e,
        unicamente, se forem adequados, pertinentes e limitados ao necessário em
        relação a tais finalidades. Além disso, manteremos seus dados pessoais
        exatos e atualizados, conservando-os para que seja possível
        identificá-lo apenas durante o período de tempo necessário para cumprir
        as finalidades do tratamento.
      </Text>
      <Text>
        O Instituto Yassuda implementou as medidas técnicas e organizacionais
        necessárias para proteger seus dados contra perdas acidentais ou
        alterações, acesso, uso ou divulgação não autorizados, tendo também
        estabelecido procedimentos para reagir perante qualquer incidente de
        segurança que possa afetar seus dados pessoais. Soemte nós, do Instituto
        Yassuda, temos permissão de utilizar imagens de imagem, assim como foi
        autorizado, no termo de autorização de imagem ao se matricular na
        escola.
        <Text>
          Mediante a presente política de privacidade, informamos sobre a forma
          em que será realizado o tratamento de seus dados pessoais por ocasião
          de sua participação em um evento do Instituto Yassuda. Caso a política
          de privacidade seja atualizada, você será comunicado por meio deste
          Website.
        </Text>
      </Text>

      <Heading as="h2">
        3. Como entrar em contato conosco?
      </Heading>
      <Text>
        Você pode entrar em contato conosco pelo e-mail
        cayonakasato112@gmail.com
      </Text>
      <Heading as="h2">
        4. Que tipo de informação pessoal nós processamos sobre você?{" "}
      </Heading>
      <Text>Nós processamos diferentes tipos de informações pessoais:</Text>
      <TableContainer whiteSpace="pre-wrap">
        <Table size="sm">
          <Thead>
            <Tr>
              <Td>
                Informações pessoais que você deve fornecer: Dependendo do uso
                de nossos serviços, precisaremos que você nos forneça algumas
                informações pessoais.
              </Td>
              <Td>
                Informações sobre a conta (e-mail, endereço, nome de usuário,
                senha)
              </Td>
            </Tr>
            <Tr>
              <Td>
                Informações pessoais que você pode fornecer: Ao usar nossos
                Serviços, você pode fornecer algumas Informações Pessoais
                adicionais.
              </Td>
              <Td>
                Informações adicionais (nome, sobrenome, sua descrição)Sua
                atividade (suas promoções, discussões, comentários, tópicos
                salvos, curtidas, alertas de desejos, filtros ativos, pesquisas,
                )Suas respostas às nossas pesquisas (endereço de email e dados
                comportamentais)
              </Td>
            </Tr>
            <Tr>
              <Td>
                Informações pessoais que coletamos automaticamente: Coletamos
                também determinadas categorias de informações pessoais quando
                você visita nossa Plataforma e usa nossos Serviços.
              </Td>
              <Td>
                Suas tendências (estatísticas )Dados comportamentais (páginas
                visualizadas, cliques, duração dos dados,filtros ativos,
                pesquisas)Dados de registro e informações do dispositivo (hora,
                data, endereço IP)
              </Td>
            </Tr>
            <Tr>
              <Td>
                Informações pessoais que coletamos de um parceiro de negócios
                (com o seu consentimento): quando você concorda (por exemplo,
                quando aceita cookies de terceiros em nossa plataforma ou no
                site de terceiros), também coletamos determinadas informações
                pessoais de parceiros de negócios (comerciantes, anunciantes,
                revendedores).
              </Td>
              <Td>
                Informações da conta (endereço de email, nome de usuário)Seu
                numero de telefone Dados do pedido Suas respostas às nossas
                pesquisas (endereço de email e dados comportamentais)Dados
                comportamentais (página visualizada, tempo na plataforma,
                cliques, interações com a plataforma ...)Dados de registro e
                informações do dispositivo (hora, data, endereço IP anônimo,
                localização geográfica, informações do navegador, tamanho da
                tela, sistema operacional, ID do dispositivo)
              </Td>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      <Heading as="h2">
        5. Por que é necessário o fornecimento de algumas informações pessoais?
      </Heading>
      <Text>
        Às vezes, requisitamos que você nos forneça algumas de suas informações
        pessoais. Solicitamos apenas quando é necessário para a prestação de
        nossos Serviços ou exigido por lei. Por exemplo, precisamos coletar seu
        endereço de e-mail quando você cria uma conta em nossa Plataforma, nome
        para registro de alunos, oferecer dados para o MEC. Ao não fornecer
        informaçoes obrigatórias, poderá ter consequências: Não poderemos criar
        sua conta; Não poderemos fornecer nossos serviços a você e etc.
      </Text>
      <Heading as="h2">
        6. Por que e para que usamos suas informações pessoais?
      </Heading>
      <Text>
        Precisamos usar suas informações pessoais para vários fins, porque temos
        uma base legal para fazê-lo, que pode ser:
      </Text>
      <ul>
        <li>
          a necessidade de entrar com nosso Termo de Uso com você (necessidade
          contratual),
        </li>
        <li>
          nossa necessidade de cumprir as obrigações legais (conformidade com a
          lei),
        </li>
        <li>
          um interesse legítimo no processamento de suas informações pessoais
          (nosso interesse legítimo),
        </li>
        <li>você consentiu com esse processamento (seu consentimento)</li>
      </ul>
      <Text>
        Observe que você tem o direito de retirar seu consentimento ou se opor
        ao processo com base em nosso interesse legítimo por qualquer
        processamento das operações listadas acima a qualquer momento, entrando
        em contato conosco ou retirando a si mesmo e suas informações pessoais
        da plataforma, onde POSSÍVEL. Coletamos, processamos e usamos as
        Informações Pessoais mostradas acima para os seguintes fins:
      </Text>
      <TableContainer whiteSpace="pre-wrap">
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td>Propósito:</Td>
              <Td>Base Legal</Td>
              <Td>(Categorias das) Informações Pessoais</Td>
            </Tr>
            <Tr>
              <Td>Para se inscrever e fazer login em nossa plataforma</Td>
              <Td>Necessidade contratual</Td>
              <Td>Informações da conta</Td>
            </Tr>
            <Tr>
              <Td>Para fornecer nossos serviços</Td>
              <Td>Necessidade contratual</Td>
              <Td>
                Informações da conta, Informações AdicionaisSuas Atividades
              </Td>
            </Tr>
            <Tr>
              <Td>Para permitir que você personalize seu perfil de usuário</Td>
              <Td>Consentimento</Td>
              <Td>Informações da conta</Td>
            </Tr>
            <Tr>
              <Td>
                Para enviar mensagens do suporte, atualizações, alertas de
                segurança e notificações de conta.
              </Td>
              <Td>Necessidade contratual</Td>
              <Td>Informações da conta</Td>
            </Tr>
            <Tr>
              <Td>Para notificar sobre alterações em nossos serviços</Td>
              <Td>Necessidade contratualCumprimento da lei</Td>
              <Td>Informações da conta</Td>
            </Tr>
            <Tr>
              <Td>
                Para prevenir e detectar fraudes, melhorar a segurança de nossos
                serviços
              </Td>
              <Td>Interesse legítimo e cumprimento da lei</Td>
              <Td>
                Registro de dados e informação do dispositivo, Suas Atividades
              </Td>
            </Tr>
            <Tr>
              <Td>Para manter um registro das ações</Td>
              <Td>Interesse legítimo</Td>
              <Td>
                Registro de dados e informação do dispositivo, Informação da
                Conta
              </Td>
            </Tr>
            <Tr>
              <Td>
                Administrar nossa plataforma e operações internas, incluindo
                pesquisas, solução de problemas e testes de bugs, análise de
                dados, pesquisa e análise para desenvolvimento de produtos.
              </Td>
              <Td>Interesse legítimo</Td>
              <Td>
                Informações da conta, informações adicionais, suas atividades,
                registro de dados e informações do dispositivo
              </Td>
            </Tr>
            <Tr>
              <Td>
                Para melhorar nossa plataforma, serviços, experiências,
                marketing, relacionamento com clientes, para fornecer respostas
                às suas perguntas.
              </Td>
              <Td>Interesse Legítimo</Td>
              <Td>
                Informações da conta, informações adicionais, suas atividades,
                registro de dados e informações do dispositivo
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Heading as="h2">
        7. Por quanto tempo mantemos suas informações pessoais?
      </Heading>
      <Text>
        Mantemos suas Informações Pessoais pelo tempo necessário para a
        finalidade para a qual as obtivemos, especialmente desde que você
        continue a usar nossos Serviços e por um período de 3 (três) anos após
        nosso último contato com você ou o último uso de Serviços, caso você
        tenha criado uma conta em nossa Plataforma. No final do período acima
        mencionado, poderemos entrar em contato com você para descobrir se você
        deseja continuar usando nossos Serviços. Na ausência de uma resposta
        positiva e explícita de você, seus Dados Pessoais serão excluídos ou
        arquivados de acordo com as disposições em vigor. Observe que, mesmo que
        sua conta e informações pessoais sejam excluídas: Suas contribuições,
        tópicos, promoções e comentários serão mantidos e colocados em anônimo
        Suas mensagens privadas sempre permanecerão disponíveis para nós. Caso
        sua conta seja bloqueada, manteremos parte de suas Informações Pessoais
        por um período entre 1 e 3 anos, a fim de impedir que você contorne as
        regras aplicáveis à nossa Plataforma. Mantemos os dados dos cookies por
        um período de 30 dias a partir de quando foram coletados, caso você não
        esteja conectado à nossa Plataforma e por até 13 meses em outras
        instâncias.
      </Text>
      <Heading as="h2">
        8. Quem recebe as suas informações pessoais?
      </Heading>
      <Text>
        Nós não vendemos dados pessoais a terceiros. Compartilhamos suas
        informações pessoais com nossas empresas parceiras por interesse
        legítimo.
        <br />
        Estamos trabalhando também em uma colaboração com terceiros que são os
        destinatários dos seus dados pessoais, como: nossos parceiros de
        negócios que são plataformas de mídia social ou empresas de tecnologia:
        login no Facebook (política de privacidade), login do Google (política
        de privacidade), login na Apple (política de privacidade) e que podem
        lhe fornecer serviços de conexão, como a conexão de informações do seu
        perfil das plataformas deles para a nossa plataforma; nossos parceiros
        contratados, técnicos ou de análise. Por exemplo, eles podem nos ajudar:
        analisar nosso tráfego, analisar o comportamento dos usuários que
        visitam a Plataforma para distinguir humanos de programas automatizados,
        enviar notificações push personalizadas para nosso aplicativo móvel,
        executar desenvolvimento e manutenção de produtos, fornecer atendimento
        ao cliente. Esses provedores têm acesso limitado às suas informações
        para executar essas tarefas em nosso nome e são contratualmente
        obrigadas a protegê-las e usá-las apenas para os fins para os quais
        foram divulgadas e consistentes com esta Política de Privacidade. Apenas
        transferimos seus dados pessoais para esses terceiros se houver uma base
        legal e onde eles tenham fornecido segurança adequada. Essas medidas de
        segurança são fornecidas através: Cláusulas padrão de proteção de dados
        adotadas ou aprovadas pela Comissão Europeia; Conformidade com um código
        de conduta aprovado; Certificação sob um mecanismo de certificação
        aprovado; Cláusulas contratuais autorizadas por uma supervisão
        competente.
      </Text>
      <Heading as="h2">
        9. Quais são seus direitos?
      </Heading>
      <Text>
        Você tem vários direitos referentes às suas informações pessoais:
      </Text>
      <TableContainer whiteSpace="pre-wrap">
        <Table size="sm" variant="simple">
          <Tbody>
            <Tr>
              <Td>Direito de acesso:</Td>
              <Td>
                Você tem o direito de acessar suas informações pessoais fazendo
                uma solicitação por escrito para nós. Isso significa que você
                tem o direito de obter uma cópia de suas informações pessoais.
              </Td>
            </Tr>
            <Tr>
              <Td>Direito à retificação</Td>
              <Td>
                Você tem o direito de retificar ou completar suas informações
                pessoais, caso sejam imprecisas ou incompletas.
              </Td>
            </Tr>
            <Tr>
              <Td>Direito de Apagar:</Td>
              <Td>
                Você tem o direito de solicitar o apagamento de suas informações
                pessoais. Observe que esse direito não é absoluto e se aplica
                apenas em determinadas circunstâncias (por exemplo, apenas se as
                informações pessoais não forem mais necessárias para os fins que
                originalmente coletamos ou processamos para elas, etc.).
              </Td>
            </Tr>
            <Tr>
              <Td>Direito de apresentar uma reclamação</Td>
              <Td>
                Você tem o direito de apresentar uma reclamação perante a
                jurisdição relevante.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Text>
        Para exercer seus outros direitos, entre em contato conosco usando as
        informações de contato no início desta Política de Privacidade. Talvez
        seja necessário pedir-lhe uma prova de identidade para ter a certeza de
        que é você. Faremos o nosso melhor para lhe responder dentro de um
        mês.Às vezes não poderemos aceitar seu pedido porque seus Direitos de
        Proteção de Dados podem se aplicar somente em certas circunstâncias ou
        depender da base legal do processamento: nós então o informaremos.
      </Text>
    </Flex>
  );
};
