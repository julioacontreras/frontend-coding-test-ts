<template>
  <nav class="bg-gray-800 text-white">
    <div class="mx-auto px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="w-14 h-14" src="../../assets/logo.svg" />
            <img class="ml-3" src="../../assets/logotype.svg" />
          </div>
          <div class="flex ml-10 items-center align-middle">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                exact-active-class="bg-gray-900 text-white"
                >Home</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <ToastNotification
    v-bind:notification="notification"
    class="p-3"
    v-on:on-hide="hideHandle"
  />
  <main class="flex w-full">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Notification } from '../../types/notification';
import ToastNotification from '../toast-notification/index.vue'
import { EventData, addEvent } from '../../eventBus'

const notification: Notification = ref<Notification>({
  isVisible: false,
  message: '',
  type: '',
})

addEvent('on-success', (eventData: EventData) => {
  notification.value.isVisible = true
  notification.value.type = 'success'
  notification.value.message = eventData.data as string
})

addEvent('on-error', (eventData: EventData) => {
  notification.value.isVisible = true
  notification.value.type = 'error'
  notification.value.message = eventData.data as string
})

const hideHandle = () => {
  notification.value.isVisible = false
}
</script>
