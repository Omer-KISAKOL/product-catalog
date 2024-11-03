import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Cart.jsx";
import MainLayout from "./layouts/index.jsx";
import NotFound from "./pages/NotFound.jsx";


const queryClient = new QueryClient();


export default function App() {

  return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <div className="app">
                  <Routes>
                      <Route path="/" element={<MainLayout/>} />
                      <Route path="/cart" element={<Cart/>} />
                      <Route path="*" element={<NotFound/>} />
                  </Routes>
              </div>
          </QueryClientProvider>
      </Provider>
  )
}