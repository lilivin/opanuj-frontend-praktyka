import './Switch.scss';

type SwitchProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Switch({ label, name, checked, onChange }: SwitchProps) {
  return (
    <label htmlFor={`id-switch-${name}`} className="switch">
      <span className="label">{label}</span>
      <input
        id={`id-switch-${name}`}
        name={name}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={onChange}
      />
      <span className="state">
        <span className="container">
          <span className="position" />
        </span>
      </span>
    </label>
  );
}
