import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface Auth {
  name: string | null;
  tk: string | null;
}

interface AuthContextType {
  auth: Auth | null;
  setAuth: Dispatch<SetStateAction<Auth | null>>;
}

const IAuthContextState = {
  auth: null,
  setAuth: () => {},
};

const AuthContext = createContext<AuthContextType>(IAuthContextState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth | null>({
    name: null,
    tk: null,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
