import React from "react";
import styled from "styled-components";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Chart from "../charts/BarChart";
import { NumValue, Title } from "../styled";
import { salesData } from "../../constants";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h4`
  margin: 1rem 0;
  font-size: 1rem;
  color: #888;
`;

const SalesTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.25rem;
`;

const SalesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Flag = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CountryName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  min-width: 100px;
`;

const SalesBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.25rem;
  position: relative;
  width: 100%;
`;

const SalesBarFill = styled.div<{ width: number }>`
  background-color: #3498db;
  height: 8px;
  width: ${(props) => props.width}%;
`;

const SalesPercentage = styled.div<{ positive: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${(props) => (props.positive ? "green" : "red")};
  margin-left: 0.5rem;
`;

const Users: React.FC = () => {
  const maxUsers = Math.max(...salesData.map((country) => country.users));

  return (
    <Container>
      <TitleWrapper>
        <Title>Users in last 30 minutes</Title>
        <NumValue>16.5K</NumValue>
        <ChartTitle>Users per minute</ChartTitle>
      </TitleWrapper>
      <div style={{ height: "100px", marginBottom: "1rem" }}>
        <Chart />
      </div>
      <SalesTitle>Sales by Country</SalesTitle>
      {salesData.map((country, index) => (
        <SalesItem key={index}>
          <Flag>{country.flag}</Flag>
            <CountryName>{country.country}</CountryName>
          <CountryInfo>
            <SalesBar>
              <SalesBarFill width={(country.users / maxUsers) * 100} />
            </SalesBar>
          </CountryInfo>
          <SalesPercentage positive={country.positive}>
            {country.positive ? <FaArrowUp /> : <FaArrowDown />}{" "}
            {Math.abs(country.sales)}%
          </SalesPercentage>
        </SalesItem>
      ))}
    </Container>
  );
};

export default Users;
