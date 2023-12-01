import jwt from 'jsonwebtoken';

export const getTokenData = (token) => {
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    return { success: true, data: decodedData };
  } catch (error) {
    return { success: false, message: error.message, error: error };
  }
};
