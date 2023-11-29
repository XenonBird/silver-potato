import Header from '../components/header';
import TabBar from '../components/tab-bar';

const UserLayout = ({ children }) => {
  return (
    <div className="fixed h-full w-full flex flex-col justify-between">
      <Header />
      {children}
      <TabBar />
    </div>
  );
};

export default UserLayout;
