<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (!authStore.token) {
    router.push("/login");
  }
});

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-purple-900 text-white p-5 flex flex-col">
      <h2 class="text-xl font-bold mb-5">Dashboard 💼</h2>
      <nav class="space-y-3">
        <router-link to="/" class="block py-2 px-4 rounded hover:bg-purple-700">Inicio</router-link>
        <router-link to="/analytics" class="block py-2 px-4 rounded hover:bg-purple-700">Analíticas</router-link>
        <router-link to="/security" class="block py-2 px-4 rounded hover:bg-purple-700">Seguridad</router-link>
      </nav>
    </aside>
    
    <!-- Main Content -->
    <main class="flex-1 p-6">
      <h1 class="text-3xl font-bold text-gray-800">Bienvenido, {{ authStore.user?.name }}</h1>
      <p class="text-gray-600 mt-2">¡Has iniciado sesión correctamente!</p>
      
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Perfil</h3>
          <p class="text-gray-600">Administra tu información personal.</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Configuraciones</h3>
          <p class="text-gray-600">Personaliza tu experiencia.</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Soporte</h3>
          <p class="text-gray-600">Obtén ayuda cuando lo necesites.</p>
        </div>
      </div>
      
      <button
        @click="logout"
        class="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg shadow transition duration-300 hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </main>
  </div>
</template>
