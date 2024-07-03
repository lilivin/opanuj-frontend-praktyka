import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Input from './Input';

export type Article = {
  id: number;
  author: string;
  title: string;
  content: string;
};

const formDefaultState: Article = {
  id: 0,
  author: '',
  title: '',
  content: '',
};

function Form() {
  const [formState, setFormState] = useState(formDefaultState);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newArticle: Article) => {
      return axios.post('/api/data/articles', newArticle);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
      setFormState(formDefaultState);
    },
    onError: () => {
      console.log(`Error`);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutation.mutate(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Id"
        name="id"
        setFormState={setFormState}
        value={formState.id}
      />
      <Input
        label="Title"
        name="title"
        setFormState={setFormState}
        value={formState.title}
      />
      <Input
        label="Author"
        name="author"
        setFormState={setFormState}
        value={formState.author}
      />
      <Input
        label="Content"
        name="content"
        setFormState={setFormState}
        value={formState.content}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
