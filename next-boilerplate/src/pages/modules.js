import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";
import Footer from "../components/Footer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Contato = () => (
  <MainWrapperContainer>
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
        isBoxed: true,
        classes: "wrapper-overflow modules-page human-rights-page",
      }}
    >
      <main className='main-content'>
        <br />
        <p className='main-content-p'>
          Quer saber mais do que vai ser ensinado na{" "}
          <span className='highlightMe'>Edu4Dev</span>? <br />
          Veja abaixo os primeiros módulos e conteúdo das aulas.
        </p>
        <div className='partners-wrapper'>
          <a
            href={`https://wa.me/5516991997935?text=${mainConfigs.business.whatsSellMsg}`}
            target='_blank'
            rel='nofollow'
            className='matriculas'
          >
            Matriculas Abertas!
          </a>
        </div>
      </main>
      <div className='edu-modules'>
        <h2 className='main-content-h2'>Curso de Programação Edu4Dev</h2>
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
          Sejam bem-vindx's ao{" "}
          <span className='highlightMe'>Brasil beta 2-0.X.X</span>
        </p>
        <h1>Curso de Programação para Iniciantes</h1>
        <h2 className='highlightMe h2pam-me'>Do Zero Ao Avançado no GitHub</h2>
        <ul>
          <li>Módulo 01 - O Que é Versionamento?</li>
          <li>Módulo 02 - Construindo o Metaverso</li>
          <li>Módulo 03 - Código Aberto & Padrões da Comunidade</li>
          <li>Módulo 04 - O MultiVerso RÖÖM</li>
          <li>Módulo 05 - Modelo GitHub Para WebSítios</li>
          <li>Módulo bônus: Testando Um Website</li>
        </ul>
      </div>
    </Row>

    <Footer />
  </MainWrapperContainer>
);
export default Contato;
