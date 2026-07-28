<!-- pages/index.vue -->
<template>
  <div class="px-container-padding pt-4 space-y-6">
    <!-- Balance Overview Card -->
    <section class="relative overflow-hidden bg-primary-container rounded-xl p-6 shadow-sm text-on-primary-container">
      <p class="text-label-md font-label-md opacity-80 mb-1">Total Saldo</p>
      <div class="flex items-baseline gap-2">
        <span class="text-headline-md font-bold opacity-70">Rp</span>
        <h2 class="text-3xl font-bold">
          {{ (totalBalance ?? 0).toLocaleString('id-ID') }}
        </h2>
      </div>
    </section>

    <!-- Stats Row -->
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
        <span class="text-label-md text-on-surface-variant">Pemasukan</span>
        <p class="text-headline-md font-bold text-custom-income">
          Rp {{ (totalIncome ?? 0).toLocaleString('id-ID') }}
        </p>
      </div>

      <div class="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
        <span class="text-label-md text-on-surface-variant">Pengeluaran</span>
        <p class="text-headline-md font-bold text-custom-expense">
          Rp {{ (totalExpense ?? 0).toLocaleString('id-ID') }}
        </p>
      </div>
    </div>

    <!-- Recent Transactions dengan TransitionGroup -->
    <section class="space-y-3">
      <div v-if="transactions.length === 0" class="text-center py-8 text-on-surface-variant">
        Belum ada transaksi tersimpan.
      </div>

      <TransitionGroup v-else name="list" tag="div" class="space-y-3">
        <div v-for="(item, index) in transactions" :key="item.id || index"
          class="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/5">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">
                {{ item.type === 'income' ? 'payments' : 'shopping_bag' }}
              </span>
            </div>
            <div>
              <p class="font-bold text-on-surface text-body-lg">
                {{ item.notes || item.category }}
              </p>
              <p class="text-label-md text-on-surface-variant">
                {{ item.date }}
              </p>
            </div>
          </div>
          <p :class="['font-bold text-body-lg', item.type === 'income' ? 'text-custom-income' : 'text-custom-expense']">
            {{ item.type === 'income' ? '+' : '-' }} Rp {{ item.amount.toLocaleString('id-ID') }}
          </p>
        </div>
      </TransitionGroup>
    </section>
  </div>
</template>

<script setup>

// Paksa halaman ini menggunakan layout 'default'
definePageMeta({
  layout: 'default'
})
import { useTransactions } from '~/composable/useTransactions'
const { transactions, totalBalance, totalIncome, totalExpense } = useTransactions()
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-15px) scale(0.95);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>