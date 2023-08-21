import React, { useEffect, useState } from "react";
import axios from "axios";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false);
  const [sendClicked,setSendClicked]= useState(false)
  const [verifyClicked,setVerifyClicked] = useState(false)

  const [roll, setRoll] = useState("");
  const [otp, setOtp] = useState();
  const [ph, setPh] = useState();
  const [Loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('studentLogin')) navigate(roll)
  },[])

  useEffect(()=>{
    if(user){
      localStorage.setItem('studentLogin',JSON.stringify(1))
      navigate(roll)
    } 
  },[user])
  /* TRIAL */
  const handleTemp = e => {
    navigate(roll)
  }

  const getPhone = async (e) => {
    try {
      const res = await axios.post("http://localhost:5000/student",{roll});
      if (res.data) {
        setPh(res.data);
        setClicked(!clicked)
      }
      else{
        setRoll('')
        alert("Enrollment not found")
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(ph)
  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        setSendClicked(!sendClicked)
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function onOTPVerify() {
    setVerifyClicked(!verifyClicked)
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  if (clicked) {
    return (
      <div>
        <div id="recaptcha-container"></div>
        <OtpInput
          OTPLength={6}
          value={otp}
          onChange={setOtp}
          otpType="number"
          disabled={false}
          autoFocus
        />
        {/* <PhoneInput country={"in"} value={ph} onChange={setPh} /> */}
        {!sendClicked && <button onClick={onSignup}>Send Code</button>}
        {sendClicked && <button onClick={onOTPVerify}>Verify</button>}
      </div>
    );
  }
  return (
    <div>
      <h4>Student Signup</h4>
      <input
        type="text"
        placeholder="roll"
        value={roll}
        onChange={(e) => {setRoll(e.target.value)}}
      />
      <button 
      // onClick={getPhone}
      onClick={handleTemp}
      >CONFIRM</button>
    </div>
  );
};

export default Student;
