import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specs Should Be Equations, Not Essays | Benoit",
  description:
    "As we shift from writing code to writing specs, natural language's imprecision becomes the bottleneck. An essay on using mathematics — sets, functions, invariants — as a specification method.",
};

export default function SpecsShouldBeEquationsPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors mb-12"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-wider mb-6">
          <span>February 2026</span>
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Essay &amp; Thought Leadership</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
          Specs Should Be Equations, <span className="italic">Not Essays</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark leading-relaxed font-light">
          As we shift from writing code to writing specs, natural language&rsquo;s imprecision becomes
          the bottleneck. Why mathematics — sets, functions, relations, invariants — might be the better
          specification language.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Essay", "Specs", "Mathematics", "AI", "Agentic Coding"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-xs font-medium text-text-muted-light dark:text-text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://fromanengineersight.substack.com/p/specs-should-be-equations-not-essays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main-light dark:bg-text-main-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Read on Substack
          </a>
        </div>
      </header>

      {/* Heading image */}
      <figure className="mb-16 md:mb-20 flex justify-center rounded-2xl border border-border-light dark:border-border-dark bg-[#14100c] py-8 md:py-12">
        <Image
          src="/specs-equations-cover.jpg"
          alt="Foundations of Math Driven Spec — book cover with physics equations"
          width={757}
          height={964}
          className="h-auto w-auto max-h-[560px] rounded-lg shadow-2xl"
        />
      </figure>

      {/* Article body */}
      <article className="space-y-6 text-lg leading-relaxed text-text-muted-light dark:text-text-muted-dark">
        <p>
          Most of us have a hard time to get such a sentence. What about the diagram below?
        </p>
        <p>
          Easier right? By switching the representation, we ends up with something easier to understand.
          Here relationship is easier to grasp with a graph rather than a sequence of words.
        </p>
        <p>Following the same idea, which formulation do you prefer?</p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              &ldquo;For any given value of x, the corresponding value of y is found by adding 2 to x.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>&ldquo;The value of y is always 2 more than the value of x.&rdquo;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span className="font-mono">y = x + 2</span>
          </li>
        </ul>
        <p>
          Kids often ask why they have to learn mathematics. What&rsquo;s the point of learning times
          tables if the calculator can do it faster and better? As we grow, we understand two things about
          mathematics:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>It brings mental models and patterns that help resolve anything</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              Its semantics and syntax are top-notch. One of the best set of representation humans have
              ever created.
            </span>
          </li>
        </ul>
        <p>
          The mathematical expression isn&rsquo;t just shorter — it&rsquo;s transformative. It allows
          manipulation, extension, and application impossible with prose descriptions.
        </p>

        <blockquote className="border-l-2 border-primary pl-6 italic text-text-main-light dark:text-text-main-dark">
          <p className="mb-4">
            The powers of cognition come from abstraction and representation: the ability to represent
            perceptions, experiences, and thoughts in some medium other than that in which they have
            occured, abstracted away from irrelevant details. This is the essence of intelligence, for if
            the representation and the processes are just right, the new experiences, insights, and
            creations can emerge.
          </p>
          <p>
            The important point is that we can make marks or symbols that represent something else and the
            do our reasoning by using those marks
          </p>
        </blockquote>

        <h2 className="font-display text-3xl md:text-4xl !mt-16 mb-2 text-text-main-light dark:text-text-main-dark">
          Natural Language is a Terrible Spec Language
        </h2>
        <p>Natural language doesn&rsquo;t seem so ambiguous in our daily life:</p>

        <blockquote className="border-l-2 border-primary pl-6 italic text-text-main-light dark:text-text-main-dark">
          <p>
            [...] the ambiguity almost always results from the analysis of single, isolated sentences: in
            real situations, where several interacting people deal with real events, the sentences usually
            have only one meaningful interpretation. Actually, even when communications are ambigous, they
            are usually not perceived as such by either speaker or listener, even though both may have
            different interpretations of the meaning.
          </p>
        </blockquote>

        <blockquote className="border-l-2 border-primary pl-6 italic font-medium text-text-main-light dark:text-text-main-dark">
          <p>
            It is the lack of perception of ambiguity that is important, and it derives from the
            communicative, social nature of language, something that is entirely missed when the language
            is studied as isolated, &ldquo;simplified&rdquo; printed sentences or utterances, completely
            abstracted from the real, social settings.
          </p>
        </blockquote>

        <p>
          Replace &ldquo;printed sentences&rdquo; with &ldquo;tokens&rdquo; and you have modern LLM
          training.
        </p>
        <p>
          Also, when an LLM generates a response to an ambiguous prompt, it confidently selects one
          interpretation and proceeds — with no awareness that alternatives exist. It doesn&rsquo;t
          &ldquo;perceive&rdquo; ambiguity because it has no mechanism for recognizing that its statistical
          resolution of a sentence is just one of several possible interpretations.
        </p>
        <p>Humans don&rsquo;t notice ambiguity because context resolves it most of the time.</p>
        <p>
          And so while natural language still remains our main interface, the way we think and build
          creative solution is usually embedded into something deeper.
        </p>

        <h2 className="font-display text-3xl md:text-4xl !mt-16 mb-2 text-text-main-light dark:text-text-main-dark">
          Math Driven Spec
        </h2>
        <p>
          I&rsquo;ve been exploring lately how instead of creating a spec the size of a technical
          O&rsquo;Reilly book and creating a Spec Observer skill, we could use a mathematical
          representation for defining our spec.
        </p>
        <p>
          The intuition here is that the shift happening from <em>writing code</em> to{" "}
          <em>writing specs</em> will expose how bad natural language is at precision.
        </p>
        <p>
          That to extract a consistent, lean, and so maintenable and evolutive software specification,
          math can play a better role than natural language.
        </p>
        <p>
          And so I&rsquo;ve created this math spec-driven skill. It treats mathematics as a specification
          method, using sets, functions, relations, invariants, and explicit edge cases to define what a
          system is and what it must do. It enforces three principles:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">Explicitness</strong>: every
              assumption is stated
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">Composability</strong>: parts
              can be specified independently, then combined safely
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">Falsifiability</strong>: claims
              are written so they can be proven or disproven
            </span>
          </li>
        </ul>
        <p>For example building a TicTacToe game using this spec methodology looks like this:</p>

        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-5 md:p-6 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed text-text-main-light dark:text-text-main-dark whitespace-pre-wrap">
{`Board     := P = {1..9} → {X, O, ∅}; initially ∀p ∈ P: P(p) = ∅
Players   := T = {X, O}; turn(n) = X if n is odd, O if n is even
Move      := move(p, t) requires P(p) = ∅ ∧ turn(n) = t; sets P(p) ← t
Lines     := L = {{1,2,3},{4,5,6},{7,8,9},{1,4,7},{2,5,8},
             {3,6,9},{1,5,9},{3,5,7}}
Win       := win(t) ⟺ ∃ℓ ∈ L : ∀p ∈ ℓ, P(p) = t
Draw      := draw ⟺ (∀p ∈ P: P(p) ≠ ∅) ∧ ¬win(X) ∧ ¬win(O)
Terminal  := game ends when win(X) ∨ win(O) ∨ draw
Invariant := |{p : P(p)=X}| − |{p : P(p)=O}| ∈ {0, 1}`}
          </pre>
        </div>

        <p>
          It can be frightening for most of us I do agree. But the LLM can easily return a translation for
          this:
        </p>

        <blockquote className="border-l-2 border-primary pl-6 italic text-text-main-light dark:text-text-main-dark space-y-4">
          <p>
            The <strong>board</strong> is a 3×3 grid of 9 cells, each either X, O, or empty. All cells start
            empty.
          </p>
          <p>
            Two players — X and O — alternate turns, with X always going first. On your turn, you place your
            mark in any empty cell.
          </p>
          <p>
            A player <strong>wins</strong> if they fill an entire row, column, or diagonal (there are 8 such
            lines). The game is a <strong>draw</strong> if every cell is filled and nobody has won. The game{" "}
            <strong>ends</strong> the moment someone wins or the board is full.
          </p>
          <p>
            <strong>Invariant:</strong> at any point, the number of X&rsquo;s on the board is either equal to
            or exactly one more than the number of O&rsquo;s — this guarantees proper alternation.
          </p>
        </blockquote>

        <p>
          I did try that skills on several projects, and even if it might be useless for agents, it&rsquo;s
          valuable for me to iterate on the spec. I feel it easier to iterate on next steps when I have such
          rigorous foundation.
        </p>
        <p>At the end of the day, the context we give to agents should be multi modal:</p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>text for intents, examples, problem-context</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>diagram for relationship between entities</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>and math for explicitness, composability, and falsifiability</span>
          </li>
        </ul>
        <p>
          This way we can use the full value of different representation and make things easier to maintain
          for both agents and humans.
        </p>

        <h2 className="font-display text-3xl md:text-4xl !mt-16 mb-2 text-text-main-light dark:text-text-main-dark">
          The Maxwell Equations For Spec?
        </h2>
        <p>
          If we push the idea further here we could imagine finding the ultimate substrat of mathematical
          representation to describe any SaaS, any software. That&rsquo;s sounds like an utopia by the time
          I write this — but what we have achieved with frameworks and libraries in code really seem similar
          to a common set of equation expressed into a single formalism.
        </p>
        <p>
          To build complex, maintenable and malleable software — ultimately to build at a higher level of
          abstraction — we somehow need the power that come from that level of representation.
        </p>
        <p>
          In that scheme, we can see math as the <em>source of truth</em> and code or natural language as a{" "}
          <em>projections</em>.
        </p>
        <p>
          Math spec. come also with a crazy idea here: what if you apply the math themselves to create
          software and test it after the fact. We can imagine a similar build as SMT-solver or constraint
          optimization methodology, basically:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">math spec = the score
              function</strong> — the gradient field that defines what &ldquo;valid&rdquo; looks like
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">code = a sample</strong> from
              the distribution of valid programs
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">·</span>
            <span>
              <strong className="text-text-main-light dark:text-text-main-dark">generation process =
              iterative refinement</strong> where an agent proposes code and the spec&rsquo;s invariants pull
              it toward correctness, like a potential field where the math model spec. allow to create the
              whole object in one-shot — swarm of agent iterating toward the optimal solution.
            </span>
          </li>
        </ul>
        <p>
          I&rsquo;m not an expert in LLM architecture and optimization process, but that also resonate with
          diffusion models where you start from noise and iteratively denoise toward a sample that satisfies
          the learned distribution.
        </p>

        <h2 className="font-display text-3xl md:text-4xl !mt-16 mb-2 text-text-main-light dark:text-text-main-dark">
          The Gradient Points To People
        </h2>
        <p>
          If Yann LeCun is right — and language really is just &ldquo;lossy compression&rdquo; of reality —
          then every spec we write in prose is already degraded before an agent touches it. I think
          he&rsquo;s right — and the implication for software is direct. Every time we write a spec in
          natural language, we lose information. Every time an agent reads that spec, it loses more. The
          losses compound. Math doesn&rsquo;t fix everything, but it preserves structure in a way prose
          simply cannot.
        </p>
        <p>
          &ldquo;You want to write the least code as possible&rdquo; has been the mantra for years. Now
          we&rsquo;re getting there. But the bottleneck doesn&rsquo;t disappear, it moves. It moves from
          code to spec. From spec to intent. From intent to understanding the actual problem.
        </p>
        <p>
          Which means, paradoxically, the more formal and mathematical our specifications get, the more
          human the hard part becomes. Creating good software means having good specs. Having good specs
          means having context and taste. And context and taste come from one place only: talking to
          people, understanding what they need, sitting with their problems long enough to see the shape of
          them. Communication is the job.
        </p>
        <p>
          Natural language has been grown by humans to share cognition and sentiments. These are ultimately
          the two things why people work with you. The math gives us precision. The conversation gives us
          direction. We need both — and knowing when to switch between them might be the real skill now.
        </p>
      </article>

      {/* Footer CTA */}
      <div className="mt-20 pt-12 border-t border-border-light dark:border-border-dark">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-2xl mb-2">From an Engineer&rsquo;s Sight</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Read the original essay and more on the newsletter.
            </p>
          </div>
          <a
            href="https://fromanengineersight.substack.com/p/specs-should-be-equations-not-essays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Read on Substack
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
