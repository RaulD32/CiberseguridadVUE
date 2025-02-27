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
      <h1 class="text-3xl font-bold text-gray-800">Ataques de Seguridad en Sistemas</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Phishing</h3>
          <p class="text-gray-600">Intento de engañar a los usuarios para obtener información confidencial.</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Malware</h3>
          <p class="text-gray-600">Software malicioso como virus, troyanos y ransomware.</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Ataques DDoS</h3>
          <p class="text-gray-600">Sobrecarga de tráfico para inutilizar un sistema o red.</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold">Ingeniería Social</h3>
          <p class="text-gray-600">Manipulación psicológica para acceder a datos sensibles.</p>
        </div>
      </div>
    </main>
  </div>
</template>
