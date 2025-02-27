import { defineStore } from "pinia";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

interface Credentials {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  // useStorage guarda el token en localStorage de manera reactiva
  const token = useStorage<string | null>("token", null);
  const user = useStorage<User | null>("user", null);

  const login = async (credentials: Credentials): Promise<void> => {
    try {
      const { data } = await api.post<LoginResponse>("/users/login", credentials);
      
      if (!data.token) {
        console.error("Error: El backend no devolvió un token válido.");
        return;
      }

      token.value = data.token;
      user.value = data.user;
      
      console.log("Login exitoso:", data);
    } catch (error) {
      console.error("Error en login", error);
    }
  };

  const register = async (credentials: Credentials): Promise<void> => {
    try {
      await api.post("/users/register", credentials);
    } catch (error) {
      console.error("Error en registro", error);
    }
  };

  const logout = (): void => {
    token.value = null;
    user.value = null;
  };

  return { token, user, login, register, logout };
});
