import axios from 'axios'
import create from 'zustand'

const showStore = create((set) => ({
    walletData: {},
    fetchTrxData: async (trxHash) => {
        const dataRes = await axios.get(`https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=${trxHash}&apikey=4IYR32DY2691TCN7PSXD5IFCEPJ1DDE91V`)
        console.log('show trx store', dataRes)
        const [walletData] = dataRes?.data?.result
        set({ walletData })
    }
}))

export default showStore