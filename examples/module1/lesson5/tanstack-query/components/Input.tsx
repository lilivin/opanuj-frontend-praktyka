import { Article } from './Form';

type InputProps = {
  label: string;
  name: string;
  value: number | string;
  type?: string;
  setFormState: (callback: (prevState: Article) => Article) => void;
};

function Input({
  label,
  name,
  value,
  type = 'text',
  setFormState,
}: InputProps) {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState: Article) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <label>
      {label}
      <input onChange={handleInput} type={type} name={name} value={value} />
    </label>
  );
}

export default Input;
