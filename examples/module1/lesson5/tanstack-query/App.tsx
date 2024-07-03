import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ArticleTitles from './components/ArticleTitles';
import ArticleAuthors from './components/ArticleAuthors';
import Form from './components/Form';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleAuthors />
      <br />
      <ArticleTitles />
      <br />
      <Form />
    </QueryClientProvider>
  );
};

export default App;
