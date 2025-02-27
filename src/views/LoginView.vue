<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { nextTick } from "vue";

const authStore = useAuthStore();
const router = useRouter();

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

const { handleSubmit } = useForm({ validationSchema: schema });
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log("Enviando credenciales:", values);
    await authStore.login(values);
    await nextTick();

    if (authStore.token) {
      router.push("/welcome");
    } else {
      console.error("No se recibió token después del login");
    }
  } catch (error) {
    console.error("Error en el login:", error);
  }
});
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-3xl font-bold text-center mb-6 text-purple-700">Acceder a NU🤑</h2>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block text-gray-600">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Ingrese su email"
            class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>
        <div>
          <label class="block text-gray-600">Contraseña</label>
          <input
            v-model="password"
            type="password"
            placeholder="Ingrese su contraseña"
            class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
        </div>
        <button
          type="submit"
          class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
        >
          Iniciar sesión
        </button>
      </form>
      <p class="mt-4 text-center text-gray-600">
        ¿No tienes una cuenta?
        <router-link to="/register" class="text-purple-600 hover:underline">Regístrate</router-link>
      </p>
    </div>
  </div>
</template>
