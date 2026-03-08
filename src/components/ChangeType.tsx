import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType() {
        if (questionType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    let q = "";

    if (questionType === "multiple_choice_question") {
        q = "Multiple Choice";
    } else {
        q = "Short Answer";
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>{q}</div>
        </div>
    );
}
