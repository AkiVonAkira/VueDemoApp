<template>
  <div class="app-container">
    <header>
      <h2 class="title">Vendre Demo App</h2>
      <div class="toggle-container">
        <input
          v-model="userTheme"
          @change="toggleTheme"
          id="checkbox"
          type="checkbox"
          class="switch-checkbox"
        />
        <label for="checkbox" class="switch-label">
          <span>🌙</span>
          <span>☀️</span>
          <div class="switch-toggle"></div>
        </label>
      </div>
    </header>
    <Suspense>
      <template #default>
        <UserCard />
      </template>
      <template #fallback>
        <UserCardSkeleton />
        ></template
      >
    </Suspense>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue'
import UserCardSkeleton from './components/UserCardSkeleton.vue'

export default {
  components: {
    UserCard,
    UserCardSkeleton
  },

  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference()
    this.setTheme(initUserTheme)
  },

  methods: {
    setTheme(theme) {
      localStorage.setItem('user-theme', theme)
      this.userTheme = theme
      document.body.className = theme
    },

    toggleTheme() {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme === 'light-theme') {
        this.setTheme('dark-theme')
      } else {
        this.setTheme('light-theme')
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (hasDarkPreference) {
        return 'dark-theme'
      } else {
        return 'light-theme'
      }
    },

    getTheme() {
      return localStorage.getItem('user-theme')
    }
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
  color: var(--color-header);
}

.toggle-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.switch-checkbox {
  display: none;
}

.switch-label {
  display: flex;
  width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  border: 2px solid var(--color-background-mute);
  padding: 8px;
  gap: 8px;
  font-size: 16px;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-background);
  cursor: pointer;
  transition: background-color 0.5s ease;
  position: relative;
  box-shadow: -5px 5px 16px 0px rgba(0, 0, 0, 0.4);
}

.switch-label span {
  flex: 1;
  text-align: center;
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-background-mute);
  border-radius: 50%;
  top: -1px;
  left: -1px;
  height: 30px;
  width: 30px;
  transform: translateX(0);
  transition: transform 0.3s ease;
  z-index: 2;
}

.switch-checkbox:checked + .switch-label .switch-toggle {
  transform: translateX(32px);
}
</style>
