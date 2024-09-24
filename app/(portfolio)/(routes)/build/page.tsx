import icons from '@/utils/icons'; // Assuming this is an array of icon components or URLs
import Image from 'next/image';
import React from 'react';

const BuildProcess = () => {
    return (
        <div className="bg-white dark:bg-darkColor text-gray-900 dark:text-gray-100 pt-[12vh] background-half-shade px-[20vw] max-md:px-[8vw] text-lg mb-10">
            {/* Main container using flexbox */}
            <p className='text-4xl font-bold text-center mb-20' style={{ textShadow: "1px 1px 6px gray" }}>
                HOW WE HELP YOU BUILD YOUR BRAND.
            </p>

            <div className="flex flex-col space-y-20">
                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        {/* Render sections up to the 4th section */}
                        <Section
                            title={sectionData[index].title}
                            content={sectionData[index].content}
                            listItems={sectionData[index].listItems}
                            extraContent={sectionData[index].extraContent}
                        />
                        {/* Icons after each section up to the 4th */}
                        <div className="flex justify-center space-x-4 max-md:space-x-2 my-6">
                            {icons.slice(index * 2, index * 2 + 2).map((Icon, i) => (

                                <Image src={Icon} alt="" key={i} className="w-60 h-60 max-md:w-40 max-md:h-40 text-gray-900 dark:text-gray-100" />

                            ))}
                        </div>
                        {/* White divider */}
                        <div className="border-b border-white my-6"></div>
                    </div>
                ))}

                {/* Additional sections after the 4th section (without icons) */}
                {sectionData.slice(4).map((section, index) => (
                    <div key={index + 4}>
                        <Section
                            title={section.title}
                            content={section.content}
                            listItems={section.listItems}
                            extraContent={section.extraContent}
                        />
                        {/* White divider after each section */}
                        <div className="border-b border-white my-6"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildProcess;

// Data for the sections (title, content, etc.)
const sectionData = [
    {
        title: "WE START BY UNDERSTANDING YOU",
        content:
            "Before we dive into any strategy, we focus on understanding your business, its values, and your vision. We ask the right questions:",
        listItems: [
            "Who are your customers?",
            "What’s your brand personality?",
            "What are your business goals?",
        ],
    },
    {
        title: "WE CREATE A CUSTOM STRATEGY NO TEMPLATES HERE!",
        content:
            "Unlike other agencies that use cookie-cutter solutions, we tailor our approach specifically for your brand. Whether it’s social media, website design, or content creation, everything is built uniquely for you. We believe in:",
        listItems: ["Fresh ideas", "Personalized plans", "Zero generic solutions"],
    },
    {
        title: "YOUR BRAND GETS A MAKEOVER INSIDE AND OUT",
        content:
            "From your visuals to the way you communicate with your audience, we ensure your brand has a modern, cohesive identity that resonates with your target market. This includes:",
        listItems: [
            "Crafting a unique logo and brand colors",
            "Building creatives",
            "Designing social media content that speaks your brand language",
        ],
    },
    {
        title: "WE ENGAGE YOUR AUDIENCE INSTEAD OF JUST POSTING",
        content:
            "While many agencies simply post and forget, we go further. We actively engage your followers, reply to comments, and create interactive content that drives conversation. This keeps your audience hooked and invested in your brand.",
        listItems: ["Regular interaction", "Trending and engaging content"],
    },
    {
        title: "DATA-DRIVEN GROWTH: WE DON’T RELY ON GUESSWORK",
        content:
            "Most agencies promise results but can’t back it up. At Globix, we use real data to refine and improve your marketing efforts. We track:",
        listItems: [
            "What works and what doesn’t",
            "Your audience’s behavior",
            "ROI (Return on Investment)",
        ],
        extraContent:
            "With this data, we fine-tune your strategy to ensure continuous growth.",
    },
    {
        title: "WE EVOLVE WITH YOUR BRAND",
        content:
            "As your brand grows, we grow with you. Marketing is not a 'set it and forget it' situation; it’s a continuous process. We keep:",
        listItems: [
            "Updating your strategy based on the latest trends",
            "Ensuring you stay ahead of your competitors",
            "Fine-tuning your campaigns to maximize results",
        ],
    },
    {
        title: "HERE’S HOW WE’RE DIFFERENT",
        content:
            "Now, let’s get real: why are we different from other agencies?",
        listItems: [
            "Tailored Solutions: Unlike others who offer one-size-fits-all strategies, we customize every part of your digital marketing.",
            "Personalized Service: You won’t feel like just another client. We focus on building long-term relationships with personal attention to every project.",
            "Continuous Support: We don’t disappear once your campaigns are live. We’re in it for the long haul, ensuring your brand evolves.",
        ],
        extraContent: "Other agencies might just deliver the work; we deliver results.",
    },
    {
        title: "Ready to Build Your Brand with Globix?",
        content:
            "We believe in turning your vision into a reality, one strategic move at a time. Let’s get started on building a brand that stands out and scales up!",
    },
];

interface SectionProps {
    title: string;
    content: string;
    listItems?: string[];
    extraContent?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, listItems, extraContent }) => {
    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{content}</p>
            {listItems && (
                <ul className="list-disc pl-5">
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {extraContent && <p>{extraContent}</p>}
        </div>
    );
};
