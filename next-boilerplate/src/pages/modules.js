import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Contato = () => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.index.slug,
        title: `${mainConfigs.pages.index.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.index.description,
        author: mainConfigs.website.author,
        siteUrl: mainConfigs.website.siteUrl,
        brandName: mainConfigs.business.brandName,
        brandEmail: mainConfigs.business.brandEmail,
        brandLogo: mainConfigs.business.brandLogo,
        brandPhone: mainConfigs.business.brandPhone,
        brandDescription: mainConfigs.business.brandDescription,
        brandCardImage: mainConfigs.business.brandCardImage,
        featuredImage: `${mainConfigs.website.siteUrl}${slugPrefix}/favicon-32x32.png`,
        datePublished: mainConfigs.website.datePublished,
        i18n: mainConfigs.website.i18n,
        keywords: mainConfigs.website.keywords,
        questions: mainConfigs.website.questions,
        topology: "pages",
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.index.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <div className='modules-page'>
      <main className='main-content'>
        <br />
        <p className='main-content-p'>
          Quer saber mais do que vai ser ensinado na{" "}
          <span className='highlightMe'>Edu4Dev</span>? <br />
          Veja abaixo os primeiros módulos e conteúdo das aulas.
        </p>
        <div className='partners-wrapper'>
          <a
            href={"https://wa.me/5512981062959"}
            target='_blank'
            rel='nofollow'
            className='matriculas'
          >
            Matriculas Abertas!
          </a>
        </div>
      </main>
      <div className='edu-modules'>
        <h2 className='main-content-h2'>Módulo de Introdução ao Curso</h2>
        <Image
          src={"/brandimages/ditadora.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          "Sejam bem-vindx's ao meu Brasil beta 2-0.X.X" -{" "}
          <span className='highlightMe'>Ditadora Facista</span>
        </p>
        <ul>
          <li>Boas-vindas</li>
          <li>Palestra Inicial</li>
          <li>Apresentando-se</li>
          <li>O Que Vamos Aprender?</li>
          <li>O Que Vamos Fazer?</li>
          <li>Como Ganhar Dinheiro Com Esses Códigos?</li>
          <li>Comece a sua Carreira Internacional</li>
          <li>Tecnologia, Arte e Filosofia</li>
          <li>Inteligência Artificial</li>
          <li>O Desenvolvedor da Luz</li>
        </ul>
        <h2 className='main-content-h2'>Módulo 01 - O Que é Versionamento?</h2>
        <Image
          src={"/brandimages/check.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Compreenda o conceito fundamental do versionamento e sua importância
          na programação.
        </p>
        <ul>
          <li>O Que é Versionamento?</li>
          <li>O Que é Git?</li>
          <li>O Que é GitHub?</li>
          <li>Como acessar e criar uma conta no GitHub.</li>
          <li>
            Lidando com o formulário de cadastro, senhas fracas e teste de
            confirmação.
          </li>
          <li>Customize o seu Perfil GitHub.</li>
        </ul>

        <h2 className='main-content-h2'>Módulo 02 - Construindo o Metaverso</h2>
        <Image
          src={"/brandimages/passeando.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Neste módulo você aprenderá a criar um repositório no GitHub.
          Configurar o arquivo de desenvolvedor. Explore o conceito de
          repositórios Git e como são usados para gerenciar código e projetos.
          Descubra o padrão de escrita MarkDown (MD) e sua utilidade na
          formatação de texto.
        </p>
        <ul>
          <li>Como Criar um Repositório e o Arquivo do seu Perfil</li>
          <li>O que é um Repositório Git</li>
          <li>Padrão de escrita MD “MarkDown”</li>
          <li>Marcações e Conversões em MD</li>
          <li>
            Perfil da <span className='highlightMe'>Edu4Dev</span>{" "}
            https://github.com/Edu4Dev
          </li>
          <li>
            Perfil do <span className='highlightMe'>Professor</span>{" "}
            https://github.com/miltonbolonha
          </li>
        </ul>

        <h2 className='main-content-h2'>
          Módulo 03 - Código Aberto & Padrões Básicos
        </h2>
        <Image
          src={"/brandimages/bolo.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Compreenda o que significa código aberto e as vantagens associadas a
          esse modelo de desenvolvimento. Saiba mais sobre os arquivos padrões
          de projeto de código aberto. Aprenda sobre as garantias de software,
          licença MIT e segurança.
        </p>
        <ul>
          <li>Software Livre</li>
          <li>Código Aberto</li>
          <li>Arquivos Padrões de Projeto</li>
          <li>Arquivos dotEnv</li>
          <li>Garantias Para Projetos de Código Aberto</li>
        </ul>

        <h2 className='main-content-h2'>Módulo 04 - O MultiVerso RÖÖM</h2>
        <Image
          src={"/brandimages/web.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Explore o conceito do MetaVerso, como funciona o universo dos dados e
          sua importância. Entenda a definição de metadados e como eles são
          usados em contextos como jogos e sistemas de informação. Conheça o
          Método TE[i]As para a organização de metadados.
        </p>
        <ul>
          <li>O MultiVerso RÖÖM</li>
          <li>Cartas do MultiVerso RÖÖM</li>
          <li>Método TE[i]As</li>
          <li>Esquema de MetaDados</li>
          <li>Blocos de MetaDados</li>
          <li>Palavras-chaves e Importâncias</li>
        </ul>

        <h2 className='main-content-h2'>
          Módulo 05 - Modelo GitHub Para WebSítios
        </h2>
        <Image
          src={"/brandimages/github-logo.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Use os modelos <span className='highlightMe'>Edu4Dev</span> para{" "}
          <span className='highlightMe'>GitHub Templates</span> e simplifique o
          processo de criação aplicativos e websítios. Coloque um websítio no ar
          em 5 minutos, igual a um hacker.
        </p>
        <ul>
          <li>GitHub Templates</li>
          <li>
            Como colocar um site no ar igual a um hacker em cinco minutos?
          </li>
        </ul>

        <h2 className='main-content-h2'>Módulo 06</h2>
        <Image
          src={"/brandimages/pinguim.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={280}
          height={280}
          className='seven-img'
        />
        <p>
          Explorare técnicas e práticas para testar a velocidade e o desempenho
          de websites. A importância da validação de esquema de metadados, como
          isso afeta a visibilidade e o desempenho nos mecanismos de busca.
        </p>
        <ul>
          <li>Otimização de Websítios</li>
          <li>Google PageSpeed</li>
          <li>GTMetrix</li>
          <li>Schema Validador</li>
          <li>MetaTags Validador</li>
        </ul>
      </div>
    </div>
    <Footer />
  </MainWrapperContainer>
);
export default Contato;
