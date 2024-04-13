import {useState} from "react";
import { supabase } from "../SupabaseConnection";
import  CreateCharacterCSS from "./CreateCharacter.module.css"

const createCharater = () => {

    const [character, setCharacter] = useState({name: "", color: "", super_power: ""})

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setCharacter((prev) => {
            console.log(`name: ${name}`);
            console.log(`value: ${value}`);
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    

    const createNewCharacter = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crews')
          .insert({name: character.name, color: character.color,superPower: character.superPower})
          .select();

          window.location = "/";
    }
    return (
        <>
        <div className={CreateCharacterCSS.container}>
        <h1>Create your character here</h1>

        <div className="character-input"> 
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="superPower">Super Power</label><br />
                <input type="text" id="superPower" name="superPower" onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={createNewCharacter}/>
            </form>
        </div>
        </div>
        </>
    )
}

export default createCharater