import { Link, NavLink } from "react-router-dom";

import styled, { css } from "styled-components";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { links } from "../constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SidebarContainer = styled.div<{ isCollapsed: boolean }>`
  border: 1px solid #d1d5db;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  overflow: auto;
  padding-bottom: 2.5rem;
  width: ${({ isCollapsed }) => (isCollapsed ? "100px" : "260px")};
  transition: width 0.3s;
  background-color: white;
  @media (min-width: 768px) {
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
`;

const Header = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-left: ${({ isCollapsed }) => (isCollapsed ? "0.5rem" : "1rem")};
`;

const TitleLink = styled(Link)<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b; /* Slate 900 */
  text-decoration: none;
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      gap: 0;
      justify-content: center;
    `}
  &:hover {
    color: #1e293b; /* Slate 900 */
  }
`;

const SectionTitle = styled.p<{ isCollapsed: boolean }>`
  color: #9ca3af; /* Gray 400 */
  margin: 0.75rem;
  font-size: 0.8rem;
  margin-top: 1rem;
  text-transform: uppercase;
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      display: none;
    `}
`;

const NavLinkStyled = styled(NavLink)<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0;
  text-transform: capitalize;
  padding-left: 1rem;
  border-radius: 0.375rem;
  color: #8b909a;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 1rem;
  &:hover {
    background-color: #f3f4f6; /* Light Gray */
    color: #000000; /* Black */
  }
  &.active {
    background-color: #f3f4f6; /* Light Gray */
    color: #000000; /* Black */
  }
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      justify-content: center;
      padding-left: 0;
    `}
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1000;
`;

interface SidePanelProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SidePanel: FC<SidePanelProps> = ({ isCollapsed, setIsCollapsed }) => {
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    });
  });

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <ToggleButton onClick={handleToggleCollapse}>
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </ToggleButton>

      <>
        <Header isCollapsed={isCollapsed}>
          <TitleLink to="/" isCollapsed={isCollapsed}>
            <img src="./logo.png" alt="" />
            {!isCollapsed && <span style={{ fontWeight: "bold" }}>evaly</span>}
          </TitleLink>
        </Header>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <SectionTitle isCollapsed={isCollapsed}>
                {item.title}
              </SectionTitle>
              {item.links.map((link) => (
                <NavLinkStyled
                  to={`/${link.name}`}
                  key={link.name}
                  // onClick={handleCloseSidebar}
                  isCollapsed={isCollapsed}
                >
                  {link.icon}
                  {!isCollapsed && (
                    <span className="capitalize">{link.name}</span>
                  )}
                </NavLinkStyled>
              ))}
            </div>
          ))}
        </div>
      </>
    </SidebarContainer>
  );
};

export default SidePanel;
