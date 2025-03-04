import React from "react";
import styled from "styled-components";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
});

const ReviewsDue = styled.div`
  max-width: 1148px;
  margin: 30px auto;
  font-family: "Manrope", sans-serif;
  padding: 0 30px;

  /* Container para os reviews */
  .reviews-container {
    display: grid;
    gap: 30px; /* Espaço entre os reviews */
    grid-template-columns: 1fr 1fr 1fr; /* 3 colunas no desktop */

    @media (max-width: 989px) {
      grid-template-columns: 1fr; /* 1 coluna no mobile */
    }
  }

  .review-item {
    width: 100%;
    box-sizing: border-box;
    padding: 30px;

    /* Layout interno do review */
    .review-header {
      display: flex;
      align-items: center;
      position: relative;

      .review-box-img {
        width: 40px; /* Ajustado para caber na linha */
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .review-img {
          box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 100%;
          object-fit: cover; /* Garante que a imagem preencha o espaço */
        }
      }

      .review-author-name {
        margin-left: 20px;
        font-size: 16px;
        color: #000;
        font-weight: bold;
      }
    }

    .review-information {
      margin-top: 20px;

      .review-stars {
        display: flex;
        align-items: center;
        margin: 20px 0;
        img {
          width: 20px;
          height: 20px;
        }
      }

      .review-comment {
        color: #1b1c31;
        font-size: 16px;
        line-height: 150%;
        text-align: left;
        overflow: hidden;
      }
    }

    /* Responsividade: coluna no mobile */
    @media (max-width: 989px) {
      .review-header {
        flex-direction: column;
        align-items: center;
        text-align: center;

        .review-author-name {
          margin-left: 0;
          margin-top: 15px;
        }
      }

      .review-information {
        text-align: center;
        .review-stars {
          justify-content: center;
        }
        .review-comment {
          text-align: center;
        }
      }
    }
  }
`;

const manualReviews = [
  {
    author_name: "Sandra Fleith",
    profile_photo_url:
      "/images/reviews/review1.png",
    rating: 5,
    text: "Estou um pouco mais de 1 ano fazendo Pilates duas vezes na semana. Pra mim está sendo muito bom. Já melhorei bastante meu condicionamento físico. Lugar excelente com equipamentos ótimos. A professora Eloisa é muito competente e sempre atenta e se necessário corrigindo nossos exercícios! Super recomendo!",
  },
  {
    author_name: "Adriana Acadrolli",
    profile_photo_url:
      "/images/reviews/review2.png",
    rating: 5,
    text: "Comecei na Due em junho 2023 por ser um estúdio onde vc pode fazer seus exercícios com muita tranquilidade e não precisa ficar olhando se a pessoa do seu lado está mais malhada que vc ou se a roupa de fulano é melhor do que de ciclano. Mulheres de todas as idades e os exercícios são feitos sempre respeitando seus limites. Os professores são ótimos.",
  },
  {
    author_name: "Maria Luiza Bazzani",
    profile_photo_url:
      "/images/reviews/review3.png",
    rating: 5,
    text: "Ambiente agradável, acolhedor, equipe capacitada, onde a promessa é de ganhos a longo prazo, com persistência e constância, voltados para a saúde! A Due é ideal para quem cansou de pagar academia e realizar os exercícios sozinho, sem o acompanhamento devido. Em menos de um ano já sinto diferença e evolução na execução dos treinos!",
  },
];

const Reviews: React.FC = () => {
  return (
    <ReviewsDue style={manrope.style}>
      <div className="reviews-container">
        {manualReviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-header">
              <div className="review-box-img">
                <img
                  className="review-img"
                  src={review.profile_photo_url}
                  alt={review.author_name}
                />
              </div>
              <span className="review-author-name">{review.author_name}</span>
            </div>
            <div className="review-information">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <img src="/icon-star.svg" key={i} alt={i.toString()} />
                ))}
              </div>
              <p className="review-comment">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </ReviewsDue>
  );
};

export default Reviews;
