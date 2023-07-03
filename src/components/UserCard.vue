<template>
  <div class="userContainer">
    <div v-for="user in userData" :key="user.id" class="profileCard">
      <div class="profileImage">
        <img :src="user.avatar" alt="Profile Image" />
      </div>
      <div class="profileInfo">
        <h2>{{ `${user.first_name} ${user.last_name}` }}</h2>
        <a :href="`mailto:${user.email}`" class="contactButton">Contact Me</a>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="fetchUsersByPage(pageNumber)"
      :class="{ active: pageNumber === currentPage }"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getUsers, getUsersByPage } from '../services/apiService'

export default {
  setup() {
    const userData = ref([])
    const currentPage = ref(1)
    const totalPages = ref(0)

    onMounted(async () => {
      try {
        const response = await getUsers()
        userData.value = response.data
        totalPages.value = response.total_pages
      } catch (error) {
        console.error(error)
      }
    })

    const fetchUsersByPage = async (page) => {
      try {
        const response = await getUsersByPage(page)
        userData.value = response.data
        currentPage.value = page
      } catch (error) {
        console.error(error)
      }
    }

    return { userData, currentPage, totalPages, fetchUsersByPage }
  }
}
</script>

<style>
.userContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 2em;
  justify-items: center;
  padding: 2em;
  background: var(--color-background);
}

.profileCard {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-background-mute);
  padding: 2em;
  border-radius: 2em;
  gap: 1em;
  box-shadow: -5px 5px 16px 0px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s;
  width: 100%;
  justify-content: center;
}

.profileImage {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5em solid var(--color-border);
}

.profileImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileInfo {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-heading);
  gap: 1em;
  justify-content: center;
  flex-grow: 1;
}

.contactButton {
  display: flex;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: var(--color-background);
  color: var(--color-text);
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
}

.contactButton:hover {
  background-color: var(--color-border-hover);
  color: var(--color-heading);
}
.pagination {
  display: flex;
  justify-content: center;
  padding: 2em;
  margin-top: 1em;
  gap: 1em;
}

.pagination button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5em;
  border-radius: 1rem;
  border: 2px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-heading);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.pagination button.active {
  border: 2px solid var(--color-border-hover);
  color: var(--color-text);
}
</style>
