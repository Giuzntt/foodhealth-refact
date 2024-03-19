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
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;
