<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen bg-background text-on-background pb-24">
        <!-- Header Global -->
        <header
            class="sticky top-0 z-50 bg-surface flex justify-between items-center w-full px-container-padding h-16 shadow-sm">
            <div class="flex items-center gap-3">
                <h1 class="text-headline-md font-bold text-primary">SakuKu</h1>
            </div>
            <button
                class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:opacity-80 transition-transform active:scale-95">
                <span class="material-symbols-outlined text-primary">notifications</span>
            </button>
        </header>

        <!-- Konten Halaman -->
        <main>
            <slot />
        </main>

        <!-- Bottom Navigation Global -->
        <BottomNavigation />
    </div>
</template>

<script setup>
import BottomNavigation from '~/components/BottomNavigation.vue'
</script>