import React from "react";
import Row from "../containers/RowContainer";
import Footer from "../components/Footer";
import Image from "next/image";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const HumanRightsPage = () => (
  <MainWrapperContainer>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.humanRights.slug,
        title: `${mainConfigs.pages.humanRights.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.humanRights.description,
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
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.humanRights.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <div className=''>
      <Row opt={{ isBoxed: true, classes: "wrapper-overflow about-page" }}>
        <div className='hero-txt'>
          <h1>Causas Que Apoiamos</h1>

          <p>
            A <strong className='highlightMe'>Edu4Dev</strong> apoia grupos
            socialmente desprotegidos, por meio principalmente dos seus
            escritos, como visto no livro{" "}
            <strong className='highlightMe'>
              Eugenia 3.0: As Crianças CTO's
            </strong>{" "}
            voltado 100% para o empoderamento de minorias oprimidas.
          </p>

          <h2 className='main-content-h2'>Hacktivismo</h2>
          <Image
            src={"/brandimages/laptop-reading.png"}
            alt={"Maskot Reading"}
            placeholder={"NONE"}
            critical='true'
            className={"mcenter"}
            width={300}
            height={300}
          />
          <p>
            A <strong className='highlightMe'>Edu4Dev</strong> pretende ser uma
            startup social que visa o bem comum do Brasileiro. Fazemos isso por
            meio de ensino voluntário, preços acessíveis de nossos produtos e
            com muito investimento em ciência para ensino de tecnologia.
          </p>
          <p>Não só de graça, mas para o públicos desprotegidos e indígenas.</p>
          <h2 className='main-content-h2'>Aumentados</h2>
          <p>
            Na nossa aventura{" "}
            <strong className='highlightMe'>
              Eugenia 3.0: As Crianças CTO's
            </strong>
            , o personagem mais forte do universo, ou melhor, de pelo menos três
            universos, não possui as pernas, é autista, tem epilepsia, alzheimer
            e TDAH.
          </p>
          <h2 className='main-content-h2'>LGBTQIAP+</h2>
          <p>
            Aqui é um lugar seguro para a comunidade{" "}
            <strong className='highlightMe'>LGBTQIAP+</strong>. Conheça nossos
            diversos personagens e seja o protagonista do primeiro livro
            (hacker-book) do mundo com o personagem principal customizável. Você
            poderá escolher personagem mais forte do universo, ou melhor, de
            pelo menos três universos, não possui as pernas, é autista, tem
            epilepsia, alzheimer e TDAH.
          </p>
        </div>
      </Row>
    </div>
    <Footer />
  </MainWrapperContainer>
);

export default HumanRightsPage;
