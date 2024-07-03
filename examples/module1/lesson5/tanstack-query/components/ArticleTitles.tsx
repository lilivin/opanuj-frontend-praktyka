import { useQuery } from '@tanstack/react-query';

function ArticleTitles() {
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
