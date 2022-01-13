import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [familyMembers, setFamilyMembers] = useState(data);
  const removeFamilyMember = (id) => {
    let remainingMembers = familyMembers.filter(
      (familyMember) => familyMember.id !== id
    );
    setFamilyMembers(remainingMembers);
  };

  return (
    <main>
      <section className="container">
        <h3>{familyMembers.length} Birthdays today</h3>
        <List
          familyMembers={familyMembers}
          removeFamilyMember={removeFamilyMember}
        />
        <button onClick={() => setFamilyMembers([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
