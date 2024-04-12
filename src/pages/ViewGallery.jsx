import {react} from "react";
import { supabase } from '../SupabaseConnection'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ViewGallery = () => {

    const [characters, setCharacters] = useState([]);

    useEffect (() => {
        const fetchCharacters = async () => {
            try{
                const {data, error} = await supabase.from("Crews").select().order('created_at', {ascending: true});

                if (error){
                    throw error;
                }
                setCharacters(data)
            }
            catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        }
        fetchCharacters();
    }, [])

    const handleClick = (id) => {
        // Redirect to the detail page for the specific character
        window.location = `view-detail/${id}`;
    }
    

    return (
        <>
        <h1>Gallery Page</h1>
        <div className="display-characters">
            {
                characters && characters.length > 0 ?
                characters.map((character,index) => 

                <div className="complete-character-card" key={character.id} >

                    <div className="character-stats" onClick={() => handleClick(character.id)}>
                            <h2>{character.name}</h2>
                            <h2>{character.id}</h2>

                    </div>

                    <div className="edit-button">
                        <Link to={`/edit-character/${character.id}`}>
                        <button>Edit Character</button>
                        </Link>
                    </div>

                </div>
            ): <h2>{'No Character recruited yet 😞'}</h2>
            }
        </div>  
        </>
    )
}

export default ViewGallery

