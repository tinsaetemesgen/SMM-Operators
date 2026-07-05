import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactFormData = { name: "", email: "", message: "" };

const DEST_EMAIL = "smmoperators.contact@gmail.com";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    const subject = `New inquiry from ${formData.name || "SMM Operators visitor"}`;
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n`;

    const mailto = `mailto:${DEST_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Give the UI a beat to show the loading state, then open mail client.
    window.setTimeout(() => {
      setSubmitted(true);
      setFormData(initialForm);
      setIsSending(false);
      window.location.href = mailto;
    }, 450);
  };

  return { formData, submitted, isSending, handleChange, handleSubmit };
};
