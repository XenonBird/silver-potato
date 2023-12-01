'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

const CreateTestPage = () => {
  const [inputs, setInputs] = useState({
    title: '',
    marksPerQuestion: '',
    negativeMarksPerQuestion: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tid = toast.loading('Sending data');
    try {
      const res = await fetch('/api/user/', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(inputs),
      });
      if (res.status === 201) {
        toast.success('Done', { id: tid });
      } else {
        toast.error('Something went wrong', { id: tid });
      }
    } catch (error) {
      toast.error('Error ' + error.message, { id: tid });
    }
  };

  const changeHandler = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/*  */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full rounded-xl p-4 gap-3 border"
        >
          <h2 className="font-semibold text-lg">Create new question paper</h2>

          <div>
            <label htmlFor="title">Test name</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Name of the test"
              className="input input-bordered w-full max-w-sm"
              required={true}
              value={inputs.title}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="marksPerQuestion">Marks per question</label>
            <input
              type="number"
              name="marksPerQuestion"
              id="marksPerQuestion"
              placeholder="Marks per question"
              className="input input-bordered w-full max-w-sm"
              required={true}
              value={inputs.marksPerQuestion}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="negativeMarksPerQuestion">
              Negative marks per question
            </label>
            <input
              type="number"
              name="negativeMarksPerQuestion"
              id="negativeMarksPerQuestion"
              placeholder="Negative marks"
              className="input input-bordered w-full max-w-sm"
              required={true}
              value={inputs.negativeMarksPerQuestion}
              onChange={changeHandler}
            />
          </div>

          <button className="mt-4 btn btn-primary">Create</button>
        </form>

        {/*  */}
      </div>
    </main>
  );
};

export default CreateTestPage;
