<template>
  <!-- Satu div pembungkus utama (Parent) -->
  <div class="min-h-screen bg-background text-on-background pb-24">
    <!-- Header -->
    <header
      class="bg-surface dark:bg-surface flex justify-between items-center w-full px-container-padding h-16 sticky top-0 z-40">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
          <img class="w-full h-full object-cover"
            data-alt="Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpIXjQ1ZnNcr0Ge1sME0eZyGI-bE5kBkE_rsjMMG48abMLeI-myOi2PETptnVHmsWt36WpSHP_9jERoIpsHtAmuMbxg4n90syR6rOXdO_Q8OywADwWWVDbBpa-Xes-pDxB8dDK92uf1Z9b-e9tv7OpbWetFrMuem6V2SFxJO2wzc-osVhsO6obMlHpWwHb-B5Y9OgIwkZP5BSZThtTYmHK2AYuXmUz4bWWLTL9Fy8E2uxh9Yem3XJ" />
        </div>
        <h1 class="text-headline-md font-headline-md font-bold text-primary dark:text-primary">
          SakuKu
        </h1>
      </div>
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:opacity-80 transition-transform active:scale-95">
        <span class="material-symbols-outlined text-primary">notifications</span>
      </button>
    </header>

    <!-- Main Content -->
    <main class="px-container-padding pt-4 space-y-stack-lg">
      <!-- Balance Overview Card -->
      <section
        class="relative overflow-hidden bg-primary-container rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-on-primary-container">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <p class="text-label-md font-label-md opacity-80 mb-1">Total Saldo</p>
        <div class="flex items-baseline gap-2">
          <span class="text-headline-md font-headline-md opacity-70">Rp</span>
          <h2 class="text-display-numeric font-display-numeric">12.500.000</h2>
        </div>
        <div class="mt-6 flex items-center gap-2 text-label-md font-label-md bg-white/20 w-fit px-3 py-1 rounded-full">
          <span class="material-symbols-outlined text-[16px]">trending_up</span>
          <span>+2.4% bulan ini</span>
        </div>
      </section>

      <!-- Stats Row -->
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/10">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-custom-income/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-custom-income text-[20px]">arrow_downward</span>
            </div>
            <span class="text-label-md font-label-md text-on-surface-variant">Pemasukan</span>
          </div>
          <p class="text-headline-md font-headline-md text-custom-income">
            Rp 8.2M
          </p>
        </div>
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/10">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-custom-expense/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-custom-expense text-[20px]">arrow_upward</span>
            </div>
            <span class="text-label-md font-label-md text-on-surface-variant">Pengeluaran</span>
          </div>
          <p class="text-headline-md font-headline-md text-custom-expense">
            Rp 3.7M
          </p>
        </div>
      </div>

      <!-- Quick Actions -->
      <section class="flex gap-4">
        <button
          @click="openModal('income')"
          class="flex-1 h-touch-target-min bg-custom-income text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <span class="material-symbols-outlined">add_circle</span>
          Pemasukan
        </button>
        <button
          @click="openModal('expense')"
          class="flex-1 h-touch-target-min bg-custom-expense text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <span class="material-symbols-outlined">remove_circle</span>
          Pengeluaran
        </button>
      </section>

      <!-- Recent Transactions -->
      <section class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-headline-md font-headline-md text-on-surface">
            Transaksi Terakhir
          </h3>
          <button class="text-primary font-bold text-body-md hover:underline">
            Lihat Semua
          </button>
        </div>
        <div class="space-y-3">
          <!-- Transaction Item 1 -->
          <div
            class="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/5 active:bg-surface-container transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                <span class="material-symbols-outlined text-primary">shopping_bag</span>
              </div>
              <div>
                <p class="font-bold text-on-surface text-body-lg">
                  Supermarket Indah
                </p>
                <p class="text-label-md font-label-md text-on-surface-variant">
                  Hari ini, 14:20
                </p>
              </div>
            </div>
            <p class="font-bold text-custom-expense text-body-lg">- Rp 250rb</p>
          </div>
          <!-- Transaction Item 2 -->
          <div
            class="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/5 active:bg-surface-container transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                <span class="material-symbols-outlined text-primary">payments</span>
              </div>
              <div>
                <p class="font-bold text-on-surface text-body-lg">
                  Gaji Bulanan
                </p>
                <p class="text-label-md font-label-md text-on-surface-variant">
                  Kemarin, 09:00
                </p>
              </div>
            </div>
            <p class="font-bold text-custom-income text-body-lg">+ Rp 7.5jt</p>
          </div>
          <!-- Transaction Item 3 -->
          <div
            class="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/5 active:bg-surface-container transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                <span class="material-symbols-outlined text-primary">restaurant</span>
              </div>
              <div>
                <p class="font-bold text-on-surface text-body-lg">
                  Makan Siang Enak
                </p>
                <p class="text-label-md font-label-md text-on-surface-variant">
                  20 Okt 2023
                </p>
              </div>
            </div>
            <p class="font-bold text-custom-expense text-body-lg">- Rp 120rb</p>
          </div>
        </div>
      </section>

      <!-- Insights Banner -->
      <section
        class="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-xl relative overflow-hidden group cursor-pointer active:scale-98 transition-transform">
        <div class="relative z-10">
          <h4 class="text-headline-md font-bold mb-1">Analisis Cerdas</h4>
          <p class="text-body-md opacity-90 max-w-[70%]">
            Pengeluaran makan kamu naik 15% minggu ini. Coba batasi?
          </p>
        </div>
        <span
          class="material-symbols-outlined absolute right-4 bottom-4 text-6xl opacity-20 transition-transform group-hover:scale-110">lightbulb</span>
      </section>
    </main>

    <!-- Bottom Navigation Component -->
    <BottomNavigation @open-add="openModal('expense')" />

    <!-- Modal Component -->
    <AddTransactionModal 
      :is-open="isModalOpen" 
      :initial-type="selectedType" 
      @close="isModalOpen = false" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Pastikan file AddTransactionModal.vue memang ada di dalam folder components/
import AddTransactionModal from '~/components/AddTransactionModal.vue'
import BottomNavigation from '~/components/BottomNavigation.vue'

const isModalOpen = ref(false)
const selectedType = ref('expense')

const openModal = (type = 'expense') => {
  selectedType.value = type
  isModalOpen.value = true
}
</script>