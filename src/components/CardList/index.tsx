import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "next/image";
import { Manrope } from "@next/font/google";
import { useHref } from "@/utils/util";

const manrope = Manrope({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
});

const CardListDue = styled.div`
  max-width: 1148px;
  margin: 40px auto 32px;
  .third-section-cards-list-due-studio {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    font-family: "Manrope", sans-serif;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .third-section-cards-item-due-studio {
      background-color: #fff;
      border-radius: 20px;
      padding: 40px;
      position: relative;
      width: 100%;
      max-width: 275px;
      margin-top: 20px;
      @media (max-width: 768px) {
        text-align: center;
        order: 2;
      }
      img {
        margin-bottom: 15px;
      }
      h4 {
        color: #16012c;
        font-weight: bold;
        font-size: 1.5em;
      }
      p {
        color: #64607d;
        font-size: 1em;
        margin: 25px 0;
        line-height: 175%;
      }
      a {
        position: absolute;
        bottom: 25px;
        color: #ff5e2b;
        font-size: 1em;
        font-weight: 600;
        left: 50%;
        transform: translateX(-50%);
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        b {
          color: #ff5e2b;
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
      &.exclusive {
        border: 1px solid #ff5e2b;
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        position: relative;
        @media (max-width: 768px) {
          margin: 30px 0;
          order: 1;
        }
        span {
          position: absolute;
          background-color: #ff5e2b;
          color: #fff;
          font-size: 0.75em;
          top: -10px;
          padding: 5px 10px;
          border-radius: 5px;
          letter-spacing: 1.2px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
        }
      }
    }
  }
`;

const Card = (props: any) => {
  const href = useHref();

  return (
    <li
      className={`third-section-cards-item-due-studio${
        props.isExclusive ? " exclusive" : ""
      }`}
    >
      {props.isExclusive && (
        <span className="exclusive-label" style={manrope.style}>
          MÉTODO EXCLUSIVO
        </span>
      )}
      <Image
        src={props.icon}
        alt={`Ícone ${props.title}`}
        width={props.iconWidth}
        height={props.iconHeight}
        title={`Ícone ${props.title}`}
      />
      <h4 style={manrope.style}>{props.title}</h4>
      <p style={manrope.style}>{props.description}</p>
      <a style={manrope.style} id={props.btnId} href={href}>
        {props.linkText}
        <b>&#8594;</b>
      </a>
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconWidth: PropTypes.number.isRequired,
  iconHeight: PropTypes.number.isRequired,
  linkText: PropTypes.string.isRequired,
  isExclusive: PropTypes.bool,
  btnId: PropTypes.string.isRequired,
};

Card.defaultProps = {
  isExclusive: false,
};

const CardsList = () => (
  <CardListDue>
    <ul className="third-section-cards-list-due-studio">
      <Card
        title="Método DUE"
        description="Um treino completo que combina Pilates e Treinamento Funcional, integrando o melhor de cada prática para otimizar seu tempo e acelerar seu desenvolvimento."
        icon="/D-icon.svg"
        linkText="Agende agora"
        iconWidth={48}
        iconHeight={64}
        isExclusive
        btnId="btn-agende-agora-card-metodo-due"
      />
      <Card
        title="Pilates"
        description="Benefícios para todas as idades! Torne-se mais forte, flexível e consciente do seu corpo, reduzindo dores e melhorando sua qualidade de vida."
        icon="/icon-pilates.svg"
        linkText="Agende agora"
        iconWidth={48}
        iconHeight={64}
        btnId="btn-agende-agora-card-pilates"
      />
      <Card
        title="Treino Funcional"
        description="Melhore sua força, equilíbrio, e condicionamento físico com os treinos dinâmicos e desafiadores, sempre adaptados às suas necessidades e objetivos."
        icon="/icon-metododue.svg"
        linkText="Agende agora"
        iconWidth={66}
        iconHeight={64}
        btnId="btn-agende-agora-card-treino-funcional"
      />
      <Card
        title="Musculação"
        description="Fortaleça seu corpo, ganhe resistência com treinos personalizados que garantem evolução segura e eficiente a cada treino."
        icon="/icon-funcional.svg"
        linkText="Agende agora"
        iconWidth={76}
        iconHeight={64}
        btnId="btn-agende-agora-card-musculacao"
      />
    </ul>
  </CardListDue>
);

export default CardsList;
