import React from "react";
import QRCode from "qrcode.react";
function QrGenerator() {
  const [qrcode, setQrcode] = React.useState("");
  const [input, setInput] = React.useState("");

  const handleGenerateQrCode = () => {
    setQrcode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your Value"
          value={input}
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>

        <div>
          <QRCode
            id="qr-code-value"
            value={qrcode}
            size={300}
            bgColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
