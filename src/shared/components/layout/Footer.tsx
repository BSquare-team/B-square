import React from "react";
import { APP_NAME } from "../../lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          {/* left side - copyright */}
          <div className="text-gray-500 dark:text-gray-400">
            © {currentYear} {APP_NAME}. All rights reserved.
          </div>

          {/* right side - links */}
          <div className="flex gap-6 text-gray-500 dark:text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
