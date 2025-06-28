import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [form, setForm] = useState({ name: '', age: '', hobby: '', inspiration: '' });
  const [message, setMessage] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/entries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage('Submission received!');
        setForm({ name: '', age: '', hobby: '', inspiration
