import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/auth/login`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Access token backend se aa raha ho to
      localStorage.setItem("accessToken", data.accessToken);

      alert("Login successful!");

      console.log("Logged in user:", data);
    } catch (error) {
      console.error(error);
      alert("Server se connection nahi ho raha");
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        {/* Apple-style Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-2xl"></span>
            </div>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Sign in
          </h1>

          <p className="mt-3 text-gray-500 text-base">
            Sign in to your account to continue.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-7 sm:p-9 shadow-sm">

          <form onSubmit={LoginUser} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-blue-600"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-500 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-blue-600 text-white font-medium transition-all duration-200 hover:bg-blue-700 active:scale-[0.98] shadow-sm"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="text-sm text-gray-400">
              or
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Apple Login */}
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-black text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-[0.98]"
          >
            <span className="text-xl"></span>
            Continue with Apple
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Create one
          </a>
        </p>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 Your Company. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default Login;
