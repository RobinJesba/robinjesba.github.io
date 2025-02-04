const Contact = () => {
  return (
    <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <a
        href="mailto:hello@example.com"
        className="text-xl transition-opacity duration-300 hover:opacity-70 inline-block"
      >
        hello@example.com
      </a>
    </div>
  );
};

export default Contact;