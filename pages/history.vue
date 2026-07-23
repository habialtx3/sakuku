<template>
    <header class="sticky top-0 z-50 bg-surface flex justify-between items-center w-full px-container-padding h-16">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
                <img class="w-full h-full object-cover"
                    data-alt="A professional headshot of a smiling young Indonesian professional in a bright, modern office setting. The lighting is soft and natural, reflecting a clean, light-mode financial app aesthetic. The person is wearing a smart-casual green sweater that complements the brand's primary color palette. High-end, native mobile UI profile picture feel."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8rnC_261fTwmgpZRDx8wEeMUOhOrBiKy5hr5XpE3b2aOq04-tEeD0FDwybchbkWs5utqDx5OFd15Bpco9sxRptxY0Q7lhysjb9tnUCMBipl0IOiC8HustNZza-wtU2vAJ8K7FQrZdJkOr4wUH7h9ZKQ_eHbfpsW2We_xoi-oiA2VwL_aodAesJ5BeQtzZjc5tWxFBaBeCZpP3TVRWTXk9EwlSB7EyJzzonKFyXQBd2f67PpONXXqS" />
            </div>
            <h1 class="text-headline-md font-headline-md font-bold text-primary">
                SakuKu
            </h1>
        </div>
        <div class="flex items-center gap-4">
            <button
                class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span class="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
            </button>
        </div>
    </header>
    <!-- Main Canvas -->
    <main class="flex-1 px-container-padding pb-24">
        <!-- Page Title Section -->
        <div class="py-6">
            <h2 class="text-headline-lg-mobile font-headline-lg-mobile text-on-surface">
                Riwayat Transaksi
            </h2>
            <p class="text-body-md text-on-surface-variant mt-1">
                Kelola dan pantau aliran dana Anda
            </p>
        </div>
        <!-- Filter Chips (Micro-interaction) -->
        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-6">
            <button
                class="px-4 py-2 bg-primary text-on-primary rounded-full text-label-md font-label-md whitespace-nowrap">
                Semua
            </button>
            <button
                class="px-4 py-2 bg-surface-container-high text-on-surface rounded-full text-label-md font-label-md whitespace-nowrap">
                Pengeluaran
            </button>
            <button
                class="px-4 py-2 bg-surface-container-high text-on-surface rounded-full text-label-md font-label-md whitespace-nowrap">
                Pemasukan
            </button>
            <button
                class="px-4 py-2 bg-surface-container-high text-on-surface rounded-full text-label-md font-label-md whitespace-nowrap">
                Kategori
            </button>
        </div>
        <!-- Grouped List -->
        <div class="space-y-8">
            <!-- Group: Hari Ini -->
            <section>
                <h3 class="text-label-md font-label-md text-outline uppercase tracking-wider mb-4 px-1">
                    Hari ini
                </h3>
                <div class="space-y-3">
                    <!-- Belanja Item -->
                    <div
                        class="transaction-press bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-error"
                                    data-icon="shopping_basket">shopping_basket</span>
                            </div>
                            <div>
                                <h4 class="text-body-lg font-bold text-on-surface">
                                    Supermarket
                                </h4>
                                <p class="text-label-md text-on-surface-variant">
                                    14:20 • Belanja
                                </p>
                            </div>
                        </div>
                        <div class="text-right flex items-center gap-2">
                            <span class="text-body-lg font-bold text-error">-Rp 250.000</span>
                            <span class="material-symbols-outlined text-outline-variant text-[20px]"
                                data-icon="more_vert">more_vert</span>
                        </div>
                    </div>
                    <!-- Gaji Item -->
                    <div
                        class="transaction-press bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary"
                                    data-icon="payments">payments</span>
                            </div>
                            <div>
                                <h4 class="text-body-lg font-bold text-on-surface">
                                    Bonus Projek
                                </h4>
                                <p class="text-label-md text-on-surface-variant">
                                    09:00 • Gaji
                                </p>
                            </div>
                        </div>
                        <div class="text-right flex items-center gap-2">
                            <span class="text-body-lg font-bold text-primary">+Rp 2.000.000</span>
                            <span class="material-symbols-outlined text-outline-variant text-[20px]"
                                data-icon="more_vert">more_vert</span>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Group: Kemarin -->
            <section>
                <h3 class="text-label-md font-label-md text-outline uppercase tracking-wider mb-4 px-1">
                    Kemarin
                </h3>
                <div class="space-y-3">
                    <!-- Makan Item -->
                    <div
                        class="transaction-press bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-error"
                                    data-icon="restaurant">restaurant</span>
                            </div>
                            <div>
                                <h4 class="text-body-lg font-bold text-on-surface">
                                    Makan Siang
                                </h4>
                                <p class="text-label-md text-on-surface-variant">
                                    12:30 • Makan
                                </p>
                            </div>
                        </div>
                        <div class="text-right flex items-center gap-2">
                            <span class="text-body-lg font-bold text-error">-Rp 45.000</span>
                            <span class="material-symbols-outlined text-outline-variant text-[20px]"
                                data-icon="more_vert">more_vert</span>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Group: 12 Mei 2026 -->
            <section>
                <h3 class="text-label-md font-label-md text-outline uppercase tracking-wider mb-4 px-1">
                    12 Mei 2026
                </h3>
                <div class="space-y-3">
                    <!-- Transport Item -->
                    <div
                        class="transaction-press bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-error"
                                    data-icon="directions_car">directions_car</span>
                            </div>
                            <div>
                                <h4 class="text-body-lg font-bold text-on-surface">Bensin</h4>
                                <p class="text-label-md text-on-surface-variant">
                                    18:00 • Transport
                                </p>
                            </div>
                        </div>
                        <div class="text-right flex items-center gap-2">
                            <span class="text-body-lg font-bold text-error">-Rp 100.000</span>
                            <span class="material-symbols-outlined text-outline-variant text-[20px]"
                                data-icon="more_vert">more_vert</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Objek 'document' aman dipanggil di sini karena sudah berjalan di browser (client-side)
});
</script>