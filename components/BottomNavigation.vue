<template>
    <div>
        <!-- Bottom Navigation Bar -->
        <nav
            class="fixed bottom-0 w-full z-40 flex justify-around items-center h-16 px-4 bg-surface dark:bg-surface pb-safe border-t border-outline-variant/10 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">
            <a class="flex flex-col items-center justify-center text-primary font-bold active:scale-95 transition-all"
                href="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text-label-md font-label-md">Beranda</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-all"
                href="/history">
                <span class="material-symbols-outlined">history</span>
                <span class="text-label-md font-label-md">Riwayat</span>
            </a>

            <!-- Tombol Plus untuk Buka Modal -->
            <div class="relative -top-6">
                <button type="button" @click="openModal('expense')"
                    class="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform border-4 border-background">
                    <span class="material-symbols-outlined text-3xl">add</span>
                </button>
            </div>

            <a class="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-all"
                href="#">
                <span class="material-symbols-outlined">leaderboard</span>
                <span class="text-label-md font-label-md">Analitik</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-all"
                href="#">
                <span class="material-symbols-outlined">settings</span>
                <span class="text-label-md font-label-md">Pengaturan</span>
            </a>
        </nav>

        <!-- Modal Transaksi disatukan di sini -->
        <AddTransactionModal :is-open="isModalOpen" :initial-type="selectedType" @close="isModalOpen = false"
            @save="handleSave" />
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import AddTransactionModal from '~/components/AddTransactionModal.vue'
import { useTransactions } from '~/composable/useTransactions'
const emit = defineEmits(['transaction-saved'])

const { addTransaction, totalBalance, transactions } = useTransactions()

const isModalOpen = ref(false)
const selectedType = ref<'expense' | 'income'>('expense')

const openModal = (type: 'expense' | 'income' = 'expense') => {
    selectedType.value = type
    isModalOpen.value = true
}

// Simpan data transaksi ke LocalStorage lewat Composable
const handleSaveTransaction = (data: any) => {
    addTransaction(data)
}

const handleSave = (data: any) => {
    addTransaction(data)
    emit('transaction-saved') // Emit ke halaman tempat BottomNavigation dipasang
}
</script>