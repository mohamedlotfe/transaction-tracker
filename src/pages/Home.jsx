import React, { useEffect } from "react";
import homeStore from "../stores/homeStore";
import Header from "../components/Header";
import TrxItem from "../components/TrxItem";

export default function Home() {
  const store = homeStore();

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Search By Address</h2>
          <input
            type="text"
            placeholder="Enter Address"
            value={store.query}
            onChange={store.setQeury}
          />
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2>Transactions List</h2>
          <div className="home-crypto-list">
            {store?.transactions.map((trx) => {
              return <TrxItem key={trx.timeStamp} trx={trx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
