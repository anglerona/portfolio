import DuckAvatar from "@/components/DuckAvatar";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <div className="site-container flex flex-col gap-14 py-24 md:flex-row md:items-center md:justify-between md:gap-10">
        <div>
          <h1 className="page-title">Hi, I&apos;m Angelina.</h1>
          <p className="mt-6 max-w-[620px] text-lg leading-7 text-muted">
            I&apos;m a Software Engineering student at the University of Waterloo.
            <br />
            I write code and design things.
          </p>
        </div>
        <DuckAvatar className="hidden md:block md:w-[300px] lg:w-[400px]" />
      </div>
    </main>
  );
}
