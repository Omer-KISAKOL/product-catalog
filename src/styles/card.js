import styled from 'styled-components';

export const Card = styled.div`
    margin: 1rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    img {
        border-radius: 8px;
        max-width: 100%;
        height: auto;
    }
`;

export const Rating = styled.p`
    color: #f1c40f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Title = styled.h3`
    font-size: 18px;
    margin: 8px 0;
    text-align: center;
    color: #333;
`;

export const Category = styled.p`
    font-size: 14px;
    color: #666;
`;

export const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #27ae60;
`;
