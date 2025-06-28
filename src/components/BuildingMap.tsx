import React from "react";

const floors = [
  // Torre A (izquierda)
  {
    id: "A6",
    label: "Torre A - Piso 6",
    top: "0%",
    left: "0%",
    width: "48%",
    height: "14%",
  },
  {
    id: "A5",
    label: "Torre A - Piso 5",
    top: "14%",
    left: "0%",
    width: "48%",
    height: "14%",
  },
  {
    id: "A4",
    label: "Torre A - Piso 4",
    top: "28%",
    left: "0%",
    width: "48%",
    height: "14%",
  },
  {
    id: "A3",
    label: "Torre A - Piso 3",
    top: "42%",
    left: "0%",
    width: "48%",
    height: "14%",
  },
  {
    id: "A2",
    label: "Torre A - Piso 2",
    top: "56%",
    left: "0%",
    width: "48%",
    height: "14%",
  },
  {
    id: "A1",
    label: "Torre A - Piso 1",
    top: "70%",
    left: "0%",
    width: "48%",
    height: "14%",
  },

  // Torre B (derecha)
  {
    id: "B6",
    label: "Torre B - Piso 6",
    top: "0%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
  {
    id: "B5",
    label: "Torre B - Piso 5",
    top: "14%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
  {
    id: "B4",
    label: "Torre B - Piso 4",
    top: "28%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
  {
    id: "B3",
    label: "Torre B - Piso 3",
    top: "42%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
  {
    id: "B2",
    label: "Torre B - Piso 2",
    top: "56%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
  {
    id: "B1",
    label: "Torre B - Piso 1",
    top: "70%",
    left: "52%",
    width: "48%",
    height: "14%",
  },
];

const BuildingMap: React.FC = () => {
  const handleClick = (id: string) => {
    alert(`Haz hecho clic en ${id}`);
  };

  return (
    <div className="building-container">
      {floors.map((floor) => (
        <div
          key={floor.id}
          className="floor-overlay"
          style={{
            top: floor.top,
            left: floor.left,
            width: floor.width,
            height: floor.height,
          }}
          onClick={() => handleClick(floor.label)}
        >
          <span className="floor-label">{floor.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BuildingMap;
