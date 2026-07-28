<!-- pages/history.vue -->
<template>
  <div class="px-container-padding pb-6">
    <div class="py-6">
      <h2 class="text-headline-lg-mobile font-bold text-on-surface">Riwayat Transaksi</h2>
      <p class="text-body-md text-on-surface-variant mt-1">Kelola dan pantau aliran dana Anda</p>
    </div>

    <!-- Filter Chips -->
    <div class="flex gap-2 overflow-x-auto no-scrollbar pb-6">
      <button v-for="filter in filters" :key="filter.value" @click="activeFilter = filter.value" :class="[
        'px-4 py-2 rounded-full text-label-md font-label-md whitespace-nowrap transition-colors',
        activeFilter === filter.value ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface'
      ]">
        {{ filter.label }}
      </button>
    </div>

    <!-- Empty State -->
    <div v-if="filteredTransactions.length === 0" class="text-center py-12 text-on-surface-variant">
      <span class="material-symbols-outlined text-4xl mb-2 opacity-50">receipt_long</span>
      <p>Tidak ada transaksi ditemukan.</p>
    </div>

    <!-- List Transaksi dengan TransitionGroup yang Benar -->
    <TransitionGroup v-else name="list" tag="div" class="space-y-3">
      <div v-for="(item, index) in filteredTransactions" :key="item.id || index"
        class="bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between shadow-sm border border-outline-variant/10">

        <div class="flex items-center gap-4">
          <div :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center',
            item.type === 'income' ? 'bg-secondary-container text-primary' : 'bg-error-container text-error'
          ]">
            <span class="material-symbols-outlined">
              {{ item.type === 'income' ? 'payments' : 'shopping_bag' }}
            </span>
          </div>
          <div>
            <h4 class="text-body-lg font-bold text-on-surface">
              {{ item.notes || item.category }}
            </h4>
            <p class="text-label-md text-on-surface-variant">
              {{ item.date }} • <span class="capitalize">{{ item.category }}</span>
            </p>
          </div>
        </div>

        <div class="text-right flex items-center gap-3">
          <span :class="['text-body-lg font-bold', item.type === 'income' ? 'text-primary' : 'text-error']">
            {{ item.type === 'income' ? '+' : '-' }}Rp {{ item.amount.toLocaleString('id-ID') }}
          </span>

          <button @click="deleteTransaction(index)" class="text-outline-variant hover:text-error transition-colors">
            <span class="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
// Paksa halaman ini menggunakan layout 'default'
definePageMeta({
  layout: 'default'
})
import { ref, computed } from 'vue'
import { useTransactions } from '~/composable/useTransactions'

const { transactions, deleteTransaction } = useTransactions()

const activeFilter = ref('all')
const filters = [
  { label: 'Semua', value: 'all' },
  { label: 'Pengeluaran', value: 'expense' },
  { label: 'Pemasukan', value: 'income' }
]

const filteredTransactions = computed(() => {
  if (activeFilter.value === 'all') return transactions.value
  return transactions.value.filter(t => t.type === activeFilter.value)
})
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