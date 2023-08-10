import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/action";

function HeaderUser() {
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state) => state.userReducer.token); // Va chercher le token dans le store
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const dispatch = useDispatch();

  const changeName = (e) => {
    e.preventDefault();
    if (firstName === "" && lastName === "") {
      setEditName(!editName);
    } else {
      dispatch(updateUser({ token, firstName, lastName })); // Met le token dans le updateUser
      setEditName(!editName);
    }
  }
  
  const cancel = (e) => {
    e.preventDefault();
    setEditName(false);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <span className={editName ? "sr-only" : " "}>
          {user.firstName} {user.lastName} !
        </span>
      </h1>
      {!editName && (
        <button
          className="edit-button"
          onClick={() => setEditName(!editName)}
        >
          Edit Name
        </button>
      )}
      {editName && (
        <form className="edit-profile">
          <div className="edit-firstName">
            <input
              type="text"
              value={firstName}
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value.toLowerCase())}
            />
            <button className="edit-button" onClick={(e) => changeName(e)}>
              Save
            </button>
          </div>
          <div className="edit-lastName">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.toLowerCase())}
            />
            <button className="edit-button" onClick={(e) => cancel(e)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default HeaderUser;
