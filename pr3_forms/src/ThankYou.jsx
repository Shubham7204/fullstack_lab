import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const { state } = useLocation();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
      <p className="text-lg mb-6">We have received your message. Here are the details you provided:</p>
      <div className="text-left">
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Question:</strong> {state.question}</p>
        <p><strong>Topic:</strong> {state.topic}</p>
      </div>
      <p className="mt-6">We will get back to you shortly.</p>
    </div>
  );
};

export default ThankYou;