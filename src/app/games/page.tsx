import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games · Benoit Pimpaud",
};

const GAMES = [
  { name: "Peak Air", href: "https://peak-air.benventure.net" },
  { name: "Altitude Zero", href: "https://altitude-zero.benventure.net" },
  { name: "Dealer Breaker", href: "https://dealer-breaker.benventure.net" },
];

export default function Games() {
  return (
    <main className="page">
      <ul className="games">
        {GAMES.map((game) => (
          <li key={game.href}>
            <a href={game.href}>{game.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
