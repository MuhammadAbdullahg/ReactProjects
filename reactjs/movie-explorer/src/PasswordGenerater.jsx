const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

  const isCounting = secondsLeft > 0;

  function handleGenerateOtp() {
    setOtp(generateOtp);
    setSecondsLeft(5);
  }

  useEffect(() => {
    if (!isCounting) {
      return;
    }

    const intervelId = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => prevSecondsLeft - 1);
    }, 1000);

    return () => clearInterval(intervelId);
  }, [isCounting]);
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp !== null ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p aria-live="assertive" id="otp-timer">
        {isCounting
          ? `Expires in: ${secondsLeft} seconds`
          : otp && "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        onClick={handleGenerateOtp}
        disabled={isCounting}
        id="generate-otp-button"
      >
        Generate OTP
      </button>
    </div>
  );
};
