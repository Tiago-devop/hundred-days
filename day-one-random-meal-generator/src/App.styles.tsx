import styled from "styled-components";

interface CardMealProps {
  isExpanded: boolean;
}



export const CardMeal = styled.div.attrs<CardMealProps>((props) => ({
  isExpanded: props.isExpanded,
}))<CardMealProps>`
  box-shadow: 5px 3px 10px 1px rgba(0, 0, 0, 0.32);
  background-color: ${(props) =>
    props.isExpanded === true  ? "blue" : "#c4c1c1"};
  border: 3px solid black;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  display: flex;
  padding: 10px;
  width: 300px;
  margin: 10px;
`;

export const ImgWrapper = styled.div`
  box-shadow: 0px 0px 0px 7px #fff, 0px 0px 0px 14px #000000;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  max-width: 200px;
  display: flex;
  margin: 20px;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const IngredientWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  display: flex;

  p {
    margin: 0px 0px 5px 0px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  background-color: black;
  border-radius: 20px;
  text-align: center;
  font-weight: 700;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
`;

export const FoodPresentationWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  h3 {
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
