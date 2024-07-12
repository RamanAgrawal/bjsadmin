import React from "react";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;

const NavButtonsContainer = styled.div`
  display: flex;
`;

const NavButtonStyled = styled.button<{ dotcolor?: string }>`
  font-size: 1.25rem;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem;

  background-color: transparent;
  position: relative;
  &:hover {
    background-color: #f3f4f6; /* Light Gray */
  }
  span {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.dotcolor || "transparent"};
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-color: #f3f4f6; /* Light Gray */
  }
  img {
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
  }
  p {
    display: flex;
    flex-direction: column;
    span {
      font-size: 0.875rem; /* Text-14 */
      color: #9ca3af; /* Gray 400 */
      &:last-child {
        font-weight: bold;
        margin-left: 0.25rem;
      }
    }
  }
  svg {
    font-size: 0.875rem; /* Text-14 */
    color: #9ca3af; /* Gray 400 */
  }
`;

interface NavButtonProps {
  title: string;
  custonFunc: () => void;
  icon: JSX.Element;
  color: string;
  dotcolor?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  custonFunc,
  icon,
  color,
  dotcolor,
}) => (
  <NavButtonStyled onClick={custonFunc} style={{ color }} dotcolor={dotcolor}>
    <span />
    {icon}
  </NavButtonStyled>
);

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavContainer>
      <div></div>
      <NavButtonsContainer>
        <NavButton
          title="Notification"
          custonFunc={() => {}}
          color="blue"
          dotcolor="#03C9D7"
          icon={<RiNotification3Line />}
        />

        <ProfileContainer>
          <img src={"/avatar.jpg"} alt="avatar" />

          <MdKeyboardArrowDown />
        </ProfileContainer>
      </NavButtonsContainer>
    </NavContainer>
  );
};

export default Navbar;
