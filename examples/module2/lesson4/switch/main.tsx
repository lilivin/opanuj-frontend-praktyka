import ReactDOM from 'react-dom/client';
import { Form } from './Form';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Form />);
}
