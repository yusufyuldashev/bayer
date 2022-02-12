<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 7rem auto;
  max-width: 40rem;
  color: red;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}
</style>
