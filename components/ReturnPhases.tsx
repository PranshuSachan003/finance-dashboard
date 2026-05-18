type Props = {
    returnPhases: {
      years: number;
      returnRate: number;
    }[];
  
    setReturnPhases: any;
  };
  
  export default function ReturnPhases({
    returnPhases,
    setReturnPhases,
  }: Props) {
  
    return (
      <div className="mb-6">
  
        <h2 className="text-xl font-semibold mb-4">
          Return Phases
        </h2>
  
        {
          returnPhases.map(
            (phase, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 mb-4"
              >
  
                <div>
                  <label className="block mb-2">
                    Years
                  </label>
  
                  <input
                    type="number"
                    value={phase.years}
                    onChange={(e) => {
  
                      const updated =
                        [...returnPhases];
  
                      updated[index].years =
                        Number(e.target.value);
  
                      setReturnPhases(updated);
                    }}
                    className="w-full border p-3 rounded"
                  />
                </div>
  
                <div>
                  <label className="block mb-2">
                    Return (%)
                  </label>
  
                  <input
                    type="number"
                    value={phase.returnRate}
                    onChange={(e) => {
  
                      const updated =
                        [...returnPhases];
  
                      updated[index].returnRate =
                        Number(e.target.value);
  
                      setReturnPhases(updated);
                    }}
                    className="w-full border p-3 rounded"
                  />
                </div>
  
              </div>
            )
          )
        }
  
        <button
          onClick={() =>
            setReturnPhases([
              ...returnPhases,
              {
                years: 5,
                returnRate: 8,
              },
            ])
          }
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Phase
        </button>
  
      </div>
    );
  }