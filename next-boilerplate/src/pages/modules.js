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
        classes: "wrapper-overflow",
        alignTo: "center",
      }}
    >
      <div className='main-content'>
        <main>
          {/* <Image
            src={"/brandimages/logo-ROOM@2x.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={215}
            height={60}
            style={{ objectFit: "cover", margin: "50px 0" }}
            className='profile-image'
          /> */}
          <p className='main-content-p'>
            Somos a <span className='highlightMe'>Edu4Dev</span>, a única Escola
            de Programação que <br />
            ensina <span className='highlightMe'>teoria de verdade</span>, com{" "}
            <span className='highlightMe'>tecnologia própria</span>
            <br />e possui a maior experiência de mercado (desde 1998 e Top
            Rated UpWork).
            <br />
            Tudo para te ensinar o verdadeiro{" "}
            <span className='highlightMe'>Mão Na Massa!!!</span>
          </p>

          <div className='partners-wrapper'>
            <Link href={"/"} className='matriculas'>
              Matriculas Abertas!
            </Link>
          </div>
        </main>
      </div>
      <div className='edu-modules'>
        módulos
        <ul>
          <li>Módulo Introdutório</li>
          <ul>
            <li>Boas-vindas</li>
            <li>Palestra Inicial</li>
            <li>Apresentando-se</li>
            <li>O que Vamos Aprender?</li>
            <li>O que Vamos Fazer?</li>
            <li>Como Ganhar Dinheiro Com Esse Ensinamento?</li>
            <li>Tecnologia, Arte e Filosofia</li>
            <li>Inteligência Artificial</li>
          </ul>
          <li>Módulo 01</li>
          <ul>
            <li>O que é Versionamento</li>
            <li>O que é Git</li>
            <li>O que é GitHub </li>
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
            <li>O que é um repositório git</li>
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
