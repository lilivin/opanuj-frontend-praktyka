import { FormEvent, useState } from 'react';
import Input from './Input';
import { useAddArticle } from '../hooks/useAddArticle';

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
  const addArticleMutation = useAddArticle();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addArticleMutation.mutate(formState, {
      onSuccess: () => {
        setFormState(formDefaultState);
      },
    });
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
