import React from "react";
import Row from "../containers/RowContainer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Image
        src={"/brandimages/edu4dev-logo-charas.png"}
        alt={"Edu4Dev"}
        placeholder={"NONE"}
        critical='true'
        width={400}
        height={264}
        className='m0auto'
      />
      <p>Estamos te esperando, junte-se a nós nessa aventura eletrizante!</p>
      <Link href={"/"} className='matriculas'>
        Matricule-se Já!
      </Link>
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
