import { useQuery } from '@tanstack/react-query';

export const useArticle = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['articles-query-key'],
    queryFn: () =>
      fetch('http://localhost:3000/api/data/articles')
        .then((res) => res.json())
        .catch((error) => {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};
