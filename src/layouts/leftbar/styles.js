import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    width: 300px;
    min-height: 100dvh;
    position: sticky;
    top: 0;
    left: 250px;
    background-color: #c1d4d8;
    padding: 30px;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    overflow-y: hidden;
    border: 1px solid #dce9d8;
    border-radius: 16px;


    @media (max-width: 768px) {
        transform: ${({isOpen}) => (isOpen ? 'translateX(0%)' : 'translateX(-100%)')};
        width: 250px;
        padding: 64px 30px 20px 20px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        z-index: 1000;
    }
`;

export const ToggleLeftButton = styled.button`
    background-color: #6534ff;
    border: none;
    color: white;
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;

    &:focus-visible {
        outline: #63bdfb;
    }

    @media (min-width: 769px) {
        display: none;
    }

`;

export const FilterSection = styled.div`
    margin-top: 16px;
    padding: 10px 10px 0 10px;
    border: 1px solid #585858;
    border-radius: 12px;
`;

export const FilterTitle = styled.h5`
    margin-bottom: 8px;
`;

export const FilterOption = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
    padding: 4px;

    &.active {
        padding: 4px;
        border-radius: 8px;
        background-color: #b0aac2;
        color: white;
    }

    input {
        margin-right: 8px;
        visibility: hidden;
    }
`;

export const Search = styled.input`
    width: 100%;
    height: 100%;
    padding: 6px 12px;
    border-radius: 16px;
    border: 2px solid #8686ff;
    background-color: #c1d4d8;

    &:focus {
        border: 2px solid #dce9d8;
        outline: none;
    }
`;

export const SortDropdown = styled.select`
    margin-top: 16px;
    padding: 8px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #c1d4d8;
    &:focus {
        border: 2px solid #8686ff;
        outline: none;
    }
`;


