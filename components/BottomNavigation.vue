<!-- components/BottomNavigation.vue -->
<template>
    <div>
        <nav
            class="fixed bottom-0 w-full z-40 flex justify-around items-center h-16 px-4 bg-surface pb-safe border-t border-outline-variant/10 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">

            <!-- Beranda -->
            <NuxtLink to="/"
                :class="['flex flex-col items-center justify-center active:scale-95 transition-all', isActive('/') ? 'text-primary font-bold' : 'text-on-surface-variant']">
                <span class="material-symbols-outlined">home</span>
                <span class="text-label-md font-label-md">Beranda</span>
            </NuxtLink>

            <!-- Riwayat -->
            <NuxtLink to="/history"
                :class="['flex flex-col items-center justify-center active:scale-95 transition-all', isActive('/history') ? 'text-primary font-bold' : 'text-on-surface-variant']">
                <span class="material-symbols-outlined">history</span>
                <span class="text-label-md font-label-md">Riwayat</span>
            </NuxtLink>

            <!-- Tombol Plus (Modal) -->
            <div class="relative -top-6">
                <button type="button" @click="openModal('expense')"
                    class="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform border-4 border-background">
                    <span class="material-symbols-outlined text-3xl">add</span>
                </button>
            </div>

            <!-- Analitik -->
            <NuxtLink to="/analytics"
                :class="['flex flex-col items-center justify-center active:scale-95 transition-all', isActive('/analytics') ? 'text-primary font-bold' : 'text-on-surface-variant']">
                <span class="material-symbols-outlined">leaderboard</span>
                <span class="text-label-md font-label-md">Analitik</span>
            </NuxtLink>

            <!-- Pengaturan -->
            <NuxtLink to="/settings"
                :class="['flex flex-col items-center justify-center active:scale-95 transition-all', isActive('/settings') ? 'text-primary font-bold' : 'text-on-surface-variant']">
                <span class="material-symbols-outlined">settings</span>
                <span class="text-label-md font-label-md">Pengaturan</span>
            </NuxtLink>
        </nav>

        <!-- Modal Transaksi -->
        <AddTransactionModal :is-open="isModalOpen" :initial-type="selectedType" @close="isModalOpen = false"
            @save="handleSaveTransaction" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AddTransactionModal from '~/components/AddTransactionModal.vue'
import { useTransactions } from '~/composable/useTransactions'

const route = useRoute()
const { addTransaction } = useTransactions()

const isModalOpen = ref(false)
const selectedType = ref<'expense' | 'income'>('expense')

// Cek apakah halaman saat ini sesuai dengan link
const isActive = (path: string) => route.path === path

const openModal = (type: 'expense' | 'income' = 'expense') => {
    selectedType.value = type
    isModalOpen.value = true
}

const handleSaveTransaction = (data: any) => {
    addTransaction(data)
}
</script>