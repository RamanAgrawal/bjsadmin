import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown, FaChevronUp, FaEllipsisH } from "react-icons/fa";
import Pagination from "../components/Pagination";
import { ContainerWrapper, Header } from "../components/styled";
import { getStatusColors } from "../helper";
import { orders } from "../constants";

//todo

// find api for dummy order data
//tables can be custom reusable component
//edit order status

const Tabs = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.button<TabProps>`
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#3b7dfe" : "#6b7280")};
  border-bottom: ${(props) => (props.active ? "2px solid #3b7dfe" : "none")};
  padding-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #3b7dfe;
  }
`;

const SearchInput = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }

  svg {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
  }
`;

const FilterDropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;

  select {
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: #ffffff;
  border-radius: 0.375rem;
  overflow: hidden;

  th,
  td {
    font-size: 0.8rem;
    font-weight: 500;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
  }

  th {
    background-color: #f9fafb;
    font-weight: 400;
    color: #6b7280;
  }

  td {
    color: #1f2937;
  }

  tbody tr:hover {
    background-color: #f3f4f6;
  }

  .order-items {
    background-color: #f9fafb;
  }
`;

interface StatusProps {
  status: string;
}

const Status = styled.span<StatusProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) => getStatusColors(props.status).background};
  color: ${(props) => getStatusColors(props.status).color};
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  border: none;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  select {
    padding: 0.25rem;
  }
`;

const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.8rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b7dfe;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: #3a6ed4;
  }
`;

const OrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Pending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const [showDate, setShowDate] = useState<boolean>(false);

  const handleDateDropDown = () => {
    setShowDate(!showDate);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setActiveTab("All");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "startDate") setStartDate(value);
    if (name === "endDate") setEndDate(value);
  };

  const filterByDateRange = (orders: any[]) => {
    if (!startDate || !endDate) return orders;
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    return orders.filter((order) => {
      const createdDate = new Date(order.created).getTime();
      return createdDate >= start && createdDate <= end;
    });
  };

  const toggleOrderDetails = (orderId: string) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };

  const filteredOrders = filterByDateRange(
    orders
      .filter((order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((order) => activeTab === "All" || order.status === activeTab)
  );

  return (
    <ContainerWrapper>
      <Header>Order Management</Header>
      <Tabs>
        {[
          "All",
          "Pending",
          "Confirmed",
          "Processing",
          "Picked",
          "Shipped",
          "Delivered",
          "Cancelled",
        ].map((tab) => (
          <Tab
            key={tab}
            active={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <SearchInput>
          <input
            type="text"
            placeholder="Search by order id"
            value={searchTerm}
            onChange={handleInput}
          />
          <FiSearch />
        </SearchInput>
        <FilterDropdown>
        <SearchInput>
          <p onClick={handleDateDropDown}>Filter by date Range</p>  </SearchInput>
          {showDate &&<DateRangeWrapper>
            <DateInput
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleDateChange}
            />
            <DateInput
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleDateChange} 
            />
            <FilterButton onClick={() => setCurrentPage(1)}>
              Apply
            </FilterButton>
          </DateRangeWrapper>}
        </FilterDropdown>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CREATED</th>
            <th>CUSTOMER</th>
            <th>TOTAL</th>
            <th>PROFIT</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <React.Fragment key={order.id}>
              <tr
                style={{
                  backgroundColor: `${
                    expandedOrderId === order.id ? "#f3f4f6" : ""
                  }`,
                }}
              >
                <td>{order.id}</td>
                <td>{order.created}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.profit}{" "}
                  <span
                    style={{ color: "green", backgroundColor: "lightgreen" }}
                  >
                    {order.profitPercentage}
                  </span>
                </td>
                <td>
                  <Status status={order.status}>{order.status}</Status>
                </td>
                <td>
                  <button
                    style={{
                      background: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#8B909A",
                    }}
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrderId === order.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </td>
              </tr>
              {expandedOrderId === order.id && (
                <tr className="order-items">
                  <td colSpan={7} style={{ padding: 0 }}>
                    <Table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>SKU</th>
                          <th>NAME</th>
                          <th>PRICE</th>
                          <th>QTY</th>
                          <th>DISC.</th>
                          <th>TOTAL</th>
                          <th>PRINT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item:any, index: number) => (
                          <tr key={index}>
                            <td></td>
                            <td>{item.sku}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>
                              <span style={{ color: "red" }}>
                                {item.discount}
                              </span>
                            </td>
                            <td>${item.total}</td>
                            <td>
                              <FaEllipsisH />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td
                            style={{ fontWeight: "normal", color: "#8B909A" }}
                          >
                            Subtotal:
                          </td>
                          <td></td>
                          <td>${order.total}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td
                            style={{ fontWeight: "normal", color: "#8B909A" }}
                          >
                            Shipping:
                          </td>
                          <td></td>
                          <td>$5.50</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td
                            style={{ fontWeight: "normal", color: "#8B909A" }}
                          >
                            Discount:
                          </td>
                          <td></td>
                          <td>
                            {" "}
                            <span style={{ color: "red" }}>$0</span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td
                            style={{ fontWeight: "normal", color: "#8B909A" }}
                          >
                            Total:
                          </td>
                          <td></td>
                          <td> ${+order.total+5.5}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <div>
          Showing {itemsPerPage * (currentPage - 1) + 1}-
          {Math.min(itemsPerPage * currentPage, filteredOrders.length)} of{" "}
          {filteredOrders.length}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </ContainerWrapper>
  );
};

export default OrderManagementPage;
