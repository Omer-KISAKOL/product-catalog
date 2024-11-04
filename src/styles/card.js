import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 24px;
    padding: 16px;
    max-width: 300px;
    //height: 450px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    img {
        width: 100%;
        //height: auto;
        height: 180px;
        object-fit: contain;
        border-radius: 8px;
        max-width: 100%;
    }
`;

export const Rating = styled.div`
    font-size: 0.875rem;
    color: #f5a623;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin-left: 4px;
        color: #666;
    }
`;

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 8px;
`;

export const Category = styled.p`
    font-size: 0.875rem;
    color: #999;
    margin-bottom: 8px;
`;

export const Price = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    color: #28a745; /* Green color */
    margin-bottom: 16px;
`;
