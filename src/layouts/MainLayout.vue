<script lang="ts" setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" class="nav-item" active-class="active-nav-item">
        Домой
      </RouterLink>
      <RouterLink to="/stats" class="nav-item" active-class="active-nav-item">
        Статистика
      </RouterLink>
      <RouterLink
        to="/task/:id"
        class="nav-item"
        active-class="active-nav-item"
      >
        Детали
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="footer">2024</footer>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
}

.nav {
  display: flex;
  justify-content: space-around;
}

.nav-item:hover {
  text-decoration: underline;
}

.active-nav-item {
  color: #ff5722;
  border-bottom: 2px solid #ff5722;
}

.footer {
  text-align: center;
  padding: 1rem;
}
</style>
