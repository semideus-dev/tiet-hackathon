import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlarmClock } from "lucide-react";

export default function GarbageAlerts() {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-medium capitalize">Recent Alerts</h1>
      <div className="flex flex-col space-y-2 rounded-lg border-2 border-b-primary p-2">
        <Alert variant="destructive">
          <AlertTitle className="flex items-center space-x-2">
            <AlarmClock />
            <span>Garbage Bin is full!</span>
          </AlertTitle>
          <AlertDescription>
            Bin #08 located at Computer Science Dept (Front) is full and needs
            collection.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle className="flex items-center space-x-2">
            <AlarmClock />
            <span>Garbage Bin is empty!</span>
          </AlertTitle>
          <AlertDescription>
            Bin #13 located at Electronic Dept (Back) has been collected.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
