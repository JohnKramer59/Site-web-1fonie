import React, { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    window.location.href = "https://blog.1fonie.fr/";
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen text-gray-600">
      <p>Redirection vers le blog en cours...</p>
    </main>
  );
}
