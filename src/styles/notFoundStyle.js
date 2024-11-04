import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #333;
  background-color: #f8f8f8;
`;

export const NotFoundTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #ff5722;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;