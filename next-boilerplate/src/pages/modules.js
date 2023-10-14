import React from "react";
import Link from "next/link";
import Image from "next/image";

import Row from "../containers/RowContainer";
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

    <Row
      opt={{
        isBoxed: false,
        classes: "wrapper-overflow modules-page",
        alignTo: "center",
      }}
    >
      <div className='main-content'>
        <main>
          <br />
          <p className='main-content-p'>
            Quer saber mais do que vai ser ensinado na{" "}
            <span className='highlightMe'>Edu4Dev</span>? <br />
            Veja abaixo os primeiros módulos de estudo,{" "}
            <span className='highlightMe'>Baixe Já</span> os arquivos em PDF das
            aulas.
          </p>

          <div className='partners-wrapper'>
            <Link href={"/"} className='matriculas'>
              Matriculas Abertas!
            </Link>
          </div>
        </main>
      </div>
      <div className='edu-modules'>
        <h2 className='main-content-h2'>Módulo de Introdução ao Curso</h2>

        <ul>
          <li>Boas-vindas</li>
          <li>Palestra Inicial</li>
          <li>Apresentando-se</li>
          <li>O Que Vamos Aprender?</li>
          <li>O Que Vamos Fazer?</li>
          <li>Como Ganhar Dinheiro Com Esses Códigos?</li>
          <li>Tecnologia, Arte e Filosofia</li>
          <li>Inteligência Artificial</li>
        </ul>
        <h2 className='main-content-h2'>Módulo 01 - O Que é Versionamento?</h2>
        <ul>
          <li>O Que é Versionamento?</li>
          <li>O Que é Git?</li>
          <li>O Que é GitHub?</li>
          <li>Como acessar e criar uma conta no GitHub.</li>
          <li>
            Lidando com o formulário de cadastro, senhas fracas e teste de
            confirmação.
          </li>
          <li>Customizar as suas informações pessoais no GitHub.</li>
        </ul>
        <p>
          Compreenda o conceito fundamental do versionamento e sua importância
          na programação.
        </p>
        <p>
          Explore o sistema de controle de versão Git e como ele facilita o
          gerenciamento de código.
        </p>
        <p>
          Descubra o GitHub, uma plataforma de hospedagem de código que aprimora
          a colaboração e o compartilhamento.
        </p>

        <p>
          Saiba como personalizar suas informações de perfil e configurar o seu
          perfil de programador no GitHub.
        </p>
        <h2 className='main-content-h2'>Módulo 03</h2>
        <ul>
          <li>Software Livre</li>
          <li>Código Aberto</li>
          <li>Arquivos Padrões de Projeto</li>
          <li>Arquivos dotEnv</li>
          <li>Garantias Para Projetos de Código Aberto</li>
        </ul>
        <h2 className='main-content-h2'>Módulo 04</h2>
        <ul>
          <li>O MultiVerso RÖÖM</li>
          <li>Cartas do MultiVerso RÖÖM</li>
          <li>Método TE[i]As</li>
          <li>Esquema de MetaDados</li>
          <li>Blocos de MetaDados</li>
          <li>Palavras-chaves e Importâncias</li>
        </ul>
        <h2 className='main-content-h2'>Módulo 05</h2>
        <ul>
          <li>GitHub Templates</li>
          <li>
            Como colocar um site no ar igual a um hacker em cinco minutos?
          </li>
        </ul>
        <h2 className='main-content-h2'>Módulo 06</h2>
        <ul>
          <li>Otimização de Websítios</li>
          <li>Google PageSpeed</li>
          <li>GTMetrix</li>
          <li>Schema Validador</li>
          <li>MetaTags Validador</li>
        </ul>
        <ul>
          <li>Módulo Introdutório</li>
          <ul>
            <li>Boas-vindas</li>
            <li>Palestra Inicial</li>
            <li>Apresentando-se</li>
            <li>O que Vamos Aprender?</li>
            <li>O que Vamos Fazer?</li>
            <li>Como Ganhar Dinheiro Com Códigos?</li>
            <li>Tecnologia, Arte e Filosofia</li>
            <li>Inteligência Artificial</li>
          </ul>
          <li>Módulo 01</li>
          <ul>
            <li>O Que é Versionamento</li>
            <li>O Que é Git</li>
            <li>O Que é GitHub </li>
            <li>Como acessar e criar uma conta no GitHub</li>
            <li>
              Lidar com o formulário de cadastro, senhas fracas e teste de
              confirmação
            </li>
            <li>Cutomizar e escolher o seu pacote gratuito GitHub</li>
            <li>Acessar o menu lateral</li>
            <li>Customizar as suas informações pessoais no GitHub</li>
          </ul>
          <li>Módulo 02</li>
          <ul>
            <li>Como criar um repositório e o arquivo do seu perfil</li>
            <li>O Que é um repositório git</li>
            <li>Padrão de escrita MD “MarkDown”</li>
            <li>Marcações e Conversões em MD</li>
            <li>Analisar e seguir perfil do professor </li>
          </ul>
          <li>Módulo 03</li>
          <ul>
            <li>Software Livre</li>
            <li>Código Aberto</li>
            <li>Arquivos Padrões de Projeto</li>
            <li>Arquivos dotEnv</li>
            <li>Garantias Para Projetos de Código Aberto</li>
          </ul>
          <li>Módulo 04</li>
          <ul>
            <li>O MultiVerso RÖÖM</li>
            <li>Cartas do MultiVerso RÖÖM</li>
            <li>Método TE[i]As</li>
            <li>Esquema de MetaDados</li>
            <li>Blocos de MetaDados</li>
            <li>Palavras-chaves e Importâncias</li>
          </ul>
          <li>Módulo 05</li>
          <ul>
            <li>GitHub Templates</li>
            <li>
              Como colocar um site no ar igual a um hacker em cinco minutos?
            </li>
          </ul>
          <li>Módulo 06</li>
          <ul>
            <li>Otimização de Websítios</li>
            <li>Google PageSpeed</li>
            <li>GTMetrix</li>
            <li>Schema Validador</li>
            <li>MetaTags Validador</li>
          </ul>
          <li>E muito mais...</li>
        </ul>
      </div>
    </Row>
  </MainWrapperContainer>
);
export default Contato;
