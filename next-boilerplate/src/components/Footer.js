import React from "react";
import Row from "../containers/RowContainer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Link href={"/"}>
        <Image
          src={"/brandimages/edu4dev-logo-charas.png"}
          alt={"Edu4Dev"}
          placeholder={"NONE"}
          critical='true'
          width={400}
          height={264}
          className='m0auto mx350'
        />
      </Link>
      <p>Estamos te esperando, junte-se a nós nessa aventura eletrizante!</p>
      <a
        href={"https://wa.me/5512981062959"}
        target='_blank'
        rel='nofollow'
        className='matriculas'
      >
        Matricule-se Já!
      </a>
      <Row
        opt={{
          isBoxed: true,
          classes: "social-icons",
          alignTo: "center",
          rowWidth: "350px",
        }}
      >
        <a href='https://google.com'>
          <Image
            src={"/brandimages/icon-github.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={60}
            height={60}
            className='m0auto'
          />
        </a>
        <a href='https://google.com'>
          <Image
            src={"/brandimages/icon-in.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={60}
            height={60}
            className='m0auto'
          />
        </a>
        <a href='https://google.com'>
          <Image
            src={"/brandimages/icon-insta.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={60}
            height={60}
            className='m0auto'
          />
        </a>
        <a href='https://google.com'>
          <Image
            src={"/brandimages/icon-twitter.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={60}
            height={60}
            className='m0auto'
          />
        </a>
        <a href='https://google.com'>
          <Image
            src={"/brandimages/icon-whats.png"}
            alt={"Edu4Dev"}
            placeholder={"NONE"}
            critical='true'
            width={60}
            height={60}
            className='m0auto'
          />
        </a>
      </Row>
      <p>® Todos os Direitos Reservados, {new Date().getFullYear()}, Edu4Dev</p>
    </footer>
  );
};

export default Footer;
