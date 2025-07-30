import { MainLayout } from "./components/mainLayout";
import { materials, type materialsType } from "./entities/materials";
import { Select } from "./components/select/select";
import { Inputs } from "./components/inputs/inputs";
import { useState } from "react";

import "./styles.css";

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [meterCost, setMeterCost] = useState(0);
  const [cornerCost, setCornerCost] = useState(0);
  const [volumeCost, setVolumeCost] = useState(0);
  const totalCost = meterCost + cornerCost + volumeCost;
  const expenses = (totalCost * 0.08).toFixed(2);
  // 1
  return (
    <MainLayout>
      <h1>Именной калькулятор Ivan Loft</h1>
      <Select
        value={selectedMaterial.id}
        onChange={(material: materialsType) => setSelectedMaterial(material)}
        materials={materials}
      />
      <Inputs
        inputLabel="Кол-во погонных метров"
        price={selectedMaterial.meterPrice}
        setTotalCost={setMeterCost}
        result={meterCost}
      />
      <Inputs
        inputLabel="Работа (стыки)"
        price={selectedMaterial.cornerPrice}
        setTotalCost={setCornerCost}
        result={cornerCost}
      />
      <Inputs
        inputLabel="Объем изделия для покраски (м3)"
        price={1000}
        setTotalCost={setVolumeCost}
        result={volumeCost}
      />
      <h2>Расходы (8%): {expenses} </h2>
      <h2>Итоговая стоимость: {totalCost}</h2>
    </MainLayout>
  );
}

export default App;
