import React from "react";
import { Link } from "react-router-dom";
import {
  convertedDate,
  convertedValue,
  transactionStatus,
} from "../helpers/utilities";
export default function TrxItem({ trx }) {
  return (
    <div className="home-crypto">
      <Link to={`/${trx?.hash}`}>
        <span className="home-crypto-name">
          <strong>Transaction hash: </strong>
          {trx?.hash}
        </span>
        <span className="home-crypto-name">
          <strong>Received time: </strong>
          {convertedDate(trx?.timeStamp)}
        </span>
        <span className="home-crypto-name">
          <strong>Statu: </strong>
          {transactionStatus(trx?.txreceipt_status)}
        </span>
        <span className="home-crypto-name">
          <strong>blockNumber: </strong>
          {trx?.blockNumber}
        </span>
       
        {trx?.value && (
          <span className="home-crypto-prices">
            <span className="home-crypto-btc">
              <img src="/ether.png" alt="img ether" />
              {`${convertedValue(trx?.value)}`} ETH
            </span>
          </span>
        )}
      </Link>
    </div>
  );
}
