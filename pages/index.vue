<template>
  <!-- Satu div pembungkus utama (Parent) -->
  <div class="min-h-screen bg-background text-on-background pb-24">
    <!-- Header -->
    <header
      class="bg-surface dark:bg-surface flex justify-between items-center w-full px-container-padding h-16 sticky top-0 z-40">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
          <img class="w-full h-full object-cover" data-alt="Profile"
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
          <h2 class="text-display-numeric font-display-numeric">
            {{ (totalBalance ?? 0).toLocaleString('id-ID') }}
          </h2>
        </div>
        <div class="mt-6 flex items-center gap-2 text-label-md font-label-md bg-white/20 w-fit px-3 py-1 rounded-full">
          <span class="material-symbols-outlined text-[16px]">trending_up</span>
          <span>+2.4% bulan ini</span>
        </div>
      </section>

      <!-- Stats Row -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Card Pemasukan -->
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/10">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-custom-income/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-custom-income text-[20px]">arrow_downward</span>
            </div>
            <span class="text-label-md font-label-md text-on-surface-variant">Pemasukan</span>
          </div>
          <!--  Ubah di sini -->
          <p class="text-headline-md font-headline-md text-custom-income">
            Rp {{ (totalIncome ?? 0).toLocaleString('id-ID') }}
          </p>
        </div>

        <!-- Card Pengeluaran -->
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/10">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-custom-expense/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-custom-expense text-[20px]">arrow_upward</span>
            </div>
            <span class="text-label-md font-label-md text-on-surface-variant">Pengeluaran</span>
          </div>
          <!--  Ubah di sini -->
          <p class="text-headline-md font-headline-md text-custom-expense">
            Rp {{ (totalExpense ?? 0).toLocaleString('id-ID') }}
          </p>
        </div>
      </div>

      <!-- Quick Actions -->
      <section class="flex gap-4">
        <button @click="openModal('income')"
          class="flex-1 h-touch-target-min bg-custom-income text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <span class="material-symbols-outlined">add_circle</span>
          Pemasukan
        </button>
        <button @click="openModal('expense')"
          class="flex-1 h-touch-target-min bg-custom-expense text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <span class="material-symbols-outlined">remove_circle</span>
          Pengeluaran
        </button>
      </section>

      <!-- Recent Transactions -->
      <section class="space-y-3">
        <!-- State jika data masih kosong -->
        <div v-if="transactions.length === 0" class="text-center py-8 text-on-surface-variant">
          Belum ada transaksi tersimpan.
        </div>

        <!-- Loop Data Transaksi Dinamis -->
        <div v-for="(item, index) in transactions" :key="index"
          class="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/5">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
              <!-- Icon sesuai tipe/kategori -->
              <span class="material-symbols-outlined text-primary">
                {{ item.type === 'income' ? 'payments' : 'shopping_bag' }}
              </span>
            </div>
            <div>
              <p class="font-bold text-on-surface text-body-lg">
                {{ item.notes || item.category }}
              </p>
              <p class="text-label-md font-label-md text-on-surface-variant">
                {{ item.date }}
              </p>
            </div>
          </div>
          <!-- Formatting nominal dan warna berdasarkan tipe -->
          <p :class="[
            'font-bold text-body-lg',
            item.type === 'income' ? 'text-custom-income' : 'text-custom-expense'
          ]">
            {{ item.type === 'income' ? '+' : '-' }} Rp {{ item.amount.toLocaleString('id-ID') }}
          </p>
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
  </div>
</template>

<script setup>
import BottomNavigation from '~/components/BottomNavigation.vue';
import { useTransactions } from '~/composable/useTransactions';

// Import transactions dari composable
const { transactions, totalBalance, totalIncome, totalExpense } = useTransactions()
</script>