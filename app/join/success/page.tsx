import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function JoinSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-black">Welcome to Athar!</h2>
            <p className="text-gray-600 mt-2">
              Thank you for joining our community. Check your email for a welcome message!
            </p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" style={{ backgroundColor: '#FD9635' }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
