import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-customblue2 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Notre métier : veiller sur votre sécurité digitale.
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Votre infrastructure réseau entre de bonnes mains :<br /> nous vous
            accompagnons pour réussir votre transformation digitale durablement.
          </p>
          <div className="flex justify-center items-center">
            <video
              src="video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-64 md:h-80 w-full max-w-4xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
