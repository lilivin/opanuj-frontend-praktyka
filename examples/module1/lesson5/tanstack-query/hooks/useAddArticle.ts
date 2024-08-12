import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Article } from '../components/Form';

export const useAddArticle = () => {
  const queryClient = useQueryClient();

  const addArticleMutation = useMutation({
    mutationFn: (newArticle: Article) =>
      axios.post('http://localhost:3000/api/data/articles', newArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles-query-key'] });
    },
  });

  return addArticleMutation;
};
