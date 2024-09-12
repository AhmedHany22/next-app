
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchUser } from '../services/authService';

interface AuthContextProps {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            fetchUser(savedToken).then((user) => {
                setUser(user);
                setToken(savedToken);
            });
        }
    }, []);

    const login = async (username: string, password: string) => {
        const { token, user } = await login(username, password);
        setUser(user);
        setToken(token);
        localStorage.setItem('token', token); // Persist the token
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value= {{ user, login, logout }
}>
    { children }
    </AuthContext.Provider>
  );
}
