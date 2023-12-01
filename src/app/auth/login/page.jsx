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

const LoginPage = () => {
  const [inputs, setInputs] = useState(initialValues);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    const tid = toast.loading('Processing');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(inputs),
      });
      const body = await response.json();

      if (response.status === 201) {
        toast.success('Registered successfully', { id: tid });
        router.push('/');
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
        {/* Login Form */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4">
          <h2 className="font-semibold text-xl text-center">
            <i className="fi fi-rr-key"></i> Login
          </h2>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className="input w-full mt-2 bg-gray-200"
              placeholder="Enter your email"
              onChange={handleChange}
              value={inputs.email}
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              className="input w-full mt-2 bg-gray-200"
              placeholder="Enter your password"
              onChange={handleChange}
              value={inputs.password}
            />
          </label>

          <button
            className="btn btn-primary font-semibold w-full"
            onClick={handleSubmit}
          >
            Login
          </button>

          <div className="my-2 divider text-gray-700 before:bg-gray-300 after:bg-gray-300 ">
            OR
          </div>

          {/* Register Link */}
          <div className="flex justify-center items-center w-full">
            <p>
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
