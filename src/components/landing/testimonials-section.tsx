import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "DevBran.ch revolutionized how I showcase my projects. The developer-focused features make it perfect for my portfolio.",
            name: "Alex Chen",
            title: "Full Stack Developer"
        },
        {
            quote: "Finally, a link-in-bio tool that understands developers. The GitHub integration and code snippet features are game-changers.",
            name: "Sarah Rodriguez",
            title: "Frontend Engineer"
        },
        {
            quote: "Clean, professional, and packed with features developers actually need. My clients love the professional look.",
            name: "Mike Johnson",
            title: "DevOps Engineer"
        },
        {
            quote: "The analytics and custom domains make this perfect for my freelance business. Highly recommended!",
            name: "Emily Davis",
            title: "Freelance Developer"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Loved by Developers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See what developers are saying about DevBran.ch
                    </p>
                </div>

                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    className="py-4"
                />
            </div>
        </section>
    );
}
