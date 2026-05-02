import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handlegenerator() {
    setQrCode(input);
  }
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handlegenerator}>Qr Code Generator</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} bgColor="#fff" />
      </div>
    </div>
  );
}
