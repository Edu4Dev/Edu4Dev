import React from "react";
import Row from "../containers/RowContainer";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/api";
import Footer from "../components/Footer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const Home = ({ posts }) => {
  return (
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

      <div className='wrapper-overflow main-content'>
        <main>
          <Image
            src={"/brandimages/edu4dev-logo-charas.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={400}
            height={264}
            className='m0auto index-img'
          />
          <p className='main-content-p'>
            Somos a <strong className='highlightMe'>Edu4Dev</strong>, a Escola
            de Programação que <br />
            ensina <strong className='highlightMe'>teoria disruptiva</strong>,
            com <strong className='highlightMe'>tecnologia própria</strong>
            <br />e possui a maior experiência de mercado (desde 1998 e Top
            Rated UpWork).
            <br />
            Tudo para te ensinar o verdadeiro{" "}
            <strong className='highlightMe'>Mão Na Massa!!!</strong>
          </p>
          <a
            href={"https://www.youtube.com/watch?v=FNJuXWO2kHk"}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={"/brandimages/play.png"}
              alt={"Maskot Reading"}
              placeholder={"NONE"}
              critical='true'
              className={"mcenter cpoint hero-cta-button one content-cta"}
              width={300}
              height={300}
            />
          </a>
          <button
            onClick={() =>
              typeof window !== "undefined"
                ? window.open(
                    "https://www.youtube.com/watch?v=FNJuXWO2kHk",
                    "_blank"
                  )
                : null
            }
            className='hero-cta-button one video-cta'
          >
            <p className='four-head-button head-1'>Assista</p>
            <p className='four-head-button head-2'>Vídeo PROMO</p>
            <p className='four-head-button head-3'>
              Clique <FaPlay className='FaPlay' />
              <span className='four-head-button head-4'>Play</span>
            </p>
          </button>
          <h2 className='main-content-h2'>Educação À Distância</h2>
          <Image
            src={"/brandimages/learning.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={480}
            height={275}
            className='m0auto index-img'
          />
          <p className='main-content-p'>
            Mentorias on-line, aulas em grupo, consultorias avulsas, tudo no
            conforto de casa.
            <br />
            Com a <strong className='highlightMe'>Edu4Dev</strong> o seu
            aprendizado se torna uma{" "}
            <strong className='highlightMe'>experiência incrível</strong>.
          </p>
          <p className='main-content-p'>
            <strong className='highlightMe'>Faça 1 década em 1 mês</strong>, com
            a escola de programação mais especializada do Brasil!
            <br />
            Nossos cursos são projetados para despertar a criatividade e o
            empreendedorismo.
          </p>
          <Link href={"/"} className='matriculas'>
            Matriculas Abertas!
          </Link>
          <h2 className='main-content-h2'>O Que Você Vai Descobrir?</h2>
          <Image
            src={"/brandimages/laptop-reading.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={480}
            height={275}
            className='m0auto index-img'
          />
          <p className='main-content-p'>
            Conheça o <strong className='highlightMe'>MultiVerso RÖÖM</strong>,
            um mundo tecnológico impressionante, onde você vai aprender a
            programar com os mentores mais incríveis.
          </p>
          <p className='main-content-p'>
            E de <strong className='highlightMe'>brinde</strong> você vai
            acessar uma aventura em livro eletrizante, um álbum musical
            empolgante, material didático, inteligência artificial, hacker-book,
            e muito mais.
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
          <h2 className='main-content-h2'>Reconhecimentos e Parcerias</h2>
          <Image
            src={"/brandimages/qualidade.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={480}
            height={275}
            className='m0auto index-img'
          />
          <p className='main-content-p'>
            A <strong className='highlightMe'>Edu4Dev</strong> é uma iniciativa
            do mentor de tecnologia{" "}
            <strong className='highlightMe'>Milton Bolonha</strong>.
            <br />
            Programador desde <strong className='highlightMe'>1998</strong>,
            filantropo desde <strong className='highlightMe'>2007</strong> e
            programador "Top Rated" pela{" "}
            <strong className='highlightMe'>UpWork</strong> desde 2019.
          </p>
          <p>
            Abaixo reconhecimentos, entidades e parcerias que estão conosco em
            nosso MetaVerso.
          </p>
          <div className='partners-wrapper'>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Francisco, CA, EUA</h3>
                <Image
                  src={"/brandimages/upwork-logo.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={75}
                  className='seven-img'
                />
                <p>
                  Nossos mentores atuam no mercado competitivo em cenário
                  internacional, desde 2018, destacando-se na{" "}
                  <strong className='highlightMe'>UpWork</strong> como{" "}
                  <strong className='highlightMe'>TOP RATED</strong>{" "}
                  (autoridades na programação web).
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Francisco, CA, EUA</h3>
                <Image
                  src={"/brandimages/github-logo.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Fazemos parte do
                  <br />
                  <strong className='highlightMe'>
                    GitHub Developer Program
                  </strong>
                  ,
                  <br />
                  isso quer dizer que vamos te dar todo o suporte{" "}
                  <strong className='highlightMe'>GitHub</strong> que você
                  precisa.
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Paulo - SP</h3>
                <Image
                  src={"/brandimages/hapvida-logo.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Por meio do programa 100 Open Startup, fomos contratados pela{" "}
                  <strong className='highlightMe'>HapVida</strong> para
                  consultoria on-line em tecnologia.
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Paulo - SP</h3>
                <Image
                  src={"/brandimages/100-open-startups.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Estamos no ranking <br />
                  <strong className='highlightMe'>
                    100 Open Startup
                  </strong>, <br />
                  isso significa que já fechamos negócio com grandes players do
                  mercado.
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Paulo - SP</h3>
                <Image
                  src={"/brandimages/acboost.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Avaliados pela ACBOOST 22, da{" "}
                  <strong className='highlightMe'>
                    Associação Comercial de São Paulo
                  </strong>
                  , a <strong className='highlightMe'>Edu4Dev</strong> se
                  destacou com um produto acima da média do programa.
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Denver, CO, USA</h3>
                <Image
                  src={"/brandimages/green-hat-logo.jpeg"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Nossos especialistas trabalharam por mais de 2 anos na agência
                  web internacional{" "}
                  <strong className='highlightMe'>
                    Green Hat Web Solution
                  </strong>
                  .
                </p>
                <p>
                  "Milton é um grande designer e desenvolvedor. Ele é
                  extremamente talentoso. Eu recomendo Milton."
                  <br />
                  <br />
                  <strong className='highlightMe'>
                    - Ryan Masterson, <br />
                    CEO da Green Hat
                  </strong>
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>São Paulo - SP</h3>
                <Image
                  src={"/brandimages/descola-logo.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={75}
                  className='seven-img'
                />
                <p>
                  A Descola é uma startup inovadora na área de cursos e tem como
                  principal parceiro o Cubo Itaú. Eles usam no blog deles,
                  tecnologia criada pela{" "}
                  <strong className='highlightMe'>Edu4Dev</strong>, a mesma
                  usada no curso.
                </p>
              </div>
            </div>
            <div className='partners'>
              <div className='inner-partners'>
                <h3>Ribeirão Preto - SP</h3>
                <Image
                  src={"/brandimages/as-casamenteiras-logo.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Tecnologia do curso alavancando vendas: "Hoje faço muito mais
                  casamentos, graças as vendas da minha empresa que funcionam
                  com tecnologia de ponta a ponta." <br />
                  <br />
                  <strong className='highlightMe'>
                    Priscilla Barbosa, <br />
                    CEO As Casamenteiras
                  </strong>
                </p>
              </div>
            </div>

            <div className='partners'>
              <div className='inner-partners'>
                <h3>Paraíba</h3>
                <Image
                  src={"/brandimages/lds.png"}
                  alt={"Edu4Dev"}
                  placeholder={"NONE"}
                  critical='true'
                  width={280}
                  height={160}
                  className='seven-img'
                />
                <p>
                  Serviço filantrópico/voluntário realizado na Paraíba nos anos
                  de 2007 a 2009.
                </p>
              </div>
            </div>
            <p className='main-content-p mboost'>
              Matricule-se agora e inicie sua jornada <br />
              para se tornar um especialista em tecnologia.
            </p>
            <Link href={"/"} className='matriculas'>
              Matricule-se Já!
            </Link>
          </div>
          <h2 className='main-content-h2'>Conheça os nossos módulos</h2>
          <Image
            src={"/brandimages/origami.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={300}
            height={300}
            className='m0auto index-img'
          />
          <p>Vamos dar uma espiada nas aulas e nos módulos de estudo?</p>
          <Link href={"/modules"} className='matriculas yellow'>
            Conheça Já o Conteúdo do Curso
          </Link>
        </main>
      </div>
      <Footer />
    </MainWrapperContainer>
  );
};
export default Home;
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
