import Button from "../Button";

function CTA() {
  return (
    <section className="bg-neutral-gray-600/30 py-16 text-center min-w-screen mx-auto">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>

        <p className="mb-6">
          I'm always excited to work on new projects and help in bringing ideas
          <br /> to reality. If you're looking for a dedicated Frontend
          developer,
          <br /> feel free to reach out.
        </p>

        <Button text="Hire me" rout="#contact-section" />
      </div>
    </section>
  );
}

export default CTA;
