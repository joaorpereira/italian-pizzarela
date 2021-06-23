import { useState } from "react";

const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = event => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return [form, setForm, handleInputChange];
};

export default useForm;
