import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactFormData = { name: "", email: "", message: "" };

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hook this up to an email service or API later.
    setSubmitted(true);
    setFormData(initialForm);
  };

  return { formData, submitted, handleChange, handleSubmit };
};
