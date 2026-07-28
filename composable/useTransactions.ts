// composables/useTransactions.ts
import { ref, computed, onMounted } from "vue";
import type { Transaction } from "~/types/transaction";

const STORAGE_KEY = "sakuku_transactions";

const transactions = ref<Transaction[]>([]);

export const useTransactions = () => {
  // Load data dari localStorage saat composable dipanggil
  const loadTransactions = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        try {
          transactions.value = JSON.parse(data);
        } catch (e) {
          console.error("Gagal parse localStorage:", e);
          transactions.value = [];
        }
      }
    }
  };

  // Simpan data ke localStorage
  const saveToStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions.value));
    }
  };

  // Function: Tambah Transaksi
  const addTransaction = (newTx: Omit<Transaction, "id" | "createdAt">) => {
    const item: Transaction = {
      ...newTx,
      id: crypto.randomUUID(), // Unique ID
      createdAt: Date.now(),
    };

    // Tambahkan ke urutan paling atas
    transactions.value.unshift(item);
    saveToStorage();
  };

  // Panggil load jika belum ada data
  if (transactions.value.length === 0) {
    loadTransactions()
  }
  
  // Function: Hapus Transaksi
  const deleteTransaction = (id: string) => {
    transactions.value = transactions.value.filter((t) => t.id !== id);
    saveToStorage();
  };

  // Computed Properties (Hitung otomatis Total, Pemasukan, Pengeluaran)
  const totalIncome = computed(() => {
    return transactions.value
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0);
  });

  const totalExpense = computed(() => {
    return transactions.value
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0);
  });

  const totalBalance = computed(() => {
    return totalIncome.value - totalExpense.value;
  });

  // Inisialisasi awal
  onMounted(() => {
    loadTransactions();
  });

  return {
    transactions,
    totalBalance,
    totalIncome,
    totalExpense,
    addTransaction,
    deleteTransaction,
  };
};
