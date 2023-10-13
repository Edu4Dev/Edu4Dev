import React from "react";
import Row from "../containers/RowContainer";
import Link from "next/link";
import Image from "next/image";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";
import { FaPlay, FaRegLightbulb } from "react-icons/fa";
import {
  GiOctopus,
  GiAlliedStar,
  GiAmericanFootballHelmet,
  GiAnarchy,
  GiArtificialHive,
} from "react-icons/gi";

const Home = ({ posts }) => (
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
        isBoxed: true,
        classes: "wrapper-overflow hero-cta",
        bgColor: "#47ff9d",
      }}
    >
      <Image
        src={"/brandimages/nutkls-img-hero.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={550}
        height={350}
        style={{ position: "absolute", right: "-110px", top: "-75px" }}
        className='profile-image'
      />{" "}
      <div className='wrapper-main-hero-left css-typing'>
        <h2 className='hero-heading-h2 type-this'>Universo de Aprendizado</h2>
        <h3 className='hero-heading-h3 type-this'>Para Iniciantes</h3>
        <h1 className='hero-heading-h1 type-this'>Curso de Programação</h1>
        <p className='hero-heading-p'>
          <strong>Aprenda com teoria e prática.</strong>
          <br />* Matrículas abertas!
        </p>
      </div>
    </Row>
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
          <p className='main-content-p'>
            Impulsione já o seu aprendizado em tecnologia.
            <br />
            <span className='highlightMe'>Faça 1 década em 1 mês</span>, com a
            escola de programação mais especializada do Brasil!
            <br />
            Nossos cursos são projetados para despertar sua criatividade e
            empreendedorismo.
            <br />
            Com a <span className='highlightMe'>Edu4Dev</span> o seu aprendizado
            se torna uma{" "}
            <span className='highlightMe'>experiência incrível</span>.
          </p>
          <Link href={"/"} className='matriculas'>
            Matriculas Abertas!
          </Link>
          <div className='wrapper-seven-box'>
            <div className='seven-box A'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Aprenda</h3>
                <h2 className='seven-title'>Programação</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Na Edu4Dev, os melhores programadores irão te ensinar os
                  principais segredos da carreira de desenvolvedor web.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Comece A</p>
                  <p className='four-head-button head-2'>Programar</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box B'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Receba</h3>
                <h2 className='seven-title'>Material Didático</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  O kit educacinal é incrível! Fácil de entender e com um passo
                  a passo ideal para você.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Acesse</p>
                  <p className='four-head-button head-2'>Livros</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box C'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Estude</h3>
                <h2 className='seven-title'>Chat e Salas</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Turmas, mentores, aulas on-line, aulão, palestras,
                  especialistas.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Conheça</p>
                  <p className='four-head-button head-2'>Comunidade</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box D prevent-hover'>
              <Link href='/'>
                <p>
                  {" "}
                  <q>
                    <small className='small-q'>{"<aluno>"}</small>É incrível,
                    tem dia de programar, outro é para criar jogos e até temos
                    tempo para leitura em grupo.
                    <br />
                    Eu amo a Edu4Dev{" "}
                    <span className={"color-me-span"}>#devComOrgulho</span>
                    <small className='small-q'>{"</aluno>"}</small>
                  </q>
                </p>
              </Link>
            </div>
            <div className='seven-box A'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Segredos do</h3>
                <h2 className='seven-title'>MetaVerso</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Este é o seu passo inicial para se tornar um Especialista em
                  Tecnologia.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Construa</p>
                  <p className='four-head-button head-2'>MetaVersos</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box B'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Construa</h3>
                <h2 className='seven-title'>I.A.</h2>

                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Aprenda a construir facilmente a sua própria Inteligência
                  Artificial e divirta-se!
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Inovador</p>
                  <p className='four-head-button head-2'>Disruptivo</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box C'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Músicas e</h3>
                <h2 className='seven-title'>Literatura</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Ganhe um eletrizante livro e um álbum de música instrumental
                  para estudo para quem tem TDAH.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Relaxe</p>
                  <p className='four-head-button head-2'>Divirta-se</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box E'>
              <Link href='/'>
                <h3 className='seven-subtitle'>Ganhe</h3>
                <h2 className='seven-title'>Produtos virtuais</h2>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Saia já do zero e monte sua própria agência digital com todos
                  os mais modernos e populares produtos cibernéticos!
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Trabalhe</p>
                  <p className='four-head-button head-2'>Empreender</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box F prevent-hover'>
              <Link href='/'>
                <h3 className='seven-title-green'>
                  Repositório GitHub
                  <br />
                  Vitrine Virtual
                  <br />
                  Crie seu Hacker-book
                  <br />
                  Aprenda a Ganhar em Dólar
                  <br />
                  Certficado Válido
                  <br />
                  Concorra a Prêmios
                  <br />E muito mais...
                </h3>
              </Link>
            </div>
            <div className='seven-box G prevent-hover'>
              <Link href='/' className='seven-title-link'>
                <h4 className='seven-title-now align-center'>Comece Já!!!</h4>
                <div className='why-triangles'>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                  <div className='cool-arrow'></div>
                </div>
                <p>
                  <span>▶</span> Play
                </p>
              </Link>
            </div>
          </div>
          <h2 className='main-content-h2'>Reconhecimentos e Parceiros</h2>
          <p className='main-content-p'>
            A edu4Dev é uma iniciativa do mentor de tecnologia Milton Bolonha.
            <br />
            Programador desde 1998, filantropo desde 2007 e programador "Top
            Rated" pela UpWork desde 2019.
          </p>
          <p>
            Veja abaixo alguns reconhecimentos, entidades e parceiros que se
            beneficiam da nossa tecnologia, ou estão juntos conosco em nosso
            MetaVerso.
          </p>

          <div className='partners-wrapper'>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>UpWork</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>mercado internacional</p>
                <p>top rated</p>
                <p>+ 2k horas</p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>GitHub</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Descola</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>As Casamenteiras</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>{" "}
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>ADJ - Ass. Diabetes Brasil</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>{" "}
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Green Hat Web Solutions</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>{" "}
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Ass Comercial de SP</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>{" "}
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Green Hat Web Solutions</h3>
                <Image
                  src={"/brandimages/tela-room1-tiny.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>parceiro</p>
                <p>blog da descola fiz</p>
                <p>testemunho</p>{" "}
              </div>
            </div>
            <p className='main-content-p'>
              Matricule-se agora e inicie sua jornada <br />
              para se tornar um especialista em tecnologia.
            </p>
            <Link href={"/"} className='matriculas'>
              Matriculas Abertas!
            </Link>
          </div>
        </main>
      </div>
    </Row>
    <footer>
      <div className='social-icons'>
        <a href='https://google.com'>
          Face
          {/* <Img
              fixed={instagram.childImageSharp.fixed}
              width={instagram.childImageSharp.fixed.width}
              height={instagram.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
        </a>
        <a href='https://google.com'>
          Face
          {/* <Img
              fixed={facebook.childImageSharp.fixed}
              width={facebook.childImageSharp.fixed.width}
              height={facebook.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
        </a>
        <a href='https://google.com'>
          Face
          {/* <Img
              fixed={linkedin.childImageSharp.fixed}
              width={linkedin.childImageSharp.fixed.width}
              height={linkedin.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
        </a>
        <a href='https://google.com'>
          Face
          {/* <Img
              fixed={pinterest.childImageSharp.fixed}
              width={pinterest.childImageSharp.fixed.width}
              height={pinterest.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
        </a>
      </div>
      <div className='main-footer'>
        {/* <div className="footer-columns">
						<a href="https://google.com" className="footer-subscribe">
							<strong>Torne-se um Membro</strong>
						</a>
					</div> */}
        <div className='footer-columns'>
          <ul className='footer-menu'>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Info
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Contato
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                FAQ
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Link Item
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Link Item
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Link Item
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Link Item
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-columns'>
          <ul className='footer-menu'>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Sobre
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Nossa História
              </a>
            </li>
            <li className='footer-links'>
              <a href='/wiki/alesp' className='footer-link'>
                Link
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Facebook
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Pinterest
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                Instagram
              </a>
            </li>
            <li className='footer-links'>
              <a href='https://google.com' className='footer-link'>
                © {new Date().getFullYear()}, Edu4Dev mudar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    {/*     
    <h2>Início: Sumário</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <ul>
            <li>Ação de Posicionamento de Marketing </li>
            <li>Organização de Dados Estruturados</li>
            <li>Gerenciamento de Comunidades</li>
            <li>Aquisição de Tecnologia de Ponta</li>
            <li>Modelagem de Inteligência Artificial</li>
            <li>Obtenção de Resultados</li>
          </ul>
        </div>
      </Row>
    </div>
    <h2>Lista: DEVaneios</h2>
    <div className='wrapper-box'>
      <div className='post'>
        <BlogList posts={posts} />
      </div>
    </div> */}
  </MainWrapperContainer>
);
export default Home;
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
