import type { Ref } from "react";
import type { materialsType } from "../../entities/materials";
import "./styles.css";

interface SelectProps {
  label?: string;
  ref?: Ref<HTMLSelectElement>;
  error?: string;
  hint?: string;
  materials: materialsType[];
  onChange: (material: materialsType) => void;
  value: any;
}

export const Select = ({
  label,
  error,
  ref,
  onChange,
  value,
  hint,
  materials,
}: SelectProps) => {
  const handleChange = (materialId: string) => {
    const material = materials.find((material) => material.id === +materialId);
    onChange(material!);
  };

  return (
    <div className="wrapper">
      <div className="select-container">
        <select
          id="select"
          ref={ref}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className={`custom-select ${label ? "with-label" : ""} ${
            error ? "select-error" : ""
          }`}
        >
          {materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
            </option>
          ))}
        </select>

        <div className="select-icon">
          <svg
            className="arrow-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {label && (
          <label htmlFor="select" className={`select-label`}>
            {label}
          </label>
        )}
      </div>

      {error && <p className="select-error-text">{error}</p>}
      {!error && hint && <p className="select-hint">{hint}</p>}
    </div>
  );
};
