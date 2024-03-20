import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Header from "./components/Header";

const App = () => {
  const itensMenu = [
    { name: "Sobre", href: "/" },
    {
      name: "Receitas",
      href: "/receitas",
    },
  ];

  return (
    <BrowserRouter basename="/">
      <Header itensMenu={itensMenu} />
      <div className="my-32">
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
