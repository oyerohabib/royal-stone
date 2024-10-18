export const Steps = () => {
  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How To Get Started
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Download the Mobile App</h3>
            <p className="mt-2 text-gray-600">
              Amet commodo venenatis in congue. Sit eget nulla nulla.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Create an Account</h3>
            <p className="mt-2 text-gray-600">
              Venenatis facilisis ullamcorper. Eget nulla neque.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Make your First Transaction
            </h3>
            <p className="mt-2 text-gray-600">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
