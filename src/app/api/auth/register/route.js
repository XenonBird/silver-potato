import { dbConnect } from '@/db/db';
import User from '@/models/user';
import { userValidationSchema } from '@/zod/user-validation-schemas';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const body = await request.json();

    // validation
    const validUser = userValidationSchema.safeParse(body);
    if (!validUser.success)
      return Response.json(
        { message: validUser.error.issues[0].message },
        { status: 400 }
      );
    // if username or email matched
    await dbConnect();
    const matchedUser = await User.findOne({
      $or: [
        { email: validUser.data.email },
        { username: validUser.data.username },
      ],
    });
    if (matchedUser) {
      if (validUser.data.email === matchedUser.email) {
        return Response.json(
          { message: 'Email is already registered' },
          { status: 400 }
        );
      } else {
        return Response.json(
          { message: 'User name is already taken' },
          { status: 400 }
        );
      }
    }

    // add to database
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(validUser.data.password);
    const newUser = new User({ ...validUser.data, password: hash });
    const savedUser = await newUser.save();

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
    } = savedUser;
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
      { message: 'Registered successfully', data: clientData },
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
    console.log('👉', 'New user registered:', username, ':', fullName);
    return response;
  } catch (error) {
    console.log('🔴 [API_AUTH_REGISTER_POST]:', error);
    return Response.json({ message: error.message }, { status: 500 });
  }
};
