import { AlertBox } from "./AlertBox";

function AlertBoxDisplay() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 md:px-6">
      <header className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Alerts
        </p>
    
      </header>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <article className="border border-(--border) relative overflow-hidden rounded-2xl bg-(--bg) p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] ">
          <span className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800">
            Success
          </span>
          <AlertBox
            type="success"
            message="Your profile has been updated successfully."
            onClose={() => alert("Success alert closed")}
          >
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Everything was saved and synced. You can continue using the app.
            </p>
          </AlertBox>
        </article>

        <article className="border border-(--border) relative overflow-hidden rounded-2xl bg-(--bg) p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] ">
          <span className="mb-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold tracking-wide text-rose-800">
            Error
          </span>
          <AlertBox
            type="error"
            message="We could not save your changes."
            onClose={() => alert("Error alert closed")}
          >
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Please review the highlighted fields and try again.
            </p>
          </AlertBox>
        </article>

        <article className="border border-(--border) relative overflow-hidden rounded-2xl bg-(--bg) p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)]">
          <span className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800">
            Warning
          </span>
          <AlertBox
            type="warning"
            message="Your session will expire soon."
            onClose={() => alert("Warning alert closed")}
          >
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Save your progress to avoid losing unsaved work.
            </p>
          </AlertBox>
        </article>

        <article className="border border-(--border) relative overflow-hidden rounded-2xl bg-(--bg) p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)]">
          <span className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-800">
            Info
          </span>
          <AlertBox
            type="info"
            message="A new feature is now available."
            onClose={() => alert("Info alert closed")}
          >
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Visit settings to enable the new dashboard experience.
            </p>
          </AlertBox>
        </article>
      </div>
    </section>
  );
}


export default AlertBoxDisplay;