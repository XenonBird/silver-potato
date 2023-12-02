import { getCookieData } from '@/helpers/token';
import { cookies } from 'next/headers';
import LoginSuggestionPage from '../login-suggestion-page';
import CreateTestPage from './create-test-page';

// export const dynamic = 'force-dynamic';

const Dashboard = () => {
  const cookieList = cookies();
  const decodedData = getCookieData(cookieList);
  if (!decodedData.success) return <LoginSuggestionPage />;

  return <CreateTestPage />;
};

export default Dashboard;
