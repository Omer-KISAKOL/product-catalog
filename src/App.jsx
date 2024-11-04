import {Provider} from 'react-redux';
import {store} from './store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/index.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    )
}