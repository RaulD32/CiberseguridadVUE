<template>
    <div class="h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-3xl font-bold text-center mb-6 text-purple-700">Acceder a NU🤑</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="block text-gray-600">Email</label>
            <input v-model="email" type="email" placeholder="Ingrese su email" required 
                   class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label class="block text-gray-600">Contraseña</label>
            <input v-model="password" type="password" placeholder="Ingrese su contraseña" required 
                   class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <button type="submit" 
                  class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
            Iniciar sesión
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600">¿No tienes una cuenta? 
          <router-link to="/register" class="text-purple-600 hover:underline">Regístrate</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    console.log('Iniciando sesión con', email.value, password.value);
  };
  </script>