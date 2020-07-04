import React from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp"

export default function Landing() {
    return (
        <div>
            <h1>Please sign in</h1>

            <SignIn/>

            <SignUp/>

        </div>
    )
}
