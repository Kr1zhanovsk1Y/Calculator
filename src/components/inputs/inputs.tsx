import { InputAdornment, TextField } from "@mui/material";
import "./style.css";
import { useEffect, useState } from "react";

type InputsProps = {
  price: number;
  inputLabel: string;
  setTotalCost: (cost: number) => void;
  result: number;
};

export const Inputs = ({
  price,
  inputLabel,
  setTotalCost,
  result,
}: InputsProps) => {
  const [value, setValue] = useState<string>("0");

  const handleChange = (value: string) => {
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setValue(value);
    }
  };

  useEffect(() => {
    const numeric = parseFloat(value);
    if (!isNaN(numeric)) {
      setTotalCost(numeric * price);
    } else {
      setTotalCost(0);
    }
  }, [price, value]);

  return (
    <div className="wrapper">
      <div className="inputs-container">
        <TextField
          className="first-input"
          type="number"
          inputProps={{ min: 0, step: "0.5" }}
          id="meters"
          value={value}
          label={inputLabel}
          variant="standard"
          sx={{ height: "100%" }}
          onChange={(e) => handleChange(e.target.value)}
        />
        <TextField
          id="meters-result"
          label="Предварительная стоимость"
          variant="standard"
          value={result}
          InputProps={{
            endAdornment: <InputAdornment position="end">₽</InputAdornment>,
          }}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </div>
    </div>
  );
};
