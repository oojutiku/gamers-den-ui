import React, { FC, FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from 'aws-amplify';
import Modal from './Modal';


interface RegisterProps { }

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  cpassword: ''
}

const Register: FC<RegisterProps> = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_STATE);
  
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    navigate(-1);
    setForm(INITIAL_STATE);
  }

  return (

    <Modal>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium  ">Display name</label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="Gamer123"
              autoFocus
              autoComplete='nickname'
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  ">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="name@company.com"
              autoComplete='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium  ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete='new-password'
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cpassword" className="block mb-2 text-sm font-medium">
              Confirm password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete='new-password'
              value={form.cpassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-red-700" href="/">Terms and Conditions</a></label>
            </div>
          </div>
          <button type="submit" className="w-full text-white bg-red-900 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
          <p className="text-sm font-light">
            Already have an account? <a href="/" className="font-medium text-red-700 hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </Modal>
  )
}

export default Register;
