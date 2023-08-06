import { useState } from "react";

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: newValue,
    });
  };

  return {
    form,
    changed,
  };
};
