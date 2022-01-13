import React from "react";

const List = ({ familyMembers, removeFamilyMember }) => {
  return (
    <>
      {familyMembers.map((familyMember) => {
        const { id, name, age, image } = familyMember;
        return (
          <article key={id} className=" personContainer">
            <div className="person ">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years old </p>
              </div>
            </div>
            <div className="x">
              <button onClick={() => removeFamilyMember(id)}>x</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
