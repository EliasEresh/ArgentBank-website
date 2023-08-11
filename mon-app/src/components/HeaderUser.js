import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/action";

function HeaderUser() {
  const userState = useSelector((state) => state.user); // Access the user state from userSlice
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState(userState.firstName);
  const [lastName, setLastName] = useState(userState.lastName);

  const token = userState.token;

  const changeName = (e) => {
    e.preventDefault();
    if (firstName === "" && lastName === "") {
      setEditName(!editName);
    } else {
      dispatch(updateUser({ token, firstName, lastName }));
      setEditName(!editName);
    }
  }

  const cancel = (e) => {
    e.preventDefault();
    setEditName(false);
    setFirstName(userState.firstName);
    setLastName(userState.lastName);
  };

  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {userState.isAuthenticated && (
          <span className={editName ? "sr-only" : " "}>
            {firstName} {lastName} !
          </span>
        )}
      </h1>
      {!editName && userState.isAuthenticated && (
        <button
          className="edit-button"
          onClick={() => setEditName(!editName)}
        >
          Edit Name
        </button>
      )}
      {editName && userState.isAuthenticated && (
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
