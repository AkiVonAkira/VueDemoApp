<template>
  <div class="container">
    <h1>Hello World</h1>
    <p v-if="user">{{ user }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getUsers, getUsersByPage } from './services/apiService'

export default {
  setup() {
    const user = ref('')

    const fetchData = () => {
      getUsers()
        .then((response) => {
          user.value = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })

      getUsersByPage(2)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    onMounted(fetchData)

    return {
      user,
      fetchData
    }
  }
}
</script>

<style></style>
