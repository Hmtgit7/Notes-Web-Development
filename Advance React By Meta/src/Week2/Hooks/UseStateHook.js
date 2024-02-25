import { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={changeHandler}
          placeholder="goal"
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={changeHandler}
          placeholder="By....."
        />
        <button type="submit">Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.id}>
          <span>
            My goal is to{g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}


export default function useStateHook() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}