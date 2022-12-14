import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import showStore from "../stores/showStore";
import Header from "../components/Header";
import {
  convertedDate,
  convertedValue,
  transactionStatus,
} from "../helpers/utilities";

export default function Show() {
  const store = showStore();
  const params = useParams();
  useEffect(() => {
    store.fetchTrxData(params.id);
    console.log(params);
  }, []);

  return (
    <>
      <Header back />
      <header>
        <div className="width">
          <h2>The Transactions details</h2>
        </div>
      </header>
      <div >
        <div className="flex-fill p-2 blockchain-txns-blocknumber">
          <strong>Block Number: </strong>
          {`${store.walletData.blockNumber}`}
        </div>

        <div className="flex-fill p-2 blockchain-txns-timestamp">
          <strong>Received time: </strong>
          {convertedDate(store.walletData.timeStamp)}
        </div>
        <div className="flex-fill p-2 blockchain-txns-from">
          <strong>Transaction From: </strong>
          {`${store.walletData.from}`}
        </div>
        <div className="flex-fill p-2 blockchain-txns-to">
          <strong>Transaction To: </strong>
          {`${store.walletData.to}`}
        </div>
        {store?.walletData?.value && (
          <div className="flex-fill p-2 blockchain-txns-value">
            <strong>value: </strong>{" "}
            {`${convertedValue(store?.walletData?.value)}`} ETH
          </div>
        )}
      </div>
    </>
  );
}
