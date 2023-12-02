import Link from 'next/link';

const LoginSuggestionPage = () => {
  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* Message */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4 text-center">
          <h2 className="font-semibold text-xl">
            <i className="fi fi-rr-lock"></i> Please Login
          </h2>
          <p className="text-gray-600">
            To access this page, please login to your account.
          </p>

          {/* Login Link */}
          <Link
            href="/auth/login"
            className="btn btn-primary font-semibold w-full"
          >
            Login
          </Link>

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

export default LoginSuggestionPage;
