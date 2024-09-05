import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <main>
      <div className="flex min-h-screen flex-col gap-4 p-4 sm:flex-row">
        <Textarea
          placeholder="Type your message here."
          className="flex-grow rounded-md"
        />
        <Button>Send</Button>
      </div>
    </main>
  );
}
