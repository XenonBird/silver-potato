const Dashboard = () => {
  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* Attends | Conducts */}
        <section className="flex justify-around items-center w-full rounded-xl p-4 py-0 gap-4">
          <button className="w-full p-2 text-center font-semibold text-lg rounded-md bg-gradient-primary">
            <h3>Attends</h3>
            <p>24</p>
          </button>
          <button className="w-full p-2 text-center font-semibold text-lg rounded-md text-primary border-2 border-primary">
            <h3>Conducts</h3>
            <p>16</p>
          </button>
        </section>

        {/* List of attended tests */}
        <TestDataItem />
        <TestDataItem />
        <TestDataItem />
        <TestDataItem />

        {/*  */}
      </div>
    </main>
  );
};

const TestDataItem = () => {
  return (
    <section className="flex flex-col w-full rounded-xl p-4 border">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg">Child psychology set-57</p>
          <p>
            <span className="text-gray-500">by </span>
            <span>Anthony Edward Stark</span>
          </p>
        </div>
        <div className="avatar">
          <div className="mask mask-squircle w-12 bg-neutral text-white text-2xl">
            <p className="h-full flex justify-center items-center">
              <i className="fi fi-rr-user flex items-center"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="my-3 w-full border-b"></div>

      {/* <p className="text-green-500 font-semibold">Pending...</p> */}

      <div className="flex justify-around items-center gap-4">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="py-2">
            <p className="font-semibold">200</p>
            <p>Questions</p>
          </div>
          <div className="py-2">
            <p className="font-semibold">180</p>
            <p>Attends</p>
          </div>
          <div className="py-2">
            <p className="font-semibold">160</p>
            <p>Corrects</p>
          </div>

          <div className="py-2">
            <p className="font-semibold">70</p>
            <p>Marks</p>
          </div>

          {/* 
          <div className="col-span-2 collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title font-medium text-sm">more info</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
           */}
        </div>
        <div
          className="radial-progress"
          style={{ '--value': 75 }}
          role="progressbar"
        >
          75%
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
