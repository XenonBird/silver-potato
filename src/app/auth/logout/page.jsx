'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// LogoutPage component
const LogoutPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logoutHandler = async () => {
    const tid = toast.loading('Logging out');
    setLoading(true);
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
      });
      const body = await response.json();

      if (response.status === 200) {
        toast.success('Logged out successfully', { id: tid });
        router.push('/profile');
        router.refresh();
      } else {
        toast.error(body.message, { id: tid });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: tid });
    }

    setLoading(false);
  };

  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* Logout Message */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4 text-center">
          <h2 className="font-semibold text-xl">
            <i className="fi fi-rr-lock"></i> Logging Out
          </h2>
          <p className="text-gray-600">
            {loading
              ? 'Logging out, please wait...'
              : 'Do you really want to log out?'}
          </p>

          {/* Home Link */}
          <button
            className={`btn ${
              loading ? 'btn-disabled' : 'btn-warning'
            } font-semibold w-full`}
            onClick={logoutHandler}
          >
            {loading ? 'Processing' : 'Log out'}
          </button>
        </section>
      </div>
    </main>
  );
};

export default LogoutPage;
