'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const initialValues = {
  email: '',
  password: '',
  fullName: '',
  username: '',
};

const RegisterPage = () => {
  const [inputs, setInputs] = useState(initialValues);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    const tid = toast.loading('Processing');
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(inputs),
      });
      const body = await response.json();
      console.log({ body });

      if (response.status === 201) {
        toast.success('Registered successfully', { id: tid });
        router.push('/');
        router.refresh();
      } else {
        toast.error(body.message, { id: tid });
      }
    } catch (error) {
      toast.error('Some thing went wrong', { id: tid });
    }
  };

  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* Register Form */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4">
          <h2 className="font-semibold text-xl text-center">
            <i className="fi fi-rr-user-plus"></i> Register
          </h2>
          <label htmlFor="fullName">
            Full Name:
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input w-full mt-2 bg-gray-200"
              placeholder="Jhon doe"
              onChange={handleChange}
              value={inputs.fullName}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className="input w-full mt-2 bg-gray-200"
              placeholder="jhon.doe@example.com"
              onChange={handleChange}
              value={inputs.email}
            />
          </label>

          <label htmlFor="password">
            New Password:
            <input
              type="password"
              id="password"
              name="password"
              className="input w-full mt-2 bg-gray-200"
              placeholder="*******"
              onChange={handleChange}
              value={inputs.password}
            />
          </label>
          <label htmlFor="username">
            Choose a username:
            <input
              type="text"
              id="username"
              name="username"
              className="input w-full mt-2 bg-gray-200"
              placeholder="jhon_doe"
              onChange={handleChange}
              value={inputs.username}
            />
          </label>

          <button
            className="btn btn-primary font-semibold w-full"
            onClick={handleSubmit}
          >
            Register
          </button>

          <div className="my-2 divider text-gray-700 before:bg-gray-300 after:bg-gray-300">
            OR
          </div>

          {/* Login Link */}
          <div className="flex justify-center items-center w-full">
            <p>
              Already have an account?{' '}
              <Link
                href="/auth/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
