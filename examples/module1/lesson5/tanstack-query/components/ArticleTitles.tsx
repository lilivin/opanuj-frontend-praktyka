import { useQuery } from '@tanstack/react-query';
import { useArticle } from '../hooks/useArticle';

function ArticleTitles() {
  const { isLoading, error, data } = useArticle();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Titles</h1>
      {data.articles.map(({ title }: { title: string }, index: number) => (
        <div key={index}>
          <p>Title: {title}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleTitles;
