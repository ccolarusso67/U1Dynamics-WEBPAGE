import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-outline">
            View Products
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
