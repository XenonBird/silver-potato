import jwt from 'jsonwebtoken';

// export const getCookieData = (token) => {
//   try {
//     const decodedData = jwt.verify(token, process.env.JWT_SECRET);
//     return { success: true, data: decodedData };
//   } catch (error) {
//     return { success: false, message: error.message, error: error };
//   }
// };

export const getCookieData = (cookieList) => {
  try {
    const ifToken = cookieList.get('token');
    if (!ifToken) return { success: false, message: 'Token not found' };

    const token = cookieList.get('token').value;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) return { success: false, message: 'Token Expired' };

    const userString = cookieList.get('user')?.value;
    var user = {};
    if (userString) user = JSON.parse(userString);

    const allData = { ...user, ...decodedData.data };
    delete allData.isAdmin;

    return { success: true, data: allData };
  } catch (error) {
    return { success: false, message: error.message, error: error };
  }
};
