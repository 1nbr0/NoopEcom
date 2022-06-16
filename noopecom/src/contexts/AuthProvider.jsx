import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../db";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const anonymousAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => {
            console.log("User signed in anonymously");
            setCurrentUser(user);
          })
          .catch((error) => {
            if (error.code === "auth/operation-not-allowed") {
              console.log("Enable anonymous in your firebase console.");
            }
            console.error(error);
          });
      } else {
        const uid = user.uid;
        setCurrentUser(uid);
      }
    });
    return () => anonymousAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
