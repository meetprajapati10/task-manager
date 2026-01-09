import React from "react";
import AuthVisuals from "./AuthVisuals";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12">
        <main className="w-full max-w-xl">
          <h2 className="text-3xl font-semibold">Task Manager</h2>
          {children}
        </main>
      </div>

      <div className="hidden lg:block relative h-full">
        <AuthVisuals />
      </div>
    </div>
  );
};

export default AuthLayout;
