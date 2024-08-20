import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerServiceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
        topic: 'General Inquiry'
    });

    const navigate = useNavigate();
    const nameInputRef = useRef(null); // Create a ref for the name input

    const topics = [
        'General Inquiry',
        'Order Status',
        'Product Inquiry',
        'Feedback'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/thank-you', { state: { ...formData } });
        nameInputRef.current.focus(); // Focus on the "Name" input after submission
    };

    return (
        <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Customer Service Form</h2>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        ref={nameInputRef} // Attach the ref to the input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md'
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Question</label>
                    <textarea
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium">Topic</label>
                    <select
                        name='topic'
                        value={formData.topic}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md'
                    >
                        {topics.map((topic, index) => (
                            <option key={index} value={topic}>
                                {topic}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CustomerServiceForm;