import { cookies } from 'next/headers';

import { getTokenData } from '@/helpers/token';
import ProfileData from './profile-data';
import ProfileEmpty from './profile-empty';

const UserProfilePage = () => {
  const cookieList = cookies();
  const token = cookieList.get('token')?.value;
  const decodedData = getTokenData(token);

  if (decodedData.success) {
    const userString = cookieList.get('user')?.value;
    const user = JSON.parse(userString);

    const clientData = { ...user, ...decodedData.data };

    return <ProfileData userData={decodedData.data} />;
  } else {
    return <ProfileEmpty />;
  }
};

export default UserProfilePage;
