import styled from "styled-components";
import {UI_CONFIG} from "../../constants/config";

export const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
    max-width: 1350px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(${UI_CONFIG.GRID_BREAKPOINTS.TABLET}, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(${UI_CONFIG.GRID_BREAKPOINTS.DESKTOP}, 1fr);
    }

    @media (min-width: 1700px) {
        grid-template-columns: repeat(${UI_CONFIG.GRID_BREAKPOINTS.LG_DESKTOP}, 1fr);
    }

`;

export const ErrorMessage = styled.div`
    text-align: center;
    padding: 2rem;
    color: #e74c3c;
    font-size: 1.2rem;
`;
