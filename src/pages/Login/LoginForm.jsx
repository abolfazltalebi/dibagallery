import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("please enter your username and password.");
      return;
    }
    console.log("login by :", { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        login to diba gallery
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full sm:w-[90%]">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300 capitalize"
          >
            user name :
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#E58411]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 capitalize"
          >
            password :
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#E58411]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E58411] text-white font-bold py-2 rounded "
        >
          Login
        </button>
      </form>
    </div>
  );
}
