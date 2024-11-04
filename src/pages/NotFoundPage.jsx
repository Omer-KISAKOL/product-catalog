import {BackButton, NotFoundContainer, NotFoundMessage, NotFoundTitle} from "../styles/notFoundStyle.js";

export default function NotFoundPage() {
    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundMessage>Oops! The page you're looking for doesn't exist.</NotFoundMessage>
            <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
        </NotFoundContainer>
    );
}