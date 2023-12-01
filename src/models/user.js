import { models, model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    default: '',
    // default: new Date('1990-01-01'),
  },
  profilePicture: {
    type: String,
    default: '',
  },
  registrationDate: {
    type: Date,
    default: Date.now(),
  },
  tests: {
    conducted: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Test',
      },
    ],
    completedTests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Test',
      },
    ],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = models.User || model('User', userSchema);

export default User;
