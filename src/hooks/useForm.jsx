import { useState } from "react";

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }) => {
    const { name, value, checked } = target;
    setForm({
      ...form,
      [name]: checked ? checked : (checked == false ? checked : value),
    });
  };

  return {
    form,
    changed,
  };
};
