<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* 1. Transisi Pergantian Halaman (Page Transition) */
.page-enter-active,
.page-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px); /* Elemen baru muncul dari bawah sedikit */
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px); /* Elemen lama menghilang ke atas sedikit */
}

/* 2. Style Animasi Elemen Baru (List / Card Transaksi Baru) */
@keyframes highlightNew {
  0% {
    background-color: rgba(var(--color-primary-rgb, 34, 197, 94), 0.2);
    transform: scale(0.98);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    background-color: transparent;
    transform: scale(1);
  }
}

.animate-pop-in {
  animation: highlightNew 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>