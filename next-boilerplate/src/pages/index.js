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
                  <strong>Aprenda com teoria e prática.</strong>
                  <br />* Matrículas abertas!
                </p>
              </div>
            </div>
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
            Aqui, você não apenas aprenderá a programar, mas também explorará o
            fascinante universo da tecnologia e da programação. Nossos cursos
            são projetados para despertar sua curiosidade e criatividade,
            tornando o aprendizado uma experiência única.
          </p>
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
                  Na Edu4Dev, os melhores programadores irão te ensinar todos os
                  principais segredos da carreira de desenvolvedor web.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Comece A</p>
                  <p className='four-head-button head-2'>Estudar Agora</p>
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
                  O kit educacinal é incrível! Fácil de entender e com passo a
                  passo bem elaborado.
                </p>

                <button className='hero-cta-button one content-cta'>
                  <p className='four-head-button head-1'>Acesse</p>
                  <p className='four-head-button head-2'>Livros de Estudo</p>
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
                  Turmas, mentores, aulas on-line, aulão, palestras, bots
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

                <p className='seven-paragraph'>XXX</p>

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

                <p className='seven-paragraph'>xxx.</p>

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
                  <p className='four-head-button head-1'>Conheça</p>
                  <p className='four-head-button head-2'>Comunidade</p>
                  <p className='four-head-button head-3'>
                    Clique-me <FaPlay className='FaPlay' />
                    <span className='four-head-button head-4'>Vem...</span>
                  </p>
                </button>
              </Link>
            </div>
            <div className='seven-box F'>
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
          <h2>Pronto para Começar?</h2>
          <p>
            Matricule-se agora e inicie sua jornada para se tornar um
            especialista em tecnologia.
          </p>

          <div>
            <h1>Reconhecimentos e Parceiros</h1>
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
