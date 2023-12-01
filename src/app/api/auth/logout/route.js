import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );
    response.cookies.set('token', '', { maxAge: 0 });
    response.cookies.set('user', '', { maxAge: 30 });

    // send response
    console.log('👉', 'A user logged out:');
    return response;
  } catch (error) {
    console.log('🔴 [API_AUTH_LOGOUT_POST]:', error);
    return Response.json({ message: error.message }, { status: 500 });
  }
};
