import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { dbConnect } from '@/db/db';
import User from '@/models/user';
import { userValidationSchemaForLogin } from '@/zod/user-validation-schemas';

export const POST = async (request) => {
  try {
    const body = await request.json();

    // validation
    const validUser = userValidationSchemaForLogin.safeParse(body);
    if (!validUser.success) {
      return Response.json(
        { message: validUser.error.issues[0].message },
        { status: 400 }
      );
    }

    // if email matched
    await dbConnect();
    const matchedUser = await User.findOne({ email: validUser.data.email });
    if (!matchedUser) {
      return Response.json(
        { message: 'Email is not registered' },
        { status: 400 }
      );
    }

    // check password
    const matchPassword = bcrypt.compareSync(
      validUser.data.password,
      matchedUser.password
    );
    if (!matchPassword) {
      return Response.json({ message: 'Incorrect password' }, { status: 400 });
    }

    // prepare response
    const {
      username,
      email,
      fullName,
      dateOfBirth,
      profilePicture,
      registrationDate,
      tests,
      _id,
      isAdmin,
    } = matchedUser;
    const clientData = {
      username,
      email,
      fullName,
      dateOfBirth,
      profilePicture,
      registrationDate,
      tests,
      _id,
    };

    const response = NextResponse.json(
      { message: 'working', data: clientData },
      { status: 201 }
    );

    // set cookies
    const token = jwt.sign(
      {
        _id,
        username,
        email,
        isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );
    response.cookies.set('token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    response.cookies.set(
      'user',
      JSON.stringify({
        username,
        email,
        fullName,
        profilePicture,
        registrationDate,
        tests,
      }),
      {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      }
    );

    // send response
    console.log('👉', 'A user logged in:', username, ':', fullName);
    return response;
  } catch (error) {
    console.log('🔴 [API_AUTH_LOGIN_POST]:', error);
    return Response.json({ message: error.message }, { status: 500 });
  }
};
