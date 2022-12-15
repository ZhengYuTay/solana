import React from "react";
import { Link } from "react-router-dom";
import { TransactionSignature } from "@solana/web3.js";
import { clusterPath } from "utils/url";
import { Copyable } from "./Copyable";

type Props = {
  signature: TransactionSignature;
  alignRight?: boolean;
  link?: boolean;
  truncate?: boolean;
  truncateChars?: number;
};

export function Signature({
  signature,
  alignRight,
  link,
  truncate,
  truncateChars,
}: Props) {
  let signatureLabel = signature;

  if (truncateChars) {
    signatureLabel = signature.slice(0, truncateChars) + "…";
  }

  return (
    <div
      className={`d-flex align-items-center ${
        alignRight ? "justify-content-end" : ""
      }`}
    >
      <Copyable text={signature} replaceText={!alignRight}>
        <span className="font-monospace">
          {link ? (
            <a
              className={truncate ? "text-truncate signature-truncate" : ""}
              href={`https://solscan.io/tx/${signature}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {signatureLabel}
            </a>
          ) : (
            signatureLabel
          )}
        </span>
      </Copyable>
    </div>
  );
}
