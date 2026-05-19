export default function ContactPage() {

    return (
  
      <main className="min-h-screen bg-[#020817] text-white p-6 md:p-10">
  
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
  
            Contact
  
          </h1>
  
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10">
  
            <p className="text-slate-300 text-lg leading-9 mb-8">
  
              If you have suggestions, feature requests,
              feedback,
              feel free to reach out.
  
            </p>
  
            <div className="space-y-6">
  
              <div className="bg-slate-800 rounded-2xl p-6">
  
                <h2 className="text-2xl font-semibold mb-3">
  
                  Email
  
                </h2>
  
                <p className="text-slate-300">
  
                  pranshusachan96@example.com
  
                </p>
  
              </div>
  
              <div className="bg-slate-800 rounded-2xl p-6">
  
                <h2 className="text-2xl font-semibold mb-3">
  
                  Feedback
  
                </h2>
  
                <p className="text-slate-300 leading-8">
  
                  We continuously improve the platform based on
                  user feedback and suggestions.
  
                </p>
  
              </div>
  
            </div>
  
            <div className="mt-10 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
  
              <p className="text-green-300 leading-8">
  
                Thank you for using Finance App and being part
                of the long-term wealth creation journey.
  
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </main>
    );
  }