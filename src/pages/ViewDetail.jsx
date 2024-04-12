import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from '../SupabaseConnection';

const ViewDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data, error } = await supabase
          .from("Crews")
          .select()
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }
        
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error.message);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h2>Character Id: {character.id}</h2>
      <h2>Character name: {character.name}</h2>
      <h2>Character SuperPower: {character.superPower}</h2>
      <h2>Created at: {character.created_at}</h2>
      <Link to= {`/edit-character/:${id}`}><button>Want to edit this character?</button></Link>
    </div>
  );
};

export default ViewDetail;
