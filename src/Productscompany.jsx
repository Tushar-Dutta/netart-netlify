import "./productscompany.css";
import productsLogo from "./assets/3.png";
export default function Productscompany() {
  return (
    <div className="productsCompany">
      <img src={productsLogo} className="productsLogo"></img>
      Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar
      Systems - Motors 8
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#da2e33",
          height: 2,
          borderColor: "#000000",
          borderRadius: "2px",
        }}
      />
      <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      <br />
      <p>
        CHEMICALS & PROCESS <hr /> POWER <hr /> WATER & WASTE WATER <hr /> OILS
        & GAS <hr /> PHARMA <hr /> SUGARS & DISTILLERIES <hr /> PAPER & PULP{" "}
        <hr /> MARINE & DEFENCE <hr /> METAL & MINING <hr /> FOOD & BEVERAGE{" "}
        <hr /> PETROCHEMICAL & REFINERIES <hr /> SOLAR <hr /> BUILDING <hr />{" "}
        HVAC <hr /> FIRE FIGHTING <hr />
        AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}
