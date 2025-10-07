import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Enhanced email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form and fix any errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await emailjs.send(serviceID, templateID, formData, userID);

      if (result.status !== 200) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);

      let errorMessage = "Failed to send message. Please try again.";

      if (error?.text?.includes("rate limit")) {
        errorMessage = "Too many requests. Please wait a moment before trying again.";
      } else if (error?.text?.includes("network")) {
        errorMessage = "Network error. Please check your connection and try again.";
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      const { [name]: removed, ...rest } = errors;
      setErrors(rest);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-darker-navy/50">
      <div className=" max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="bg-card border border-primary/20 rounded-xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-background border-primary/30 focus:border-primary ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-background border-primary/30 focus:border-primary ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                className={`bg-background border-primary/30 focus:border-primary ${
                  errors.subject ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="text-red-500 text-sm mt-1" role="alert">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message * ({formData.message.length}/1000)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={1000}
                className={`bg-background border-primary/30 focus:border-primary resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>
              )}
            </div>

            {/* Honeypot field for spam protection */}
            <input
            aria-label="anything"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              onChange={() => {}} // No-op, just a trap for bots
            />

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          {/* <div className="mt-8 pt-8 border-t border-primary/20 text-center">
            <p className="text-muted-foreground">Or email me directly at:</p>
            <a
              href="mailto:rsk30927@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-2"
            >
              <Mail className="w-4 h-4" />
              rsk30927@gmail.com
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
