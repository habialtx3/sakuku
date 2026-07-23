<template>
    <header
        class="flex justify-between items-center w-full px-container-padding h-16 bg-surface dark:bg-on-surface opacity-40">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-secondary-container"></div>
            <span class="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed">SakuKu</span>
        </div>
        <span class="material-symbols-outlined text-primary">notifications</span>
    </header>
    <main class="px-container-padding pt-6 opacity-40">
        <div class="bg-white rounded-xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-6">
            <p class="text-label-md font-label-md text-on-surface-variant mb-1">
                Total Saldo
            </p>
            <h1 class="text-headline-lg font-headline-lg text-on-surface">
                Rp 12.450.000
            </h1>
        </div>
        <div class="space-y-4">
            <div class="bg-white rounded-xl p-4 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary">shopping_bag</span>
                    </div>
                    <div>
                        <p class="font-semibold">Belanja Bulanan</p>
                        <p class="text-xs text-on-surface-variant">24 Mei 2024</p>
                    </div>
                </div>
                <p class="font-bold text-error">- Rp 450.000</p>
            </div>
        </div>
    </main>
    <!-- Bottom Navigation (Obscured) -->
    <nav
        class="fixed bottom-0 w-full z-10 flex justify-around items-center h-16 px-4 bg-surface dark:bg-on-surface border-t border-outline-variant/10 opacity-40">
        <div class="flex flex-col items-center justify-center text-primary font-bold">
            <span class="material-symbols-outlined">home</span>
            <span class="text-label-md font-label-md">Beranda</span>
        </div>
        <div class="flex flex-col items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined">history</span>
            <span class="text-label-md font-label-md">Riwayat</span>
        </div>
        <div class="flex flex-col items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined">leaderboard</span>
            <span class="text-label-md font-label-md">Analitik</span>
        </div>
        <div class="flex flex-col items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined">settings</span>
            <span class="text-label-md font-label-md">Pengaturan</span>
        </div>
    </nav>
    <!-- Overlay Back-drop -->
    <div class="fixed inset-0 bg-on-surface/40 backdrop-blur-[2px] z-20"></div>
    <!-- Bottom Sheet Modal -->
    <div id="bottomSheet"
        class="fixed bottom-0 left-0 right-0 z-30 bg-surface-container-lowest rounded-t-[32px] shadow-2xl flex flex-col max-h-[92vh] bottom-sheet">
        <!-- Handle Bar -->
        <div class="w-full flex justify-center pt-3 pb-2">
            <div class="w-10 h-1.5 bg-outline-variant rounded-full"></div>
        </div>
        <!-- Header -->
        <div class="px-container-padding flex justify-between items-center mb-6">
            <h2 class="text-headline-md font-headline-md text-on-surface">
                Tambah Transaksi
            </h2>
            <button
                class="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
                <span class="material-symbols-outlined text-on-surface-variant text-[20px]">close</span>
            </button>
        </div>
        <div class="px-container-padding overflow-y-auto custom-scrollbar pb-safe">
            <!-- Toggle Switch -->
            <div class="bg-surface-container-low rounded-full p-1.5 flex mb-8">
                <button id="toggleExpense"
                    class="flex-1 py-2.5 rounded-full text-body-md font-semibold transition-all duration-300 bg-error text-white shadow-sm">
                    Pengeluaran
                </button>
                <button id="toggleIncome"
                    class="flex-1 py-2.5 rounded-full text-body-md font-semibold transition-all duration-300 text-on-surface-variant">
                    Pemasukan
                </button>
            </div>
            <!-- Amount Input -->
            <div class="flex flex-col items-center mb-8">
                <div class="flex items-baseline gap-2">
                    <span class="text-headline-md text-on-surface-variant font-bold">Rp</span>
                    <input type="number" id="amountInput" placeholder="0"
                        class="w-full text-center bg-transparent border-none p-0 text-display-numeric font-display-numeric text-on-surface focus:ring-0 placeholder:text-outline-variant"
                        autofocus="" />
                </div>
                <div class="w-32 h-1 bg-primary/10 rounded-full mt-2"></div>
            </div>
            <!-- Category Selector -->
            <div class="mb-6">
                <label
                    class="text-label-md font-label-md text-on-surface-variant uppercase mb-3 block px-1">Kategori</label>
                <div class="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    <button class="category-chip flex-shrink-0 flex flex-col items-center gap-2 group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center transition-all group-active:scale-95 group-[.active]:bg-primary group-[.active]:text-on-primary">
                            <span class="material-symbols-outlined">restaurant</span>
                        </div>
                        <span
                            class="text-label-md font-label-md text-on-surface-variant group-[.active]:text-primary">Makanan</span>
                    </button>
                    <button class="category-chip flex-shrink-0 flex flex-col items-center gap-2 group active">
                        <div
                            class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center transition-all group-active:scale-95 group-[.active]:bg-primary group-[.active]:text-on-primary">
                            <span class="material-symbols-outlined">commute</span>
                        </div>
                        <span
                            class="text-label-md font-label-md text-on-surface-variant group-[.active]:text-primary">Transportasi</span>
                    </button>
                    <button class="category-chip flex-shrink-0 flex flex-col items-center gap-2 group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center transition-all group-active:scale-95 group-[.active]:bg-primary group-[.active]:text-on-primary">
                            <span class="material-symbols-outlined">payments</span>
                        </div>
                        <span
                            class="text-label-md font-label-md text-on-surface-variant group-[.active]:text-primary">Gaji</span>
                    </button>
                    <button class="category-chip flex-shrink-0 flex flex-col items-center gap-2 group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center transition-all group-active:scale-95 group-[.active]:bg-primary group-[.active]:text-on-primary">
                            <span class="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <span
                            class="text-label-md font-label-md text-on-surface-variant group-[.active]:text-primary">Belanja</span>
                    </button>
                    <button class="category-chip flex-shrink-0 flex flex-col items-center gap-2 group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center transition-all group-active:scale-95 group-[.active]:bg-primary group-[.active]:text-on-primary">
                            <span class="material-symbols-outlined">receipt_long</span>
                        </div>
                        <span
                            class="text-label-md font-label-md text-on-surface-variant group-[.active]:text-primary">Tagihan</span>
                    </button>
                </div>
            </div>
            <!-- Additional Fields -->
            <div class="space-y-4 mb-8">
                <div
                    class="bg-surface-container-low rounded-2xl p-4 flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                    <span class="material-symbols-outlined text-outline">event</span>
                    <div class="flex-1">
                        <p class="text-label-md text-outline leading-none mb-1">
                            Tanggal
                        </p>
                        <input type="date" value="2024-05-24"
                            class="w-full bg-transparent border-none p-0 text-body-md font-semibold text-on-surface focus:ring-0" />
                    </div>
                </div>
                <div
                    class="bg-surface-container-low rounded-2xl p-4 flex items-start gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                    <span class="material-symbols-outlined text-outline mt-1">notes</span>
                    <div class="flex-1">
                        <p class="text-label-md text-outline leading-none mb-1">
                            Keterangan
                        </p>
                        <textarea rows="2" placeholder="Tulis catatan di sini..."
                            class="w-full bg-transparent border-none p-0 text-body-md text-on-surface focus:ring-0 resize-none placeholder:text-outline-variant"></textarea>
                    </div>
                </div>
            </div>
            <!-- Submit Button -->
            <div class="pb-8">
                <button
                    class="w-full h-touch-target-min bg-primary text-on-primary rounded-2xl font-bold text-body-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform duration-200 active:scale-95">
                    <span class="material-symbols-outlined text-[20px]">save</span>
                    Simpan Transaksi
                </button>
            </div>
        </div>
    </div>
</template>

<script></script>