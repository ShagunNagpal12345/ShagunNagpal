import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, Download, X } from 'lucide-react'

import resumePdf from '../assets/resume/Shagun Nagpal 15+ Executive.pdf'

export default function ResumeDownloadConsent({
  label = 'Download Resume',
  buttonClassName = '',
  iconSize = 18,
}) {
  const [open, setOpen] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const titleId = useId()
  const descriptionId = useId()
  const checkboxRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => checkboxRef.current?.focus(), 0)

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      triggerRef.current?.focus()
    }
  }, [open])

  const closeDialog = () => {
    setOpen(false)
    setAccepted(false)
  }

  const confirmDownload = () => {
    if (!accepted) return

    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Shagun Nagpal Resume.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    closeDialog()
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={buttonClassName}
        onClick={() => setOpen(true)}
      >
        {label}
        <Download size={iconSize} aria-hidden="true" />
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[120] grid place-items-center bg-[#07182b]/45 px-4 py-8 backdrop-blur-[2px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog()
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="w-full max-w-[410px] rounded-[18px] border border-[#102947]/12 bg-[#fffdf8] p-5 text-left shadow-[0_24px_70px_rgba(7,24,43,0.24)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f2e5d2] text-[#a66b1b]">
                  <Download size={18} aria-hidden="true" />
                </span>
                <h2 id={titleId} className="mt-4 text-[21px] font-bold tracking-[-0.025em] text-[#102947]">
                  Before you download
                </h2>
              </div>

              <button
                type="button"
                onClick={closeDialog}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#526d87] transition hover:bg-[#f3ecdf] hover:text-[#102947] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]"
                aria-label="Close resume download confirmation"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <p id={descriptionId} className="mt-3 text-[14px] leading-6 text-[#52677d]">
              This resume is provided only for learning and recruitment sourcing purposes.
            </p>

            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#102947]/10 bg-[#f8f3ea] p-4">
              <input
                ref={checkboxRef}
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="peer sr-only"
              />
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-[#8a99a8] bg-white text-transparent peer-checked:border-[#b97928] peer-checked:bg-[#b97928] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#bd812d] peer-focus-visible:ring-offset-2">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-semibold leading-5 text-[#294866]">
                I agree to use this resume only for these purposes.
              </span>
            </label>

            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDialog}
                className="min-h-11 rounded-[10px] border border-[#102947]/12 px-4 text-[13px] font-bold text-[#52677d] transition hover:bg-[#f3ecdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDownload}
                disabled={!accepted}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] bg-[#102947] px-5 text-[13px] font-bold text-white transition hover:bg-[#173a61] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d] focus-visible:ring-offset-2"
              >
                Confirm &amp; download
                <Download size={15} aria-hidden="true" />
              </button>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}
