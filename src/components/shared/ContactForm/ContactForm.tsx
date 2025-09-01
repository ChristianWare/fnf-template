"use client";

import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FalseButton from "../FalseButton/FalseButton";
// import Corner from "../Corner/Corner";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  siteUrl?: string;
  projectDescription: string;
  services: string[];
}

const serviceOptions = [
  "Free booking audit (I already have a site)",
  "Solo Starter Booking",
  "Team Booking Platform",
  "Multi-Location Booking",
  "Rental Fleet & Inventory",
  "Custom enterprise solution",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    // Include selected services
    const formData = {
      ...data,
      services: selectedServices,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Thanks! I'll be in touch soon 😎");
    } else {
      toast.error("Opps! Please try again");
    }

    reset();
    setSelectedServices([]);
    setLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* <div className={styles.cornerContainer}>
        <Corner />
      </div> */}
      <div className={styles.namesContainer}>
        <div className={styles.labelInputBox}>
          <label htmlFor='firstName'>
            First Name <span className={styles.required}>*</span>
          </label>
          <input
            id='firstName'
            type='text'
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className={styles.error}>*** First Name is required</span>
          )}
        </div>
        <div className={styles.labelInputBox}>
          <label htmlFor='lastName'>
            Last Name <span className={styles.required}>*</span>
          </label>
          <input
            id='lastName'
            type='text'
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className={styles.error}>*** Last Name is required</span>
          )}
        </div>
      </div>
      <div className={styles.everythingElse}>
        <div className={styles.labelInputBox}>
          <label htmlFor='email'>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            id='senderEmail'
            type='email'
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            placeholder='So we can respond. We won&#39;t send you spam.'
            maxLength={500}
          />
          {errors.email && (
            <span className={styles.error}>*** Email is required</span>
          )}
        </div>

        <div className={styles.labelInputBox}>
          <label htmlFor='company'>Company</label>
          <input
            id='company'
            type='text'
            {...register("company")}
            placeholder='Your company name (if applicable)'
            maxLength={500}
          />
        </div>
        <div className={styles.labelInputBox}>
          <label htmlFor='siteUrl'>Current booking URL</label>
          <input
            id='siteUrl'
            type='url'
            {...register("siteUrl")}
            placeholder='https://example.com/book'
            maxLength={500}
          />
        </div>

        <div className={styles.labelInputBox}>
          <label htmlFor='projectDescription'>
            Project Description <span className={styles.required}>*</span>
          </label>
          <textarea
            id='projectDescription'
            maxLength={5000}
            {...register("projectDescription", { required: true })}
            placeholder='Tell us about your booking challenges or goals.'
          />
          {errors.projectDescription && (
            <span className={styles.error}>
              *** Project Description is required
            </span>
          )}
        </div>
        <div className={styles.servicesSection}>
          <label className={styles.servicesLabel}>
            What can we help you with?
          </label>

          <div className={styles.serviceButtons}>
            {serviceOptions.map((service) => {
              const checked = selectedServices.includes(service);

              return (
                <label
                  key={service}
                  className={`
            ${styles.serviceOption}    
            ${checked ? styles.selected : ""}
          `}
                >
                  <input
                    type='checkbox'
                    value={service}
                    {...register("services")}
                    checked={checked}
                    onChange={() => toggleService(service)}
                    className={styles.hiddenCheckbox}
                  />

                  <span className={styles.checkboxLabel}>{service}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.btnBtnContainer}>
        <FalseButton text={loading ? "Sending..." : "Submit"} btnType='blue' />
      </div>
    </form>
  );
}
