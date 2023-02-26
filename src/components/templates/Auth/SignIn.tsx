//import hooks
import { useState } from "react";


//import lib for redirect after login
import { useNavigate } from "react-router-dom";


//import redux helpers for fetching login data
import { setUser } from "../../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/useReduxHooks";


//import material components
import { TextField } from "@mui/material";



const SignIn = () => {

  //state for login with email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  //redirect after login
  const redirect = useNavigate()

  const dispatch = useAppDispatch();


  //function for login
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const { user } = userCredential;
        user.getIdToken().then((accessToken: string) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: accessToken,
          }));
        });
        redirect('/home');
      })
      .catch(() => alert('Invalid error!'));
  }


  return (
    <div className="SignUp__box">
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth label="Email" margin="normal"   />
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" margin="normal"  />
      <button onClick={() => handleLogin(email, password)}>Sign In</button>
    </div>
  )
}

export default SignIn;