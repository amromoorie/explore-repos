// import { useSelector, useDispatch } from 'react-redux';
// import { useFetchDogImgsQuery } from './store/features/search-repo.slice';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Home from './pages/Home'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
