import React from "react";
import { Manrope } from "@next/font/google";
import styled from "styled-components";

const manrope = Manrope({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
});

const Copy = styled.p`
  margin-top: 50px;
  text-align: center;
  font-size: 1em;
  color: #ff5e2b;
  span {
    color: #000;
    .creator-link {
      color: #000;
      text-decoration: none;
      margin-right: 4px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Copyright() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <Copy style={manrope.style}>
      <strong>© Copyright Due Personal Studio {currentYear}</strong> <br />
      <span>
        <strong>
          Design by{" "}
          <a
            className="creator-link"
            href="https://www.linkedin.com/in/thaisfogaca/"
          >
            Thaís Fogaça
          </a>
        </strong>
      </span>
      <span>
        <strong>
          | Desenvolvido por{" "}
          <a
            className="creator-link"
            href="https://developer-bacelar.vercel.app/"
          >
            Marco A Bacelar
          </a>
          | Todos os direitos reservados.
        </strong>
      </span>
    </Copy>
  );
}

export default Copyright;
