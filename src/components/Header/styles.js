import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  max-width: 118rem;
  padding: 0 3rem;
  margin: 3.2rem auto;
  color: var(--color-text);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div``;

export const Logo = styled.span`
  font-size: 4rem;
  font-weight: 700;
`;

export const WelcomeMessage = styled.span`
  font-size: 2rem;
  margin-left: 2.4rem;
`;

export const AddButton = styled(Link)`
  width: 23rem;

  display: inline-block;
  height: 6rem;
  background-color: var(--color-primary-dark);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  line-height: 6rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const LogoutButton = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 1rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;
