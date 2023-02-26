import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import SignIn from "../../components/templates/Auth/SignIn";
import SignUp from "../../components/templates/Auth/SignUp";

import "./index.scss";



const Authentication = () => {

  const [isShow, setIsShow] = useState(true)

  const blockRef = useRef<HTMLDivElement>(null);

  const isToggler = () => {
    setIsShow((prev) => !prev)
    blockRef.current?.classList.toggle("Auth__form-block-active");
  }

  return (
    <div className="Auth">
      <div className='Auth__form'>
        <div className="Auth__form-controller">
          <div className='Auth__form-button' onClick={isToggler}>Sign Up</div>
          <div className='Auth__form-button' onClick={isToggler}>Sign In</div>
          <div className="Auth__form-block" ref={blockRef}></div>
        </div>
        {isShow ? (<SignUp />) : (<SignIn />)}
        <Link className='Auth__form-link' to="/reset">Forgot a password?</Link>
      </div>
    </div>
  )
}

export default Authentication