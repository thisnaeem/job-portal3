

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600">
              Developed by{" "}
              <a
                href="https://naeemanjum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Naeem Anjum
              </a>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600">
              Need a custom website, SaaS app, or software solution?{" "}
              <a
                href="https://naeemanjum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Let&apos;s work together →
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 