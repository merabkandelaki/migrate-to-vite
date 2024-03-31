import React, { useState } from 'react';
import styles from "./CreateFishForm.module.css";

const CreateFishForm = ({ onFishSubmit }) => {
  const [fishForm, setFishForm] = useState({
    region: "",
    scientificName: "",
    name: "",
    img: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFishForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (!Object.keys(errors).length) {
      onFishSubmit(fishForm);
      // Reset form
      setFishForm({
        region: "",
        scientificName: "",
        name: "",
        img: "",
      });
    } else {
      console.log("Form is invalid");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (fishForm.region.trim() === "") {
      errors.region = "Region is required!";
    }

    if (fishForm.scientificName.trim() === "") {
      errors.scientificName = "ScientificName is required!";
    }

    if (fishForm.name.trim() === "") {
      errors.name = "Name is required!";
    }

    if (fishForm.img.trim() === "") {
      errors.img = "Image URL is required!";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.create_fish_form}>
      <label className={styles.create_fish_form_label}>
        Region:
        <input
          type="text"
          name="region"
          value={fishForm.region}
          onChange={handleChange}
          className={styles.create_fish_form_input}
        />
      </label>
      {formErrors.region && (
        <span className={styles.create_fish_form_error}>
          {formErrors.region}
        </span>
      )}
      <br />
      <br />
      <label className={styles.create_fish_form_label}>
        ScientificName:
        <input
          type="text"
          name="scientificName"
          value={fishForm.scientificName}
          onChange={handleChange}
          className={styles.create_fish_form_input}
        />
        {formErrors.scientificName && (
          <span className={styles.create_fish_form_error}>
            {formErrors.scientificName}
          </span>
        )}
      </label>
      <br />
      <br />
      <label className={styles.create_fish_form_label}>
        Name:
        <input
          type="text"
          name="name"
          value={fishForm.name}
          onChange={handleChange}
          className={styles.create_fish_form_input}
        />
        {formErrors.name && (
          <span className={styles.create_fish_form_error}>
            {formErrors.name}
          </span>
        )}
      </label>
      <br />
      <br />
      <label className={styles.create_fish_form_label}>
        Image URL:
        <input
          type="text"
          name="img"
          value={fishForm.img}
          onChange={handleChange}
          className={styles.create_fish_form_input}
        />
        {formErrors.img && (
          <span className={styles.create_fish_form_error}>
            {formErrors.img}
          </span>
        )}
      </label>
      <br />
      <br />
      <button type="submit" className={styles.create_fish_form_button}>
        Create Fish
      </button>
    </form>
  );
};

export default CreateFishForm;
