import { useRef, useState } from "react";
import { isRecipe, isUserBase } from "./type";
import dayjs from 'dayjs';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // previeni il comportamento predefinito
    const value: string | undefined = inputRef.current?.value;  
    const id: number = Number(value);
    try {
      const resRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!resRecipe.ok) {
        throw new Error("Errore con il recupero dei dati della Ricetta");
      }
      const recipe : unknown = await resRecipe.json();
      if (!isRecipe(recipe)) {
        throw new Error (`Formato dei dati della ricetta sbagliati sbagliati`)
      }
      const resChef = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
      if (!resChef.ok) {
        throw new Error (`Errore con il recupero dei dati dello Chef`)
      }
      const chef :unknown = await resChef.json()
      if(!isUserBase(chef)){
        throw new Error (`formato dei dati dello chef sbagliato`)
      }
      setBirthDate(chef.birthDate)
      

    } catch (err) {
      if(err instanceof Error){
        console.error("Errore nel recupero:", err);
      } else{
        console.error(`Errore sconosciuto: `, err)
      }
      
    }
    // fai qualcosa con `id`
  };

  return (
    <div className="container mt-5">
      <h1>Compleanno dello chef</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <label className="label-contro">
          inserisci un numero
          <input type="number" className="mx-3" ref={inputRef} />
        </label>
        <button type="submit" className="btn btn-primary">cerca</button>
      </form>
      <div className="mt-5">
        {
          birthDate !== null && <h1>il compleanno dello Chef é: {dayjs(birthDate).format('DD/MM/YYYY')}</h1>
        }
      </div>
    </div>
  );
}

export default App;
