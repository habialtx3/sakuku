<template>
  <div v-if="isOpen">
    <!-- Overlay Back-drop (Klik di luar modal untuk menutup) -->
    <div
      class="fixed inset-0 bg-on-surface/40 backdrop-blur-[2px] z-50 transition-opacity"
      @click="$emit('close')"
    ></div>

    <!-- Bottom Sheet Modal -->
    <div
      id="bottomSheet"
      class="fixed bottom-0 left-0 right-0 z-[60] bg-surface-container-lowest rounded-t-[32px] shadow-2xl flex flex-col max-h-[92vh] bottom-sheet animate-slide-up"
    >
      <!-- Handle Bar -->
      <div class="w-full flex justify-center pt-3 pb-2 cursor-pointer" @click="$emit('close')">
        <div class="w-10 h-1.5 bg-outline-variant rounded-full"></div>
      </div>

      <!-- Header -->
      <div class="px-container-padding flex justify-between items-center mb-6">
        <h2 class="text-headline-md font-headline-md text-on-surface">
          Tambah Transaksi
        </h2>
        <button
          type="button"
          @click="$emit('close')"
          class="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
        >
          <span class="material-symbols-outlined text-on-surface-variant text-[20px]">close</span>
        </button>
      </div>

      <div class="px-container-padding overflow-y-auto custom-scrollbar pb-safe">
        <!-- Toggle Switch (Pengeluaran / Pemasukan) -->
        <div class="bg-surface-container-low rounded-full p-1.5 flex mb-8">
          <button
            type="button"
            @click="transactionType = 'expense'"
            :class="[
              'flex-1 py-2.5 rounded-full text-body-md font-semibold transition-all duration-300',
              transactionType === 'expense' ? 'bg-error text-white shadow-sm' : 'text-on-surface-variant'
            ]"
          >
            Pengeluaran
          </button>
          <button
            type="button"
            @click="transactionType = 'income'"
            :class="[
              'flex-1 py-2.5 rounded-full text-body-md font-semibold transition-all duration-300',
              transactionType === 'income' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant'
            ]"
          >
            Pemasukan
          </button>
        </div>

        <!-- Amount Input -->
        <div class="flex flex-col items-center mb-8">
          <div class="flex items-baseline gap-2 w-full justify-center">
            <span class="text-headline-md text-on-surface-variant font-bold">Rp</span>
            <input
              type="number"
              v-model="amount"
              placeholder="0"
              class="w-3/4 text-center bg-transparent border-none p-0 text-display-numeric font-display-numeric text-on-surface focus:ring-0 placeholder:text-outline-variant"
              autofocus
            />
          </div>
          <div class="w-32 h-1 bg-primary/10 rounded-full mt-2"></div>
        </div>

        <!-- Category Selector -->
        <div class="mb-6 items-center">
          <label class="text-label-md font-label-md text-on-surface-variant uppercase mb-3 block px-1">
            Kategori
          </label>
          <div class="flex gap-3 overflow-x-auto pb-2 custom-scrollbar items-center justify-center">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              @click="selectedCategory = category.id"
              :class="[
                'category-chip flex-shrink-0 flex flex-col items-center gap-2 group transition-all',
                selectedCategory === category.id ? 'active' : ''
              ]"
            >
              <div
                :class="[
                  'w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-active:scale-95',
                  selectedCategory === category.id
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container text-on-surface-variant'
                ]"
              >
                <span class="material-symbols-outlined">{{ category.icon }}</span>
              </div>
              <span
                :class="[
                  'text-label-md font-label-md transition-colors',
                  selectedCategory === category.id ? 'text-primary font-bold' : 'text-on-surface-variant'
                ]"
              >
                {{ category.name }}
              </span>
            </button>
          </div>
        </div>

        <!-- Additional Fields -->
        <div class="space-y-4 mb-8">
          <!-- Input Tanggal -->
          <div class="bg-surface-container-low rounded-2xl p-4 flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
            <span class="material-symbols-outlined text-outline">event</span>
            <div class="flex-1">
              <p class="text-label-md text-outline leading-none mb-1">Tanggal</p>
              <input
                type="date"
                v-model="transactionDate"
                class="w-full bg-transparent border-none p-0 text-body-md font-semibold text-on-surface focus:ring-0"
              />
            </div>
          </div>

          <!-- Input Catatan -->
          <div class="bg-surface-container-low rounded-2xl p-4 flex items-start gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
            <span class="material-symbols-outlined text-outline mt-1">notes</span>
            <div class="flex-1">
              <p class="text-label-md text-outline leading-none mb-1">Keterangan</p>
              <textarea
                rows="2"
                v-model="notes"
                placeholder="Tulis catatan di sini..."
                class="w-full bg-transparent border-none p-0 text-body-md text-on-surface focus:ring-0 resize-none placeholder:text-outline-variant"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pb-8">
          <button
            type="button"
            @click="handleSave"
            class="w-full h-touch-target-min bg-primary text-on-primary rounded-2xl font-bold text-body-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform duration-200 active:scale-95"
          >
            <span class="material-symbols-outlined text-[20px]">save</span>
            Simpan Transaksi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialType: {
    type: String,
    default: 'expense'
  }
})

const emit = defineEmits(['close', 'save'])

// Reactive Form States
const transactionType = ref(props.initialType)
const amount = ref('')
const selectedCategory = ref('transport')
const transactionDate = ref(new Date().toISOString().split('T')[0])
const notes = ref('')

// List Kategori Interaktif
const categories = [
  { id: 'food', name: 'Makanan', icon: 'restaurant' },
  { id: 'transport', name: 'Transportasi', icon: 'commute' },
  { id: 'salary', name: 'Gaji', icon: 'payments' },
  { id: 'shopping', name: 'Belanja', icon: 'shopping_cart' },
  { id: 'bills', name: 'Tagihan', icon: 'receipt_long' }
]

// Sinkronkan tipe pengeluaran/pemasukan jika diubah dari luar modal
watch(() => props.initialType, (newVal) => {
  transactionType.value = newVal
})

// Fungsi Simpan Transaksi
const handleSave = () => {
  const data = {
    type: transactionType.value,
    amount: amount.value,
    category: selectedCategory.value,
    date: transactionDate.value,
    notes: notes.value
  }
  
  console.log('Data Transaksi:', data)
  emit('save', data)
  emit('close')

  // Reset form setelah simpan
  amount.value = ''
  notes.value = ''
}
</script>

<style scoped>
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>