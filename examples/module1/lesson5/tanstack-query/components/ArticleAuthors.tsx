import { useQuery } from '@tanstack/react-query';

function ArticleAuthors() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3000/api/data/articles').then((res) =>
        res.json()
      ),
  });

  if (isPending) {
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
