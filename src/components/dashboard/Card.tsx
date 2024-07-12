import React, { ReactNode } from "react";
import styled from "styled-components";
import { NumValue } from "../styled";

const Container = styled.div`
  background: white;
  display: flex;
  // max-width: 450px;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 150px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  position: absolute;
`;

const Subtitle = styled.p`
  padding-top: 40px;
  margin-bottom: 10px;
  color: grey;
`;

const ValueContainer = styled.div`
  // margin-bottom: 10px;
`;

const Change = styled.div`
  color: #8b909a;
`;

interface CardProps {
  title: string;
  subtitle: string;
  value: string;
  change: ReactNode;
  chart: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  value,
  change,
  chart,
}) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>
        <ValueContainer>
          <NumValue>{value}</NumValue>
          <Change>{change} vs last 7 day</Change>
        </ValueContainer>
      </div>
      {chart}
    </Container>
  );
};

export default Card;
