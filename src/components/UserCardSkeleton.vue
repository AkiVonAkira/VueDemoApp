<template>
  <div class="userContainer">
    <div v-for="index in 6" :key="index" class="profileCard">
      <div class="profileImage"></div>
      <div class="profileInfo">
        <h2></h2>
        <a class="contactButton"></a>
      </div>
    </div>
  </div>
  <div class="pagination"></div>
</template>

<style scoped>
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
  background-color: var(--color-background-soft);
}

.profileInfo {
  max-width: 320px;
  max-height: 160px;
}
.profileInfo h2 {
  width: 100%;
  min-height: 60px;
  max-height: 80px;
  background-color: var(--color-background-soft);
}
.profileInfo a {
  width: 100%;
  min-height: 40px;
  max-height: 80px;
  background-color: var(--color-background-soft);
}
</style>
