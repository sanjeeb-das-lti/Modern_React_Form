import React from 'react'
import study from "./assets/studdy2.jpg"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { motion as m } from 'framer-motion';

const App = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: 'India',
      terms: false
    },
    //Validation Handler
    validationSchema: Yup.object({
      name: Yup.string().max(20, "Name must be 20 characters or less").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      terms: Yup.boolean().isTrue("Terms of Service is not checked").required("Terms of Service is required")
    }),
    //Submit Handler
    onSubmit: (values) => {
      navigate("/success", { state: values })
    }
  });
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-screen flex justify-center items-center bg-cyan-600'>
      <form onSubmit={formik.handleSubmit} className='flex rounded-lg w-1/2 bg-white'>
        <div className='flex-1 text-gray-700 flex-col font-lato p-10'>
          <h1 className='font-medium text-3xl pb-2'>Let's get started 🙋🏼</h1>
          <p className='text-lg text-gray-500'>Join our e-learning platform today and unlock over 500+ courses and digital assests ready to download.</p>
          <div className='mt-2'>
            {/* Name input field */}
            <div className='pb-4'>
              <label
                htmlFor="name"
                className={`pb-2 text-sm block ${formik.touched.name && formik.errors.name ? 'text-red-500' : ''}`}>
                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
              </label>
              <input className='p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Email input field */}
            <div className='pb-4'>
              <label htmlFor="email" className={`pb-2 text-sm block ${formik.touched.email && formik.errors.email ? 'text-red-500' : ''}`}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
              </label>
              <input className='p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'
                type="email"
                name="email"
                id="email"
                placeholder='Enter your email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Country input field */}
            <div className='pb-4'>
              <label htmlFor="email" className='pb-2 text-sm block'>Country</label>
              <select
                value={formik.values.country}
                onChange={formik.handleChange}
                name="country"
                className='p-2 border-2 border-gray-500 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'>
                <option>India</option>
                <option>SriLanka</option>
                <option>Bhutan</option>
                <option>Nepal</option>
                <option>Bangladesh</option>
              </select>
            </div>
            {/* Terms input field */}
            <div className='pb-4'>
              <label
                htmlFor="terms"
                className={`pb-2 text-sm block ${formik.touched.terms && formik.errors.terms ? "text-red-500" : ""}`}>
                {formik.touched.terms && formik.errors.terms ? formik.errors.terms : 'Terms of Service'}
              </label>
              <div className='flex gap-2 items-center'>
                <input
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="checkbox"
                  name="terms"
                  className='text-teal-500 h-5 w-5 border-2 focus:border-teal-500 focus:ring-teal-500' />
                <p className='text-sm text-gray-500'>I agree to the Terms and Service that my data will be taken and sold. </p>
              </div>
            </div>
            <button type='submit' className='bg-teal-500 text-lg text-white py-3 mt-6 rounded-lg w-full'>Start learning today!</button>
          </div>
        </div>
        <div className='flex-1 items-center'>
          <img src={study} alt="learn" className='h-full w-full object-cover' />
        </div>
      </form>
    </m.main>
  )
}

export default App