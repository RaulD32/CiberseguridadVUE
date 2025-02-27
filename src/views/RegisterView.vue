<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-3xl font-bold mb-6 text-center text-purple-700">Regístrate en NU🤑</h2>
        <form @submit.prevent="register" class="space-y-4">
          <input v-model="email" type="email" placeholder="Email" required 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input v-model="password" type="password" placeholder="Contraseña" required 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input v-model="confirmPassword" type="password" placeholder="Confirmar Contraseña" required 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button type="submit" 
                  class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
            Regístrate 
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600">¿Ya tienes una cuenta? 
          <router-link to="/login" class="text-purple-600 hover:underline">Inicia sesión</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const register = () => {
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Registrando usuario con', email.value);
  };
  </script>