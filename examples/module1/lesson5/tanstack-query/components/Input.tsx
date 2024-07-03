import { Article } from './Form';

type InputProps = {
  label: string;
  name: string;
  value: number | string;
  setFormState: (callback: (prevState: Article) => Article) => void;
};

function Input({ label, name, value, setFormState }: InputProps) {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const element = e.target;
    setFormState((prevState: Article) => {
      return {
        ...prevState,
        [element.name]: element.value,
      };
    });
  }

  return (
    <label>
      {label}
      <input onChange={handleInput} type="text" name={name} value={value} />
    </label>
  );
}

export default Input;
