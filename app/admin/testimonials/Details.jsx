import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FeedbackDetails = ({feedback,setViewFeedback})=>{
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center md:px-4 px-2 md:pt-12 pt-6">

            <div className="bg-white rounded-t-lg overflow-y-auto shadow-lg w-full h-full max-w-3xl relative md:p-6 p-3">

                <div className="flex justify-between items-center">


                    <h2 className="font-bold">
                        Feedback Details
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        title="Close Button"
                        onClick={() => setViewFeedback(false)}
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                  <div className="mt-8 grid md:grid-cols-2 gap-4">

                    <div>
                        <p className="font-bold text-red-600 text-xs">Full Name</p>
                        <p className="text-sm text-gray-700">{feedback.fullName}</p>
                    </div>

                    <div>
                        <p className="font-bold text-red-600 text-xs">Email</p>
                        <p className="text-sm text-gray-700">{feedback.email}</p>
                    </div>

                    <div>
                        <p className="font-bold text-red-600 text-xs">Country</p>
                        <p className="text-sm text-gray-700">{feedback.country}</p>
                    </div>

                   <div>
                        <p className="font-bold text-red-600 text-xs">City</p>
                        <p className="text-sm text-gray-700">{feedback.city}</p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="font-bold text-red-600 text-xs">Comment</p>
                        <p className="text-sm text-gray-700">{feedback.comment || "N/A"}</p>
                    </div>

                </div>

                <div className="mt-4">
                                    <button type="button" className="text-sm flex items-center gap-2 bg-gray-100 border hover:opacity-80 cursor-pointer py-2 px-4 rounded-lg justify-center w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                
                
                                            <span>Reply Feedback</span>
                                        </button>
                                </div>


                </div>
                </div>
    )
}