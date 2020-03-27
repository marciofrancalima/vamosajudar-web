import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 2rem;
  padding: 9.6rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0, 0, 10rem rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 38rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: var(--color-text);
  margin-top: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 45rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 6rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  border: 1px solid #dcdce6;
  border-left: 8px solid var(--color-primary-dark);
  border-radius: 0.8rem;
  padding: 0 2.4rem;

  margin-top: 0.8rem;

  &::placeholder {
    color: var(--color-primary-dark);
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 6rem;
  background-color: var(--color-primary-dark);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  line-height: 6rem;
  margin: 1rem 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 0.8rem;
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 1rem;
  }
`;
