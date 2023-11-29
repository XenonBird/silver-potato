import Link from 'next/link';

export default function Home() {
  return (
    <main className="grow overflow-y-scroll">
      <div className="mx-auto max-w-md flex flex-col gap-4 p-4">
        {/* Greeting section */}
        <section className="flex justify-between items-center w-full rounded-xl p-4">
          <div>
            <h2 className="font-semibold text-xl">
              <i className="fi fi-rr-hand-wave"></i> Hi, Linda
            </h2>
            <p>Great to see you again</p>
          </div>
          <div className="avatar">
            <div className="mask mask-squircle w-12 bg-neutral text-white text-2xl">
              <p className="h-full flex justify-center items-center">
                <i className="fi fi-rr-user flex items-center"></i>
              </p>
            </div>
          </div>
        </section>

        {/* Score */}
        <section className="flex justify-around items-center w-full border rounded-xl p-4">
          <div className="text-center">
            <i className="fi fi-rr-pen-clip text-2xl p-4"></i>
            <p>230 questions</p>
          </div>
          <div className="w-0 h-3/4 border-l border-l-black"></div>
          <div className="text-center">
            <i className="fi fi-rr-assept-document text-2xl p-4"></i>
            <p>82.4% correct</p>
          </div>
        </section>

        {/* Search quiz */}
        <section className="flex justify-between items-center w-full bg-accent rounded-xl p-4">
          <label htmlFor="section-search">
            <p className="font-semibold text-xl">Attend a test</p>
            <input
              type="search"
              id="section-search"
              placeholder="Find test by id"
              name="search"
              className="input w-full max-w-sm mt-2 bg-[#ffffff88] placeholder:text-black"
            />
          </label>
        </section>

        {/* recommended */}
        <section>
          <p className="pl-4">Recommended for you</p>
        </section>

        <section className="flex justify-between items-center bg-accent w-full rounded-xl p-4">
          <div className="mr-4">
            <i className="fi fi-rr-chart-line-up text-2xl"></i>
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold">Math for PSC</h3>
            <p>40 questions</p>
          </div>
          <div>
            <i className="fi fi-rr-angle-right"></i>
          </div>
        </section>

        <section className="flex justify-between items-center bg-accent w-full rounded-xl p-4">
          <div className="mr-4">
            <i className="fi fi-rr-chart-line-up text-2xl"></i>
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold">Math for PSC</h3>
            <p>40 questions</p>
          </div>
          <div>
            <i className="fi fi-rr-angle-right"></i>
          </div>
        </section>

        <section className="flex justify-between items-center bg-accent w-full rounded-xl p-4">
          <div className="mr-4">
            <i className="fi fi-rr-chart-line-up text-2xl"></i>
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold">Math for PSC</h3>
            <p>40 questions</p>
          </div>
          <div>
            <i className="fi fi-rr-angle-right"></i>
          </div>
        </section>

        {/* 
        <div className="flex flex-wrap p-4 gap-4">
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
        */}
      </div>
    </main>
  );
}
