"use client" // indicates this is a client-side component
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MainPage() {
    const [mailValue, setMailValue] = useState<string>("") // initial email value
    const [passwordValue, setPasswordValue] = useState<string>("") // initial password value
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true) // button initially disabled
    const [submitted, setSubmitted] = useState<boolean>(false) // track form submission

    // function to update email value
    const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value)
    }

    // enable/disable button based on validation
    useEffect(() => {
        const emailValid = mailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        setIsButtonDisabled(!emailValid || passwordValue === "")
    }, [mailValue, passwordValue])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 20
            }}>
            <h1 style={{ marginBottom: '30px', fontSize: '30px' }}>
                Submit your data
            </h1>

            {/* Email field */}
            <TextField
                type="email"
                value={mailValue}
                onChange={onChangeMail}
                style={{ height: '30px', width: '300px', marginBottom: '20px' }}
                label="Email"
                error={mailValue !== "" && !mailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
                helperText={mailValue !== "" && !mailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "Invalid email" : ""}
            />

            {/* Password field */}
            <TextField
                type="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                style={{ height: '30px', width: '300px', marginBottom: '50px' }}
                label="Password"
            />

            {/* Submit button */}
            <Button
                variant='contained'
                color="primary"
                style={{
                    color: isButtonDisabled ? 'black' : 'white',
                    backgroundColor: isButtonDisabled ? 'grey' : 'blue',
                    marginBottom: '30px'
                }}
                onClick={() => setSubmitted(true)}
                disabled={isButtonDisabled} // disable button if form is invalid
            >
                Submit
            </Button>

            {/* Success message */}
            {submitted && <p>Successfully submitted!</p>}
        </div>
    );
}
