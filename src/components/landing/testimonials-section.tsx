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
        <section id="testimonials" className="py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/15 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6">
                        💬 Testimonials
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Loved by </span>
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Developers</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                        See what developers around the world are saying about DevBran.ch
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
