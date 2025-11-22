export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <a
        href="https://muhammad.my"
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto w-32 mb-4 hover:opacity-80 transition-opacity"
      >
        <img
          src="/muhammad-logo.png"
          alt="Muhammad"
          className="w-full h-auto"
        />
      </a>
    </header>
  );
}
