import { useState } from "react";

import { ISAuthField } from "pages/Authentication/Auth.interface";
import { setUser } from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../hooks/useReduxHooks";

//import firebase helpers
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";


//import lib for rounting and handle error fot form
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//import material ui components
import TextField from "@mui/material/TextField";

const SignUp = () => {

  //config react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<ISAuthField>({
    mode: "onChange",
  });


  //state for email and password
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");


  //for redirect after sign up
  const redirect = useNavigate();

  const dispatch = useAppDispatch();


  //function for fetching sign up data
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const { user } = userCredential;
        user.getIdToken().then((accessToken: string) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: accessToken,
            })
          );
        });
        redirect("/home");
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <div className="SignUp__box">
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        label="Email"
        margin="normal"
      />
      {errors?.email && (
        <p className="Auth__form-error">{errors.email.message}</p>
      )}
      <TextField
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        fullWidth
        label="Password"
        margin="normal"
      />
      <button onClick={() => handleRegister(email, pass)}>Register</button>
    </div>
  );
};

export default SignUp;
