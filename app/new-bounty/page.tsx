'use client'

// Import necessary libraries and components
import React, { useState } from 'react';
import Form from '@/components/form'; // Adjust the import path as needed
import toast from 'react-hot-toast';

interface FormProps {
    name: string;
    startDate: string;
    endDate: string;
    message: string;
    link: string;
    pricing: string;
}

const NewBounty: React.FC = () => {
    const [formData, setFormData] = useState<FormProps>({
        name: '',
        startDate: '',
        endDate: '',
        message: '',
        link: '',
        pricing: ''
    });

    const [errors, setErrors] = useState<Partial<FormProps>>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Placeholder comment for your specific logic
        // Your existing handleSubmit logic here

        setIsLoading(true);

        try {
            const response = await fetch("/api/sheets", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Assuming you have a toast library for notifications
                toast.success("Aa gaya bhai ! ");

                setFormData({
                    name: '',
                    startDate: '',
                    endDate: '',
                    message: '',
                    link: '',
                    pricing: ''
                });
            } else {
                // Handle error response
                toast.error("Something went wrong!");
            }
        } catch (error) {
            // Handle fetch error
            toast.error("An error occurred!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='min-h-screen'>
            <div className="container px-5 py-32 mx-auto">
                <Form
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};

export default NewBounty;
