import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (username.trim() === "" || password.trim() === "") {
      setError("Both username and password are required!");
      return;
    }

    setError(""); // clear error message
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Login successful (check console for output)");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // update state on input
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // update state on input
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {error && (
          <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
