import React from "react";
import Row from "../containers/RowContainer";
import Footer from "../components/Footer";
import Image from "next/image";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const AboutPage = () => (
  <MainWrapperContainer>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.about.slug,
        title: `${mainConfigs.pages.about.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.about.description,
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
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.about.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <div className=''>
      <Row opt={{ isBoxed: true, classes: "wrapper-overflow about-page" }}>
        <div className='hero-txt'>
          <h1>Milton Bolonha</h1>
          <h2>Especialista em Tecnologia e Marketing</h2>
          <p>Milton Bolonha desenvolve sites desde 1998.</p>
          <p>
            Como especialista faz a curadoria e implementação sustentável de
            códigos e de tecnologias.
          </p>
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
            Atua como gerente de tecnologia com proeficiência no governo de
            dados e a otimização do alcance publicitário.
          </p>
          <p>
            Direciona investimentos e toma decisões estratégicas em marketing,
            publicidade e branding, que trarão resultados para a empresa em
            médio e longo prazo.
          </p>
          <h2 className='main-content-h2'>Biografia Profissional</h2>
          <p>
            "Meu primeiro site fiz aos 11 anos em 1998, era sobre um vilão de
            desenho animado. Quando comecei não existia absoutamente nenhum
            curso, quase nenhuma informação na internet sobre como programar, a
            não ser em livros! Hoje aos 36 anos, tenho uma lista grande de
            tecnologias que aprendi ao longo da minha carreira. Veja abaixo:
          </p>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Github Actions</li>
            <li>Github Template</li>
            <li>Github Pages</li>
            <li>Javascript</li>
            <li>Wordpress</li>
            <li>Seo</li>
            <li>Php</li>
            <li>Html</li>
            <li>Http</li>
            <li>Ajax</li>
            <li>Markdown</li>
            <li>Graphql</li>
            <li>Gulp</li>
            <li>Nodejs</li>
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Json</li>
            <li>Sass</li>
            <li>Scss</li>
            <li>Css</li>
            <li>Yaml</li>
            <li>Handlebars</li>
            <li>Restful</li>
            <li>Api</li>
            <li>Scrum</li>
            <li>Design Pattern</li>
            <li>Docker</li>
            <li>Dockerfile</li>
            <li>Mysql</li>
            <li>Apache</li>
            <li>Google Cloud</li>
            <li>Linux Terminal</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Serverless</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Copywriting</li>
          </ul>
          <p>
            Atua profissionalmente na área de marketing desde os seus 18 anos,
            tendo começado a fazer sites, aplicativos, sistemas e design no ano
            de 2006. Atua como engenheiro de software, desenvolvedor de jogos,
            aplicativos e web sítios.
          </p>
          <p>
            Atualmente Milton possui perfil público em renomada instituição
            internacional (UpWork) que possui os melhores desenvolvedores de
            tecnologia do mundo, tendo destaque como “Top Rated”, sendo um dos
            profissionais mais bem avaliados pelos seus clientes em métricas de
            qualidade nas entregas dos seus serviços.
          </p>
          <h2 className='main-content-h2'>Voluntariado</h2>

          <Image
            src={"/brandimages/abraco.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={280}
            height={280}
            className='seven-img'
          />
          <p>
            Como professor começou a lecionar de forma voluntária em 2006, Desde
            2018 ensina programação e tecnologia. Possui a iniciativa social
            Edu4Dev – Escola Social de Programação, onde busca de forma
            disruptiva a ensinar programação para jovens de periferia e pessoas
            com dificuldades de aprender a programar.
          </p>
          <h2 className='main-content-h2'>Biografia Pessoal</h2>
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
            Morou na Dom Luiz no Castelo Branco em Ribeirão Preto, jogou futebol
            no SESI com o treinador Esquerda, atuou como camisa 10 do Botafogo
            Futebol Clube no pré-mirim do clube e teve o seu primeiro emprego na
            Unimed PA 24 horas como auxiliar administrativo.
          </p>
          <p>
            Neto de Milton Bolonha e pai de Milton S. Bolonha, o vocalista,
            poeta, filósofo e filantropo Milton “Kiko” Bolonha Neto auto
            publicou o seu livro de estreia bestseller pela Amazon em sua
            categoria principal (Mormonismo, Filosofia e Religião) sob o título
            “Inteligências e Ordens: Descubra Quem É Você”. É também o autor
            brasileiro mais lido da categoria.
          </p>
          <h2 className='main-content-h2'>Música e Livros</h2>

          <Image
            src={"/brandimages/musica.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={280}
            height={280}
            className='seven-img'
          />

          <p>
            Aos 11 anos de idade Milton Bolonha se descobriu poeta, aos 34 em
            janeiro de 2022 o autor publicou o primeiro livro da série que
            apresenta o multiverso RÖÖM, sob o nome de Eugenia 3.0: As Crianças
            CTO’s. Passou a ser bestseller pelo Kindle da Amazon logo nas
            primeiras semanas de lançamento nas categorias livros de Ficção
            Científica de Cyberpunks e Ficção Científica para Jovens e
            Adolescentes.
          </p>
          <p>
            Compôs, produziu e distribuiu o seu primeiro álbum instrumental As
            Crianças CTO’s. O também músico possui o total de 02 (dois) EP’s e
            04 (quatro) singles e 01 (um) álbum que já foram ouvidos centenas de
            vezes em diversos países.
          </p>
        </div>
      </Row>
    </div>
    <Footer />
  </MainWrapperContainer>
);

export default AboutPage;
