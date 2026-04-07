import SearchFormModule from "./components/SearchForm.module.css";

export default function SearchForm() {
  return (
    <div className="SearchFormModule">
        <form className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Avreise"
                className="bg-white text-black placeholder:text-zinc-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Destinasjon"
                className="bg-white text-black placeholder:text-zinc-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
      <button
        type="submit"
        className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
    </div>
  );
}
