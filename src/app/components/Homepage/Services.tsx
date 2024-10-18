export const Services = () => {
  return (
    <section className="py-16 px-4" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Make an Investment</h3>
            <p className="mt-2 text-gray-600">
              Amet commodo venenatis in congue. Sit eget nulla neque.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Create a Savings Target</h3>
            <p className="mt-2 text-gray-600">
              Sit eget nulla nulla neque nulla venenatis facilisis.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Invest in Stocks</h3>
            <p className="mt-2 text-gray-600">
              Eget nulla nulla neque nulla venenatis facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
