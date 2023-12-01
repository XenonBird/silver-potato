import Link from 'next/link';

const ProfileData = () => {
  // const ProfileData = ({ userData }) => {
  const userData = {
    username: 'xenon_bird',
    email: 'bird.xenon@gmail.com',
    fullName: 'Xenon Bird',
    profilePicture: '',
    registrationDate: '2023-12-01T06:11:06.164Z',
    tests: { conducted: [], completedTests: [] },
    _id: '656978fa16ed04038bb328d4',
    isAdmin: false,
    iat: 1701421203,
    exp: 1702026003,
  };

  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* User Profile */}
        <section className="flex flex-col gap-4 w-full border rounded-xl p-4">
          <h2 className="font-semibold text-xl text-center">
            <i className="fi fi-rr-user"></i> User Profile
          </h2>
          <div>
            <strong>User ID:</strong> {userData?._id}
          </div>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Full Name:</strong> {userData.fullName}
          </div>
          <div>
            <strong>Date of Birth:</strong> {userData?.dateOfBirth || 'Not set'}
          </div>
          <div>
            <strong>Profile Picture:</strong>{' '}
            {userData?.profilePicture || 'Not uploaded'}
          </div>
          <div>
            <strong>Registration Date:</strong> {userData?.registrationDate}
          </div>
          <div>
            <strong>Conducted tests:</strong> {userData?.tests.conducted.length}
          </div>
          <div>
            <strong>Completed tests:</strong>{' '}
            {userData?.tests.completedTests.length}
          </div>
          <div>
            <strong>Admin Status:</strong> {userData?.isAdmin ? 'Yes' : 'No'}
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
