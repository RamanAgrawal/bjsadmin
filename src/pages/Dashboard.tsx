// src/components/Dashboard.tsx
import React from "react";
import styled from "styled-components";
import Card from "../components/dashboard/Card";
import { ContainerWrapper, Header } from "../components/styled";
import Reports from "../components/dashboard/Report";
import Chart from "../components/charts/LineChart";
import Users from "../components/dashboard/Users";

import { linedata } from "../constants";
import Line from "../components/charts/LineChart2";

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
`;

const CardContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Dashboard: React.FC = () => {
  return (
    <ContainerWrapper>
      <Header>Dashboard</Header>
      <Container>
        <CardContainer width="45%">
          <Card
            title="Total Sales & Costs"
            subtitle="Last 7 days"
            value={"$350k"}
            change={<span style={{ color: "green" }}>↑ 8.5%</span>}
            // chart={<Chart color="green" />}
            chart={
              <div style={{ width: "70%", height: "130px", padding: "0" }}>
                <Line data={linedata} />
              </div>
            }
          />
        </CardContainer>
        <CardContainer width="49%">
          <Card
            title="Sessions"
            subtitle="Last 7 days"
            value={"$16.5K"}
            change={<span style={{ color: "red" }}>↓ 8.56% </span>}
            chart={<Chart color="red" />}
          />
        </CardContainer>
        <CardContainer width="30%">
          {" "}
          <Card
            title="Total Orders"
            subtitle="Last 7 days"
            value={"$25.7K"}
            change={<span style={{ color: "#1EB564" }}>↑ 9%</span>}
            chart={<Chart color="red" />}
          />
        </CardContainer>
        <CardContainer width="30%">
          <Card
            title="Total Profit"
            subtitle="Last 7 days"
            value={"$12.7K"}
            change={<span style={{ color: "#1EB564" }}>↑ 12%</span>}
            chart={<Chart color="red" />}
          />
        </CardContainer>

        <CardContainer width="30%">
          <Card
            title="Discounted Amount"
            subtitle="Last 7 days"
            value={"$12K"}
            change={<span style={{ color: "#1EB564" }}>↑ 2%</span>}
            chart={<Chart color="green" />}
          />
        </CardContainer>
      </Container>
      <div style={{ display: "flex",flexWrap:"wrap", gap:"10px",justifyContent:"space-between",padding:"20px" }}>
        <Reports />
        <Users />
      </div>
    </ContainerWrapper>
  );
};

export default Dashboard;
