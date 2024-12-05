import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export function TestimonialCard({ content, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <blockquote className="text-muted-foreground mb-6">"{content}"</blockquote>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <img
              alt={author}
              src={image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
            />
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}