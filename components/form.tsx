import React from 'react';
import InputField from './input-field';

interface FormProps {
    formData: {
        name: string;
        startDate: string;
        endDate: string;
        message: string;
        link: string,
        pricing: string,
    };
    errors: {
        name?: string;
        startDate?: string;
        endDate?: string;
        message?: string;
        link?: string,
        pricing?: string,
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ formData, errors, handleChange, handleSubmit, isLoading }) => {
    return (
        <form onSubmit={handleSubmit} className=' w-3/4 mx-auto py-24 space-y-4'>
            <InputField
                type="text"
                name="name"
                placeholder="Bounty Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <div className="flex items-center justify-center gap-[16px]">
                <div className="flex flex-col w-full">
                    <p className="text-white mb-2">Start Date</p>
                    <InputField
                        type="date"
                        name="startDate"
                        placeholder="Start Date"
                        value={formData.startDate}
                        onChange={handleChange}
                        error={errors.startDate}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <p className="text-white mb-2">End Date</p>
                    <InputField
                        type="date"
                        name="endDate"
                        placeholder="End Date"
                        value={formData.endDate}
                        onChange={handleChange}
                        error={errors.endDate}
                    />
                </div>
            </div>
            <InputField
                type="text"
                name="pricing"
                placeholder="pricing"
                value={formData.pricing}
                onChange={handleChange}
                error={errors.pricing}
            />
            <InputField
                type="text"
                name="link"
                placeholder="link"
                value={formData.link}
                onChange={handleChange}
                error={errors.link}
            />

            <InputField
                type="textarea"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
            />
            <button type='submit' className='bg-purple-950 px-4 py-2 w-full rounded-[8px]' disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;
