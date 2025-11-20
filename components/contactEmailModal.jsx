import { sendCustomAdminEmail } from "@/actions/sendEmailNotifications"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const ContactEmailModal = ({ name, email, setShowContactEmailModal }) => {
    const [formData, setFormData] = useState({
        subject: "",
        message: "",
    })
    const [errors, setErrors] = useState({})
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState(null) // { type: 'success'|'error', message: string }

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setShowContactEmailModal(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [setShowContactEmailModal])

    const validate = () => {
        const errs = {}
        if (!formData.subject || formData.subject.trim().length < 3) {
            errs.subject = "Please provide a longer subject (min 3 characters)."
        }
        if (!formData.message || formData.message.trim().length < 10) {
            errs.message = "Please provide a message (min 10 characters)."
        }
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        if (!validate()) return;

        setSending(true);

        try {
            const result = await sendCustomAdminEmail({
                to: email,
                subject: formData.subject.trim(),
                message: formData.message.trim(),
            });

            if (!result.success) {
                throw new Error(result.error || "Failed to send email");
            }

            setStatus({ type: "success", message: "Email sent successfully." });
            toast.success("Email sent successfully.");
            setFormData({ subject: "", message: "" });

            setTimeout(() => setShowContactEmailModal(false), 1200);
        } catch (err) {
            setStatus({ type: "error", message: err.message });
            toast.error(`Error: ${err.message}`);
        } finally {
            setSending(false);
        }
    };


    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-email-title"
        >
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg w-full max-w-xl shadow-xl"
                noValidate
            >
                <div className="flex items-start justify-between mb-4">
                    <h2 id="contact-email-title" className="text-lg font-bold">
                        Email applicant — {name}
                    </h2>
                    <button
                        type="button"
                        onClick={() => setShowContactEmailModal(false)}
                        aria-label="Close"
                        className="text-gray-500 hover:text-red-700 cursor-pointer p-2 rounded-full hover:bg-red-100 px-2.5"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="mb-3 text-sm text-gray-600">
                    To: <span className="font-medium">{email}</span>
                </div>

                <label htmlFor="subject" className="block text-sm font-semibold">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`w-full border p-2 rounded mt-1 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.subject ? "border-red-400" : "border-gray-200"
                        }`}
                    placeholder="Enter email subject..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={sending}
                    autoComplete="off"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                    <p id="subject-error" className="text-xs text-red-600 mb-2">
                        {errors.subject}
                    </p>
                )}

                <label htmlFor="message" className="block text-sm font-semibold mt-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className={`w-full border p-2 rounded mt-1 h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.message ? "border-red-400" : "border-gray-200"
                        }`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={sending}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="text-xs text-red-600 mb-2">
                        {errors.message}
                    </p>
                )}

                <div aria-live="polite" className="min-h-[1.25rem]">
                    {status && (
                        <div
                            className={`text-sm mb-2 ${status.type === "success" ? "text-green-700" : "text-red-600"
                                }`}
                        >
                            {status.message}
                        </div>
                    )}
                </div>

                <div className="flex justify-end mt-4 gap-2">
                    <button
                        type="button"
                        onClick={() => setShowContactEmailModal(false)}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                        disabled={sending}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 cursor-pointer ${sending ? "opacity-80 cursor-not-allowed" : ""
                            }`}
                        disabled={sending}
                    >
                        {sending ? (
                            <>
                                <svg
                                    className="animate-spin h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            "Send"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
