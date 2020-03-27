import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 118rem;
  padding: 0 3rem;
  margin: 3.2rem auto;

  color: var(--color-text);
`;

export const Title = styled.h1`
  margin-top: 8rem;
  margin-bottom: 2.4rem;
  font-size: 2rem;
  font-weight: 700;

  &::before {
    content: '';
    border-left: 6px solid var(--color-primary-dark);
    margin-right: 0.5rem;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem;

  list-style: none;
`;

export const Item = styled.li`
  background-color: #fff;
  padding: 2.4rem;
  border-radius: 8px;
  position: relative;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  border: 0;
  background: transparent;
  color: #a8a8b3;
  transition: filter 0.2s;

  &:hover {
    opacity: 0.8;

    color: #e02041;
  }
`;

export const Name = styled.strong`
  display: block;
  margin-bottom: 1.6rem;
`;

export const Description = styled.strong`
  display: block;
  margin-top: 3.2rem;
`;

export const Value = styled.strong`
  display: block;
  margin-top: 3.2rem;
`;

export const Paragraph = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
`;
