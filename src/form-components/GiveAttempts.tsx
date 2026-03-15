import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts Left: {attemptsLeft}</p>

            <input
                type="number"
                value={requestedAttempts}
                onChange={(event) => {
                    setRequestedAttempts(event.target.value);
                }}
            />

            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </button>

            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
