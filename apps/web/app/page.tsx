import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div>
      <Card title="hey" href="wow">
        <Code>
          hey
        </Code>
      </Card>
      <Button appName="wow">
        hey
      </Button>
    </div>
  )
}