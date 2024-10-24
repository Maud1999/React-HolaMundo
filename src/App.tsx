import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "Perrito triste"]);

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Goku", "Tanjiro", "Perrito triste"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };

  // return (
  //   <Card>
  //     <CardBody title="Hola Mundo" text="Este es el texto" />
  //     {list.length !== 0 ? (
  //       <List data={list} onSelect={handleSelect} />
  //     ) : (
  //       "No hay contenido"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola Mundo
  //     </Button>
  //   </Card>
  // );
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
