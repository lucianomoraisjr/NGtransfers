export interface SearchTransactions {
    search: (data: SearchTransactions.Params) => Promise<SearchTransactions.Result>
}

export namespace SearchTransactions {
    export type Params = {
        type?: string
        page: number
        id: number
    }

    export type Result =
        [
            transactions: {
                type: string,
                username: string,
                value: number,
                date: Date,
               
            }[],
            amount: number,
            balance?:number
        ]
}