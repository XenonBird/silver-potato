export const POST = async (request) => {
  console.log('========================================');
  const res = await request.json();
  console.log({ res });
  //   const testName = data.get('test-name')?.toString();
  //   const queMark = data.get('question-mark')?.toString();
  //   const negMark = data.get('negative-mark')?.toString();
  //   console.log({ testName, queMark, negMark });

  //   const newTest = new Test({
  //     title: testName,
  //     marksPerQuestion: queMark,
  //     negativeMarksPerQuestion: negMark,
  //   });

  //   await dbConnect();
  //   const savedTest = await newTest.save();
  const response = Response.json({ message: 'working' }, { status: 201 });
  return response;
};
