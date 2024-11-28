'use client';

import React, { useState } from "react";
import logo from '@assets/Images/Logo.png';

import axios from "axios";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {redirect} from 'next/navigation';
export default function AdminLogin() {


  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      setError("Both fields are required.");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_mainURL}${import.meta.env.VITE_adminLoginUser}`, values)
      .then((res) => {
        console.log("TOKEN DATA",res);
        if(res.data){
          const token = res.data.token;
          console.log(token)
         
          const tokenExpiry = new Date(jwtDecode.exp * 1000);
          Cookies.set("authToken",token,{expires:tokenExpiry,secure:true});
         redirect('/dashboard');
        }else{
          alert("No Record Found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid credentials. Please try again.");
      });

    setError("");

    console.log("Login Attempted", values.email, values.password);

    handleLogin();
  };

  const handleLogin = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-dark p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-10 ">
          <div className="flex justify-center mb-6">
            <div className="rounded-full flex items-center justify-center">
              <img src={logo} className="h-10" alt="Company Logo" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
            Admin Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleInput}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-[#0a2647]"
                }`}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleInput}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-[#0a2647]"
                }`}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-custom-dark text-white py-2 px-4 rounded-md hover:bg-[#0d3a6a] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm text-white">
          <p>© one7sports 2024</p>
          <div className="mt-2">
            <a href="#" className="text-white">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
