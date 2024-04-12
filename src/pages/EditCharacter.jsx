import {useParams} from "react-router-dom";
import { supabase } from "../SupabaseConnection";
import {useState} from "react";

const EditCharacter = ({data}) => {

    const {id} = useParams();
    const [character, setCharacter] = useState({id: null, name: "", color: "", superPower: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCharacter( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // DELETE character
    const deleteCharacter = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crews')
        .delete()
        .eq('id', id); 
    
        window.location = "/";
    }

    const updateCharacter = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crews')
          .update({name: character.name, color: character.color,superPower: character.superPower})
          .eq('id', id);
      
        window.location = "/";
      }

    return (
        <div>
            <h1>Edit Page</h1>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={character.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" value={character.color} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="superPower">Super Power</label><br />
                <input type="text" id="superPower" name="superPower" value={character.superPower} onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={updateCharacter}/>
                <button className="deleteButton" onClick={deleteCharacter}>Delete</button>
            </form>
    </div>
    )
}

export default EditCharacter