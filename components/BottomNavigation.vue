<template>
    <nav
        class="fixed bottom-0 w-full z-40 flex justify-around items-center h-16 px-4 bg-surface dark:bg-surface pb-safe border-t border-outline-variant/10 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl">
        <a class="flex flex-col items-center justify-center text-primary dark:text-primary font-bold scale-98 transition-all duration-200 active:scale-95"
            href="/">
            <span class="material-symbols-outlined">home</span>
            <span class="text-label-md font-label-md">Beranda</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline scale-98 transition-all duration-200 active:scale-95 hover:bg-surface-container-low rounded-lg px-2"
            href="/history">
            <span class="material-symbols-outlined">history</span>
            <span class="text-label-md font-label-md">Riwayat</span>
        </a>

        <!-- Tombol Tambah Transaksi (Center Floating Action Button) -->
        <div class="relative -top-6">
            <button type="button" @click="$emit('open-add')"
                class="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform border-4 border-background">
                <span class="material-symbols-outlined text-3xl">add</span>
            </button>
        </div>

        <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline scale-98 transition-all duration-200 active:scale-95 hover:bg-surface-container-low rounded-lg px-2"
            href="#">
            <span class="material-symbols-outlined">leaderboard</span>
            <span class="text-label-md font-label-md">Analitik</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline scale-98 transition-all duration-200 active:scale-95 hover:bg-surface-container-low rounded-lg px-2"
            href="#">
            <span class="material-symbols-outlined">settings</span>
            <span class="text-label-md font-label-md">Pengaturan</span>
        </a>
    </nav>
</template>

<script setup>
defineEmits(['open-add'])
</script>