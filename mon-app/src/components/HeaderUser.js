import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, Profile } from "../redux/action";

function HeaderUser() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [userName, setUserName] = useState('');

  const token = userState.token;

  useEffect(() => {
    setUserName(userState.userName); // Set userName from state

    if (userState.isAuthenticated && !userState.connected) {
      console.log('Dispatching Profile action from HeaderUser component');
      dispatch(Profile(token));
    }
  }, [userState.userName, userState.isAuthenticated, userState.connected, dispatch, token]);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value); // Update userName on input change
  }

  const changeName = async (e) => {
    e.preventDefault();
    if (userName !== userState.userName) { // Only update if userName changed
      await dispatch(updateUser({ token, userName }));
    }
    setEditName(false);
  }

  const cancel = (e) => {
    e.preventDefault();
    setEditName(false);
    setUserName(userState.userName); // Reset userName to original value
  };

  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {userState.firstName} {userState.lastName} {"!"}
        {userState.isAuthenticated && (
          <span className={editName ? " " : "sr-only"}>
            {" "}
          </span>
        )}
      </h1>
      {!editName && userState.isAuthenticated && (
        <button
          className="edit-button"
          onClick={() => setEditName(true)}
        >
          Edit Name
        </button>
      )}
      {editName && userState.isAuthenticated && (
        <form className="edit-profile">
          <div className="edit-firstName">
            <input
              type="text"
              value={userName} // Display userName in the input field
              placeholder="Username"
              onChange={handleUserNameChange} // Call the handler on input change
            />
            <button className="edit-button" onClick={(e) => changeName(e)}>
              Save
            </button>
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
