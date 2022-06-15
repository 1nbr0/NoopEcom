import React, { createContext, useContext } from "react";
import { auth } from "../../db";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const AnonymousAuth = onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInAnonymously(auth)
        .then(() => {
          console.log("User signed in anonymously");
        })
        .catch((error) => {
          if (error.code === "auth/operation-not-allowed") {
            console.log("Enable anonymous in your firebase console.");
          }

          console.error(error);
        });
    } else {
      console.log(user);
      const uid = user.uid;
    }
  });

  return (
    <AuthContext.Provider
      value={{
        AnonymousAuth,
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
