import Link from 'next/link';
import { cookies } from 'next/headers';
import { getCookieData } from '@/helpers/token';
import LoginSuggestionPage from '../login-suggestion-page';

const ProfileData = () => {
  const cookieList = cookies();
  const decodedData = getCookieData(cookieList);

  if (!decodedData.success) return <LoginSuggestionPage />;

  const isAdmin = decodedData.data?.isAdmin;
  delete decodedData.data?.isAdmin;
  const userData = decodedData.data;

  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        <pre>{JSON.stringify(decodedData.data, null, 2)}</pre>
        {/* User Profile */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4">
          <h2 className="font-semibold text-xl text-center">
            <i className="fi fi-rr-user"></i> {userData.fullName}
          </h2>
          <div>
            <strong>User ID:</strong> {userData._id}
          </div>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Date of Birth:</strong> {userData?.dateOfBirth || 'Not set'}
          </div>
          <div>
            <strong>Profile Picture:</strong>{' '}
            {userData?.profilePicture || 'Not uploaded'}
          </div>
          <div>
            <strong>Conducted tests:</strong> {userData?.tests.conducted.length}
          </div>
          <div>
            <strong>Completed tests:</strong>{' '}
            {userData?.tests.completedTests.length}
          </div>
          {/* Add more profile details as needed */}
        </section>

        <section className="flex flex-col gap-4 w-full border rounded-xl p-4">
          <Link href="/auth/logout" className="btn btn-primary btn-outline">
            Log out
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProfileData;
