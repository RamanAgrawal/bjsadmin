// src/components/Reports.tsx
import React from "react";
import styled from "styled-components";
import ReportsChart from "../charts/ReportsChart";
import { Subtitle, Title } from "../styled";
// import ReportsChart from './ReportsChart';



const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 48%;
  }
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;





const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
interface StatProps {
    active: boolean;
  }
  
const Stat = styled.div<StatProps>`
  text-align: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "4px solid #3b7dfe" : "none")};
  padding-bottom: 10px;
  padding-inline: 10px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: grey;
`;

interface ReportsProps {}

const stat = [
  {
    value: "24k",
    label: "Customers",
  },
  {
    value: "3.5k",
    label: "Total Products",
  },
  {
    value: "2.5k",
    label: "Stock Products",
  },
  {
    value: "0.5k",
    label: "Out of Stock",
  },
  {
    value: "250k",
    label: "Revenue",
  },
];
const Reports: React.FC<ReportsProps> = () => {

  const [activeStat, setActiveStat] = React.useState<string>("Customers");

  return (
    <Container>
      <Header>
        <div>
          <Title>Reports</Title>
          <Subtitle>Last 7 Days</Subtitle>
        </div>
        <div>...</div>
      </Header>
      <Stats>
        {stat.map(({ value, label }) => (
          <Stat key={label} active={activeStat===label} onClick={() => setActiveStat(label)}>
            <StatValue>{value}</StatValue>
            <StatLabel>{label}</StatLabel>
          </Stat>
        ))}
      </Stats>
      <ReportsChart />
    </Container>
  );
};

export default Reports;
