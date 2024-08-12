import { useArticle } from '../hooks/useArticle';

function ArticleAuthors() {
  const { isLoading, error, data } = useArticle();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Authors</h1>
      {data.articles.map(({ author }: { author: string }, index: number) => (
        <div key={index}>
          <p>Title: {author}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleAuthors;
