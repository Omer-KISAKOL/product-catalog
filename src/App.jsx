import './index.css';
import {Provider} from 'react-redux';
import {store} from './store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/index.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CartPage from "./pages/CartPage.jsx";


const queryClient = new QueryClient();


export default function App() {

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <div className="app">
                    <Routes>
                        <Route path="/" element={<MainLayout/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </QueryClientProvider>
        </Provider>
    )
}