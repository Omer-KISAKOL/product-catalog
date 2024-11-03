import styled from 'styled-components';

export const Button = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: ${props => (props.primary ? '#0003cd' : '#ff0000')};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props => (props.primary ? '#3939f1' : '#e21f1f')};
    }
`;
