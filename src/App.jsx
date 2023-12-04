import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mt-20 mx-auto">
      <Header />

      <div className="mt-12 flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
