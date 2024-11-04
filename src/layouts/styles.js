import styled from 'styled-components';


export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Navbar = styled.nav`
    width: 100%;
    background-color: #c1d4d8;
    box-shadow: 4px 15px 8px rgba(0, 0, 0, 0.1);
    color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1002;
    @media (min-width: 769px) {
        justify-content: space-between;
    }
`;

export const LayoutContent = styled.div`
    display: flex;
    flex: 1;
`;

export const StickySidebar = styled.div`
    position: sticky;
    top: 0;
    height: 100dvh;
    width: 300px;
    //background-color: #1f1f1f;
    //color: white;
    overflow-y: hidden;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 16px 16px 0;

    @media (max-width: 768px) {
        transform: ${({isOpen}) => (isOpen ? 'translateX(0%)' : 'translateX(-100%)')};
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        width: 250px;
        z-index: 1000;
        border-radius: 0 16px 16px 0;
    }
`;

export const MainContent = styled.div`
    flex: 1;
    padding: 16px;
    min-width: 0;
    //background-color: #f4f4f4;
`;

export const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #6534ff;
    border: none;
    color: white;
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    z-index: 1001;

    &:hover {
        background-color: #63bdfb
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 4px 8px;
  width: fit-content;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #FF5722;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Quantity = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0 8px;
  text-align: center;
`;

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 35px;
`;
