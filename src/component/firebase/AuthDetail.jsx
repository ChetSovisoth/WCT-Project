import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AuthDetail() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () =>
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => console.log(error));
  return (
    <div>
      {authUser ? (
        <>
          <p>(Signed In as{authUser.email})</p>
          <button onClick={userSignOut}>Log Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}

export default AuthDetail;