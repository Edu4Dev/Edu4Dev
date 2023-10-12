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
        alignTo: "left",
        bgColor: "#47ff9d",
      }}
    >
      <div className='bg-nav-gray'>
        <div className='hero'>
          <div className='main-hero'>
            <div>
              <Image
                src={"/brandimages/nutkls-img-hero.png"}
                alt={"Edu4Dev"}
                placeholder={"NONE"}
                critical='true'
                width={550}
                height={350}
                style={{ position: "absolute", right: "-110px", top: 0 }}
                className='profile-image'
              />{" "}
              <div className='wrapper-main-hero-left css-typing'>
                <h2 className='hero-heading-h2 type-this'>
                  Universo de Aprendizado
                </h2>
                <h3 className='hero-heading-h3 type-this'>Para Iniciantes</h3>
                <h1 className='hero-heading-h1 type-this'>
                  Curso de Programação
                </h1>
                <p className='hero-heading-p'>
                  Aprenda criando o verdadeiro mão na massa. Crie e hospede seu
                  app ou site GRÁTIS*
                </p>

                {/* <button onClick={handle.enter} className='hero-cta-button one'>
                <p className='four-head-button head-1'>Veja o vídeo</p>
                <p className='four-head-button head-2'>Vídeo Promocional</p>
                <p className='four-head-button head-3'>
                  Clique-me, baby, 1+time <FaPlay className='FaPlay' />
                  <span className='four-head-button head-4'>Play me</span>
                </p>
              </button> */}
              </div>
              <div className='wrapper-main-hero-center'>
                <p>-- Material Didático</p>
                <p>-- Aulas com Mentor</p>
                <p>-- Tecnologia de Ponta</p>
                <p>-- Livro Grátis (PDF)</p>
                <p>-- Certificado Válido</p>
                <p>-- Conquiste Medalhas</p>
              </div>
            </div>
            <div
              className='wrapper-main-hero-right'
              style={{
                position: "absolute",
                right: "0",
                width: "76px",
                bottom: "0",
                overflow: "hidden",
                backgroundColor: "#1f1724",
                height: "100%",
              }}
            >
              <ul className='apps-menu'>
                <li className='apps-menu-item'>
                  <Link href='/' className='call-apps-button apps-buttons-link'>
                    <FaRegLightbulb className='FaWhatsapp' />
                  </Link>
                </li>
                <li className='apps-menu-item'>
                  <Link href='/' className='apps-buttons-link dark'>
                    <GiOctopus className='FaWhatsapp' />
                  </Link>
                </li>

                <li className='apps-menu-item'>
                  <Link href='/' className='call-apps-button apps-buttons-link'>
                    <GiAlliedStar className='FaWhatsapp' />
                  </Link>
                </li>

                <li className='apps-menu-item'>
                  <Link href='/' className='apps-buttons-link dark'>
                    <GiAmericanFootballHelmet className='FaWhatsapp' />
                  </Link>
                </li>

                <li className='apps-menu-item zumba'>
                  <Link href='/' className='call-apps-button apps-buttons-link'>
                    <GiAnarchy className='FaWhatsapp' />
                  </Link>
                </li>

                <li className='apps-menu-item'>
                  <Link href='/' className='apps-buttons-link dark'>
                    <GiArtificialHive className='FaWhatsapp' />
                  </Link>
                </li>
              </ul>
            </div>
            <nav>
              <ul className='nav-menu wrapper-bottom-hero'>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Edu4Dev
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Cursos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Planos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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
          <Image
            src={"/brandimages/logo-ROOM@2x.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={215}
            height={60}
            style={{ objectFit: "cover", margin: "50px 0" }}
            className='profile-image'
          />
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Este é o seu passo inicial para se tornar um Especialista em
                  Tecnologia.
                </p>
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>Nosso kit educacional contém:</p>
                <ul className='seven-list'>
                  <li className='seven-list-item'>Livro do Aluno</li>
                </ul>
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Turmas, mentores, aulas on-line, aulão, palestras, bots
                  especialistas.
                </p>
              </Link>
            </div>
            <div className='seven-box D'>
              <Link href='/'>
                <p>
                  {" "}
                  <q>
                    <small className='small-q'>{"<aluno>"}</small>É mais fácil
                    pq eu aprendo e pratico tudo no mesmo ambiente.
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Este é o seu passo inicial para se tornar um Especialista em
                  Tecnologia.
                </p>
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>Nosso kit educacional contém:</p>
                <ul className='seven-list'>
                  <li className='seven-list-item'>Livro do Aluno</li>
                </ul>
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Turmas, mentores, aulas on-line, aulão, palestras, bots
                  especialistas.
                </p>
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
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className='seven-img'
                />

                <p className='seven-paragraph'>
                  Saia já do zero e monte sua própria agência digital com todos
                  os mais modernos e populares produtos cibernéticos!
                </p>
              </Link>
            </div>
            <div className='seven-box F'>
              <Link href='/'>
                <h3 className='seven-title-green'>
                  Ganhe domínio grátis
                  <br />
                  Receba material didático <br />
                  Hospedagem para o seu app ou site
                  <br />
                  Acesse os nossos app's <br />
                  Biblioteca Virtual <br />
                  Certficado Válido
                  <br />
                  Concorra a Prêmios <br />E muito mais...
                </h3>
              </Link>
            </div>
            <div className='seven-box G'>
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
              </Link>
            </div>
          </div>
          <div>
            <h1>Reconhecimentos e Parceirxs</h1>
            <div className='partners'>
              <h2>UpWork</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>
            </div>
            <div className='partners'>
              <h2>GitHub</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>
            </div>
            <div className='partners'>
              <h2>Descola</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>
            </div>
            <div className='partners'>
              <h2>As Casamenteiras</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>{" "}
            </div>
            <div className='partners'>
              <h2>ADJ - Ass. Diabetes Brasil</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>{" "}
            </div>
            <div className='partners'>
              <h2>Green Hat Web Solutions</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>{" "}
            </div>
            <div className='partners'>
              <h2>Ass Comercial de SP</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>{" "}
            </div>
            <div className='partners'>
              <h2>Green Hat Web Solutions</h2>
              img
              <p>parceiro</p>
              <p>blog da descola fiz</p>
              <p>testemunho</p>{" "}
            </div>
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
