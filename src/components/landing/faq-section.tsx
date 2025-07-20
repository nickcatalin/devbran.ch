import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection() {
    const faqItems = [
        {
            question: "What makes DevBran.ch different from other link-in-bio tools?",
            answer: "DevBran.ch is specifically designed for developers with features like GitHub integration, code snippet sharing, tech stack showcases, and developer-friendly analytics."
        },
        {
            question: "Can I use my own custom domain?",
            answer: "Yes! DevBran.ch supports custom domains so you can maintain your professional brand while using our platform."
        },
        {
            question: "Is there a free plan available?",
            answer: "Yes, we offer a free plan that includes all basic features. Premium plans unlock advanced analytics, custom domains, and additional customization options."
        },
        {
            question: "How do I import my projects from GitHub?",
            answer: "Simply connect your GitHub account and select which repositories you'd like to showcase. We'll automatically pull in project descriptions, tech stacks, and live demo links."
        },
        {
            question: "Can I embed code snippets in my profile?",
            answer: "Absolutely! You can embed syntax-highlighted code snippets to showcase your skills or share quick examples of your work."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#565264] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-[#565264]/80">
                        Everything you need to know about DevBran.ch
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-[#565264]/20">
                            <AccordionTrigger className="text-left text-[#565264] hover:text-[#56876D]">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#565264]/80">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
