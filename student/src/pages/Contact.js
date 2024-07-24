import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Form submitted successfully!');
   };

  return (
    <div style={{ "marginBottom":"90px"}}>
      <h1>Contact Us</h1>
      <h3>address: Near pune station pune 423434</h3>
      <p>contact: 9779977997</p>
      <p>email:springdale@gmail.com</p>
 
      <p>If you have any questions or need more information, feel free to contact us using the form below.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message", { required: true })}></textarea>
          {errors.message && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
