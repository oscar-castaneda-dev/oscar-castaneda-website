import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GitHubIcon } from "../icons/github-icon";
import Link from "next/link";

export function InfoPanel() {
  return (
    <section className="space-y-6">
      <Card className="gap-3">
        <CardHeader>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">Case Study</Badge>
            <Badge variant="outline">2025</Badge>
          </div>
          <CardTitle className="text-2xl">My Budget Plan</CardTitle>
          <CardDescription>
            FinanceFlow is a comprehensive financial management application
            designed to simplify complex banking operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Cost</h3>
            <p className="text-sm text-muted-foreground">$1,500 dls</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Time</h3>
            <p className="text-sm text-muted-foreground">80 hours</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Tehcnologies</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• React</li>
              <li>• Typescript</li>
              <li>• TailwindCSS</li>
              <li>• Spring boot</li>
              <li>• OAuth 2.0</li>
              <li>• PostgreSQL</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Explore the project</CardTitle>
          <CardDescription>
            Get hands-on with the FinanceFlow experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-3">
          <Link href="/" target="_blank">
            <Button className="w-full gap-2 cursor-pointer">
              <ArrowUpRight className="size-4" />
              Try live demo
            </Button>
          </Link>
          <Link href="/" target="_blank">
            <Button variant="outline" className="w-full gap-2 cursor-pointer">
              <GitHubIcon className="size-4" />
              View on GitHub
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
