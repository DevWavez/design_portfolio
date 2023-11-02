const StatsSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
      {/* GRID */}
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Stats */}
        <div>
          <h4 className="text-ls sm:text-xl font-semibold text-gray-800">
            Accuracy rate
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-900">
            99.95%
          </p>
          <p className="mt-1 text-gray-500">in fulfilling order</p>
        </div>
        {/* END */}

        {/* Stats */}
        <div>
          <h4 className="text-ls sm:text-xl font-semibold text-gray-800">
            Startup business
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-900">
            2,000+
          </p>
          <p className="mt-1 text-gray-500">Partner</p>
        </div>
        {/* END */}
        {/* Stats */}
        <div>
          <h4 className="text-ls sm:text-xl font-semibold text-gray-800">
            Happy Customer
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-900">
            85%
          </p>
          <p className="mt-1 text-gray-500">this year alone</p>
        </div>
        {/* END */}
      </div>
    </div>
  );
};

export default StatsSection;
