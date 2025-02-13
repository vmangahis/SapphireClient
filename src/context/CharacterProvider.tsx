import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CharacterProviderProps {
  children: ReactNode;
}

interface Character {
  charactername: string | undefined;
  role: string | undefined;
}

interface ICharacterStateType {
  characterSelected: Character | undefined;
  setCharacterSelected: Dispatch<SetStateAction<Character | undefined>>;
}

const ICharacterState = {
  characterSelected: undefined,
  setCharacterSelected: () => {},
};

export const CharacterContext =
  createContext<ICharacterStateType>(ICharacterState);

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const [characterSelected, setCharacterSelected] = useState<
    Character | undefined
  >({
    charactername: undefined,
    role: undefined,
  });

  return (
    <CharacterContext.Provider
      value={{ characterSelected, setCharacterSelected }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
