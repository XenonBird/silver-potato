import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const cookieList = cookies();
  const decodedData = getCookieData(cookieList);
  if (decodedData.success) {
    return NextResponse.json({ data: decodedData.data }, { status: 200 });
  }

  return NextResponse.json(
    { message: decodedData.message || 'Please login' },
    { status: 400 }
  );
};
