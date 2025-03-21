import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import RoutAppp from './rout';
import { store } from './slice/store'
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ErrorBoundary } from './components/ErrorHandler/ErrorBoundary';

function App() {
  const queryClient = new QueryClient()
  return (
    <ErrorBoundary>
      <Provider store={store} >
        <MantineProvider defaultColorScheme='light'>
          <QueryClientProvider client={queryClient}>
            <RoutAppp />
          </QueryClientProvider>
        </MantineProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
