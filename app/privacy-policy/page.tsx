export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-slate-300 leading-8 text-lg">

          <p>
            We value your privacy and are committed to
            protecting your personal information.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>

            <p>
              We may collect anonymous analytics data,
              browser information, and cookies to improve
              user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Google AdSense
            </h2>

            <p>
              Third-party vendors including Google use cookies
              to serve ads based on prior visits to this website.
            </p>

            <p className="mt-3">
              Google may use advertising cookies to personalize ads.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Analytics
            </h2>

            <p>
              We may use Google Analytics to understand
              visitor behavior and improve our tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Consent
            </h2>

            <p>
              By using this website, you consent to this
              privacy policy.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}