export default function PropertyPreview() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Header */}

      <div className="pt-20 px-6">

        <div className="h-10 w-40 rounded-xl bg-blue-500/20" />

        <div className="mt-5 h-6 w-56 rounded-lg bg-slate-700" />

      </div>

      {/* Search */}

      <div className="mt-8 px-6">

        <div className="h-14 rounded-2xl bg-slate-800" />

      </div>

      {/* Cards */}

      <div className="mt-8 space-y-5 px-6">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
          >

            <div className="h-44 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500" />

            <div className="space-y-3 p-5">

              <div className="h-5 w-44 rounded bg-slate-700" />

              <div className="h-4 w-32 rounded bg-slate-800" />

              <div className="mt-5 flex justify-between">

                <div className="h-5 w-20 rounded bg-blue-500/40" />

                <div className="h-5 w-12 rounded bg-slate-700" />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}