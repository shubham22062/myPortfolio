"use client";

import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      alert(data.message);

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div id="contact" className="mt-25 p-4">

      <h1 className="font-bold text-3xl">Get In touch</h1>

      <p className="text-gray-600 py-3">
        Whether it's a freelance gig, a collaboration, or a full-time
        opportunity, or want to say hi? I'm always excited to connect with
        people who love building meaningful things. Drop a message, and I'll
        get back to you as soon as I can!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-10">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 w-full sm:w-[200px] h-[70px] rounded-xl text-center outline-none text-black"
        />

        <input
          type="email"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 w-full sm:w-[300px] h-[70px] rounded-xl text-center outline-none text-black"
        />

      </div>

      <div className="pt-10">

        <textarea
          placeholder="Hi, Shubham are you up for this role..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-[200px] border-2 border-gray-300 bg-gray-100 rounded-xl p-4 outline-none resize-none text-black"
        />

      </div>

      <div className="pt-5">

        <button
          onClick={handleSubmit}
          className="border border-gray-800 rounded-xl bg-black w-full h-[50px] transition-transform duration-300 hover:scale-105 hover:bg-gray-900 text-white"
        >
          Send Message
        </button>

      </div>
    </div>
  );
}