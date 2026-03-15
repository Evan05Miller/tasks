import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={(e) => {
                        setEditMode(e.target.checked);
                    }}
                />
                <label>Edit Mode</label>
            </div>

            {editMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <label>
                        student
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "" : "not "}a student
                </p>
            }
        </div>
    );
}
