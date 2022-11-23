import { TransferController } from '@/application/controllers'
import { makeDbSaveTransactions } from '@/main/factories/data/usecases/db-save-transactions'
export const makeTransferController = (): TransferController => {
  return new TransferController(
        makeDbSaveTransactions()
  )
}
