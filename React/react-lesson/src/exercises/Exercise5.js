"use client";
import styles from "./Exercise5.module.css";
import { useState } from "react";

export default function AppExercise() {
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState("");
  const [changedName, setChangedName] = useState("");
  const [nameIndex, setNameIndex] = useState();

  const addName = () => {
    if (newName.trim()) {
      setName([...name, newName]);
      setNewName("");
    }
  };

  const removeName = (indexToRemove) => {
    setName((prevName) =>
      prevName.filter((_, index) => index != indexToRemove)
    );
  };

  const updateName = () => {
    if (changedName.trim()) {
      setName((prevName) => {
        return prevName.map((name, index) =>
          index == nameIndex ? changedName : name
        );
      });
      setChangedName(null);
      setNameIndex(null);
    }
  };

  console.log("changeName:", changedName);
  console.log("nameIndex:", nameIndex);

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.nameInput}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <button className={styles.addNameBtn} type="button" onClick={addName}>
          Add name
        </button>
        {nameIndex != null || nameIndex != undefined ? (
          <div style={{ marginTop: 10 }}>
            <input
              className={styles.nameInput}
              value={changedName}
              onChange={(e) => setChangedName(e.target.value)}
            />
            <button
              className={styles.updateNameBtn}
              type="button"
              onClick={updateName}
            >
              Updat Name
            </button>

            <button
              className={styles.cancleBtn}
              onClick={() => {
                setNameIndex(null);
                setChangedName(null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : null}

        <ul className={styles.nameList}>
          {name.length > 0 ? (
            name.map((name, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.nameStyle}>{name}</span>
                <button
                  className={styles.editBtn}
                  onClick={() => {
                    setNameIndex(index);
                    setChangedName(name);
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeName(index)}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li>No task available</li>
          )}
        </ul>
      </div>
    </div>
  );
}
