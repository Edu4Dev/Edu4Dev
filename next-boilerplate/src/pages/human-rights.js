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
    <Row opt={{ isBoxed: true, classes: "wrapper-overflow human-rights-page" }}>
      <h1>Causas Que Apoiamos</h1>
      <div className='human-rights-icons-wrapper'>
        <Image
          src={"/brandimages/bandeira-decolonialize.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={75}
          height={75}
          className='m0auto'
        />
        <Image
          src={"/brandimages/bandeira-hacktivismo.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={75}
          height={75}
          className='m0auto'
        />
        <Image
          src={"/brandimages/bandeira-autismo.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={75}
          height={75}
          className='m0auto'
        />
        <Image
          src={"/brandimages/bandeira-lgbtqiap.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={75}
          height={75}
          className='m0auto'
        />
        <Image
          src={"/brandimages/bandeira-vidas-negras.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={75}
          height={75}
          className='m0auto'
        />
      </div>
      <p>
        A <strong className='highlightMe'>Edu4Dev</strong> apoia grupos
        socialmente desprotegidos, por meio principalmente dos seus escritos,
        como visto no livro{" "}
        <strong className='highlightMe'>Eugenia 3.0: As Crianças CTO's</strong>{" "}
        voltado 100% para o empoderamento de minorias oprimidas.
      </p>
      <h2 className='main-content-h2'>Aumentados</h2>
      <Image
        src={"/brandimages/aumentado.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={200}
        height={200}
        className='m0auto'
      />
      <p>
        Na nossa aventura{" "}
        <strong className='highlightMe'>Eugenia 3.0: As Crianças CTO's</strong>{" "}
        o personagem mais forte do universo, ou melhor, de pelo menos três
        universos, não possui as pernas, é autista, tem epilepsia, alzheimer e
        TDAH.
      </p>
      <p>
        Os Aumentados do MultiVerso RÖÖM são todos os que sofrem, estão só,
        marginalizados pela sociedade, estão limitados física, emocional, e/ou
        mentalmente.
      </p>
      <p>
        Acreditamos que nós, que nos enquadramos nesses grupos desfavorecidos,
        temos uma vivência que exige empenho inimaginável, frente aos muitos
        desafios da vida. Por isso, chamar de aumentado é uma forma de expor a
        beleza que está selada dentro de nós.
      </p>

      <h2 className='main-content-h2'>Decolonize Já!</h2>
      <Image
        src={"/brandimages/bandeira-decolonialize.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={175}
        height={175}
        className='m0auto'
      />
      <p>
        Não acreditamos nas estruturas colonialistas em que nosso país sofre.
      </p>
      <p>
        Pretendemos ser um estandarte e um farol para a{" "}
        <strong className='highlightMe'>Decolonialidade</strong> no Brasil.
      </p>
      <h2 className='main-content-h2'>Hacktivismo</h2>
      <Image
        src={"/brandimages/bandeira-hacktivismo.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={175}
        height={175}
        className='m0auto'
      />
      <p>
        A <strong className='highlightMe'>Edu4Dev</strong> pretende ser uma
        startup social que visa o bem comum do Brasileiro. Fazemos isso por meio
        de ensino voluntário, preços acessíveis de nossos produtos e com muito
        investimento em ciência para ensino de tecnologia.
      </p>
      <p>Não só de graça, mas para o públicos desprotegidos e indígenas.</p>

      <h2 className='main-content-h2'>NeuroDivergente/Autismo</h2>
      <Image
        src={"/brandimages/bandeira-autismo.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={175}
        height={175}
        className='m0auto'
      />
      <p>
        Nosso professor{" "}
        <strong className='highlightMe'>Milton Bolonha é autista</strong> e
        busca o empoderamento servil de outros autistas, por meio da sua{" "}
        <strong className='highlightMe'>pedagogia inclusiva</strong>. Somos
        contra todo tipo de eugenia!
      </p>
      <h2 className='main-content-h2'>LGBTQIAP+</h2>
      <Image
        src={"/brandimages/bandeira-lgbtqiap.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={175}
        height={175}
        className='m0auto'
      />
      <p>
        Aqui é um lugar seguro para a comunidade{" "}
        <strong className='highlightMe'>LGBTQIAP+</strong>.
      </p>
      <p>
        {" "}
        Seja o protagonista do primeiro livro {"("}
        <a
          href='https://www.npmjs.com/package/nuktpls-cli'
          target='_blank'
          rel='nofollow'
        >
          <strong className='highlightMe'>hacker-book</strong>
        </a>
        {")"} do mundo, que tem como diferencial o personagem principal
        customizável.
      </p>
      <p>
        Você poderá escolher o nome do personagem principal, também gênero,
        pronome e muito mais.
      </p>

      <h2 className='main-content-h2'>Vidas Negras Importam</h2>
      <Image
        src={"/brandimages/bandeira-vidas-negras.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={175}
        height={175}
        className='m0auto'
      />
      <p>
        Trabalhamos <strong className='highlightMe'>contra o racismo</strong>,
        contra o colorismo e a favor da igualdade étnica/racial, inclusive por
        meio de políticas públicas.
      </p>
    </Row>
    <Footer />
  </MainWrapperContainer>
);

export default HumanRightsPage;
