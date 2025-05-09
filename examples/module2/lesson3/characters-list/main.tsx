import ReactDOM from 'react-dom/client';
import { CharactersList } from './CharactersList';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<CharactersList />);
}
