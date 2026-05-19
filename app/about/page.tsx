export default function AboutPage() {

    return (
  
      <main className="min-h-screen bg-[#020817] text-white p-6 md:p-10">
  
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
  
            About Finance App
  
          </h1>
  
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10">
  
            <p className="text-slate-300 text-lg leading-9 mb-8">
  
              Finance App is a personal finance and wealth planning platform
              designed to help individuals make smarter long-term financial decisions.
  
            </p>
  
            <p className="text-slate-300 text-lg leading-9 mb-8">
  
              The platform provides calculators and tools for SIP planning,
              FIRE planning, retirement analysis, SWP, tax calculations,
              EMI planning, XIRR tracking, asset allocation, and more.
  
            </p>
  
            <p className="text-slate-300 text-lg leading-9 mb-8">
  
              Our goal is to simplify financial concepts and help users
              understand the power of long-term compounding,
              disciplined investing, and financial independence.
  
            </p>
  
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
  
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">
  
                Important Disclaimer
  
              </h2>
  
              <p className="text-slate-300 leading-8">
  
                This platform is intended for educational and informational
                purposes only and should not be considered financial advice.
                Please consult a qualified financial advisor before making
                investment decisions.
  
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </main>
    );
  }