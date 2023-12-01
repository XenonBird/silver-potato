import HeaderClean from '../components/header-clean';

const AuthLayout = ({ children }) => {
  return (
    <>
      <HeaderClean />
      {children}
    </>
  );
};

export default AuthLayout;
