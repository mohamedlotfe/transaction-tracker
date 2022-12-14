import axios from 'axios'
import create from 'zustand'
import debounce from '../helpers/debounce'
const homeStore = create((set) => ({
    transactions: [],
    query: '',
    apikey: '4IYR32DY2691TCN7PSXD5IFCEPJ1DDE91V',

    setQeury: (e) => {
        set({ query: e.target.value })
        homeStore.getState().fetchTransaction();
    },
    fetchTransaction: debounce(async () => {
        const { query, apikey } = homeStore.getState();
        if (query) {
            const res = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&address=${query}&apikey=${apikey}`);
            console.log('res --->', res)
            const transactions = res?.data?.result
            set({ transactions })
        }
        


    }, 500),
 
    

}))
export default homeStore