// ❗ The ✨ TASKS inside this component are NOT IN ORDER.
// ❗ Check the README for the appropriate sequence to follow.
import React from 'react'

// *STEP ONE* 
// bring in your required imports (import React was already done for you)
import { useState, useEffect } from "react";
// import axios from 'axios';
// import * as yup from yup;

// *STEP TWO*
// set initalValues using state. set up as annoymous function builiding an object with empty string
const startingData = () => ({
  username: "",
  favFood: "",
  favLanguage: "",
  agreement: false
})

//use to implement validation
const startingErrors = () => ({
  username: "",
  favFood: "",
  favLanguage: "",
  agreement: "", // this is empty string
})

const e = { // This is a dictionary of validation error messages.


  // username
  usernameRequired: 'username is required',
  usernameMin: 'username must be at least 3 characters',
  usernameMax: 'username cannot exceed 20 characters',
  // favLanguage
  favLanguageRequired: 'favLanguage is required',
  favLanguageOptions: 'favLanguage must be either javascript or rust',
  // favFood
  favFoodRequired: 'favFood is required',
  favFoodOptions: 'favFood must be either broccoli, spaghetti or pizza',
  // agreement
  agreementRequired: 'agreement is required',
  agreementOptions: 'agreement must be accepted',
}

// ✨ TASK: BUILD YOUR FORM SCHEMA HERE
// The schema should use the error messages contained in the object above.

// first step 

export default function App() {
  // ✨ TASK: BUILD YOUR STATES HERE
  // You will need states to track (1) the form, (2) the validation errors,
  // (3) whether submit is disabled, (4) the success message from the server,
  // and (5) the failure message from the server.

  const [data, setData] = useState(startingData());
  const [error, setErrors] = useState(startingErrors());

  //have to set up success and failure messages from the server being executed/submitted
  //if rendered correctly, if you add a string to intialize state you will see either:
  //success or failure message (should also remove the errors from the page if connected to your components correctly)
  const [serverSubmit, setServerSubmit] = useState();
  const [serverFailedSubmit, setServerFailedSubmit] = useState();



  // ✨ TASK: BUILD YOUR EFFECT HERE
  // Whenever the state of the form changes, validate it against the schema
  // and update the state that tracks whether the form is submittable.

  const onChange = evt => {
    // ✨ TASK: IMPLEMENT YOUR INPUT CHANGE HANDLER
    // The logic is a bit different for the checkbox, but you can check
    // whether the type of event target is "checkbox" and act accordingly.
    // At every change, you should validate the updated value and send the validation
    // error to the state where we track frontend validation errors.
  }

  const onSubmit = evt => {
    // ✨ TASK: IMPLEMENT YOUR SUBMIT HANDLER
    // Lots to do here! Prevent default behavior, disable the form to avoid
    // double submits, and POST the form data to the endpoint. On success, reset
    // the form. You must put the success and failure messages from the server
    // in the states you have reserved for them, and the form
    // should be re-enabled.
  }

  return (
    <div> {/* TASK: COMPLETE THE JSX */}
      <h2>Create an Account</h2>
      <form onSubmit={onSubmit}>
        {serverSubmit && <h4 className="success">{serverSubmit}</h4>} {/* setting these values to falsy will stop it from rendering on launch*/}
        {serverFailedSubmit && <h4 className="error">{serverFailedSubmit}</h4>} 

        <div className="inputGroup">
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" placeholder="Type Username" />
          { error.username && <div className="validation">{error.username}</div> }
        </div>

        <div className="inputGroup">
          <fieldset>
            <legend>Favorite Language:</legend>
            <label>
              <input type="radio" name="favLanguage" value="javascript" />
              JavaScript
            </label>
            <label>
              <input type="radio" name="favLanguage" value="rust" />
              Rust
            </label>
          </fieldset>
          { error.favLanguage && <div className="validation">{error.favLanguage}</div> }
        </div>

        <div className="inputGroup">
          <label htmlFor="favFood">Favorite Food:</label>
          <select id="favFood" name="favFood">
            <option value="">-- Select Favorite Food --</option>
            <option value="pizza">Pizza</option>
            <option value="spaghetti">Spaghetti</option>
            <option value="broccoli">Broccoli</option>
          </select>
            { error.favFood &&<div className="validation">{error.favFood}</div> }
        </div>

        <div className="inputGroup">
          <label>
            <input id="agreement" type="checkbox" name="agreement" />
            Agree to our terms
          </label>
           { error.agreement && <div className="validation">{error.agreement}</div> }
        </div>

        <div>
          <input type="submit" disabled={false} />
        </div>
      </form>
    </div>
  )
}
