import './App.css'
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from "./pages/HomePage.jsx";


const queryClient = new QueryClient();


function App() {

  return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <div className="app">
                  <HomePage/>

              </div>
          </QueryClientProvider>
      </Provider>
  )
}

export default App
