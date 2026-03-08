import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [tries, setTries] = useState(4);
    const [started, setStarted] = useState(false);

    function startQuiz() {
        setTries(tries - 1);
        setStarted(true);
    }

    function stopQuiz() {
        setStarted(false);
    }

    function mulligan() {
        setTries(tries + 1);
    }

    return (
        <div>
            <p>Attempts Remaining: {tries}</p>

            <Button onClick={startQuiz} disabled={started || tries === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!started}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={started}>
                Mulligan
            </Button>
        </div>
    );
}
