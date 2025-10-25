import { ArrowBigRightDashIcon } from "lucide-react";

export default function ProfessionalServices(){
    return(
        <>
        <h1
        className="flex justify-center font-sans text-4xl sm:2xl md:4xl m-auto p-4 "
         style={{
            color: '#0A1F36'
         }}
        >
        The Architecture of Strategic Leverage
        </h1>
        <p className="flex justify-between text-2xl font-sans mask-repeat-round p-7 self-center">
        Capital is a tool. We engineer its structure to balance resilience, cost, and maximum return,turning debt from a liability into your most powerful lever for value creation.
        </p>
        <div
        className="bg-gray-200 justify-evenly m-7 p-6">
        <p
        className="text-2xl font-sans"
        >
            <ArrowBigRightDashIcon></ArrowBigRightDashIcon>In a leveraged transaction, the capital stack is the blueprint for your returns. Our advisory service provides the definitive analysis to architect, negotiate, and manage this structure. We move beyond basic modeling to deliver the intelligence required to secure optimal terms, navigate covenants with certainty, and build a capital foundation designed for acquisition, growth, and exit.
        </p>
        </div>
        <div
        className="flex justify-center text-4xl font-sans"
        style={{
             color: '#0A1F36'
        }}>
         The Oakworth Deliverable: Command of Your Capital Structure
        </div>
        </>
    )
}