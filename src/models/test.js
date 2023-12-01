import { Schema, models, model } from 'mongoose';

const testSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true,
    default: 'Anonymous',
  },
  marksPerQuestion: {
    type: Number,
    required: true,
    default: 1,
  },
  negativeMarksPerQuestion: {
    type: Number,
    required: true,
    default: 0,
  },
  TimePerQuestion: {
    type: Number,
    required: true,
    default: 60,
  },
  subjects: [
    {
      type: String,
      // required: true,
    },
  ],
  exams: [
    {
      type: String,
      // required: true,
    },
  ],
  published: {
    type: String,
    required: true,
    default: false,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
          },
        },
      ],
    },
  ],
});

const Test = models.Test || model('Test', testSchema);

export default Test;
