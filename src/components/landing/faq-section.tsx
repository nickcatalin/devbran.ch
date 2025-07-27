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
        <section id="faq" className="py-24 bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
                        ❓ FAQ
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Frequently Asked </span>
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                        Everything you need to know about DevBran.ch
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-6">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border/50 rounded-lg px-6 py-2 bg-card/60 backdrop-blur hover:border-primary/30 transition-all duration-300"
                        >
                            <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium text-lg py-6 hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
