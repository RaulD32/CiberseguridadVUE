<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const authStore = useAuthStore();
const router = useRouter();

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
    .required("Campo requerido"),
});

const { handleSubmit } = useForm({ validationSchema: schema });
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField("confirmPassword");

const onSubmit = handleSubmit(async (values) => {
  await authStore.register(values);
  router.push("/login");
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-3xl font-bold mb-6 text-center text-purple-700">Regístrate en NU🤑</h2>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <input v-model="email" type="email" placeholder="Email" 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>
        <div>
          <input v-model="password" type="password" placeholder="Contraseña" 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
        </div>
        <div>
          <input v-model="confirmPassword" type="password" placeholder="Confirmar Contraseña" 
                 class="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">{{ confirmPasswordError }}</p>
        </div>
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