import { ArrowBigRightDashIcon } from "lucide-react";

export default function ProfessionalServices() {
    return (
        <>
            {/* Main Heading */}
            <h1
                className="flex justify-center font-sans text-4xl sm:text-2xl md:text-4xl m-auto p-4"
                style={{ color: '#0A1F36' }}
            >
                The Architecture of Strategic Leverage
            </h1>

            {/* Intro Paragraph */}
            <p className="flex justify-center text-2xl font-sans p-7 max-w-5xl mx-auto text-center">
                Capital is a tool. We engineer its structure to balance resilience, cost, and maximum return, 
                turning debt from a liability into your most powerful lever for value creation.
            </p>

            {/* Advisory Section */}
            <div className="bg-gray-200 justify-evenly m-7 p-6 rounded-lg">
                <p className="text-2xl font-sans flex items-start gap-3">
                    <ArrowBigRightDashIcon className="w-6 h-6 mt-1 text-[#0A1F36]" />
                    In a leveraged transaction, the capital stack is the blueprint for your returns. 
                    Our advisory service provides the definitive analysis to architect, negotiate, and manage this structure. 
                    We move beyond basic modeling to deliver the intelligence required to secure optimal terms, 
                    navigate covenants with certainty, and build a capital foundation designed for acquisition, growth, and exit.
                </p>
            </div>

            {/* Call-to-Action Statement */}
            <div
                className="flex justify-center text-4xl font-sans mt-6 p-4 text-center"
                style={{ color: '#0A1F36' }}
            >
                The Oakworth Deliverable: Command of Your Capital Structure
            </div>
        </>
    );
}
