import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundemantal", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const descriptionIndex =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionIndex} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
