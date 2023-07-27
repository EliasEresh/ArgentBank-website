import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/user.actions";

function HeaderUser() {
  const user = useSelector((state) => state.userReducer.user);
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const dispatch = useDispatch();

  const changeName = (e) => {
    e.preventDefault();
    if (firstName === "" && lastName === "") {
      setEditName(!editName);
    } else {
      dispatch(updateUser(firstName, lastName));
      setEditName(!editName);
    }
  };

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
