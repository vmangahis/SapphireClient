import { useContext } from "react";
import { CharacterContext } from "../context/CharacterProvider";

export const useCharacter = () => {
  return useContext(CharacterContext);
};
