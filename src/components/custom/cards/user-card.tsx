import { Button } from "@/components/ui/button";

export default function UserCard() {
  return (
    <div className="flex flex-col-reverse items-center justify-between rounded-lg border-2 border-b-primary p-8 md:flex-row">
      <div className="mt-4 flex flex-col items-center justify-center space-y-4 md:mt-0 md:items-start md:space-y-2">
        <h1 className="text-xl font-medium md:text-3xl">
          Welcome, <span className="text-primary">Gurshabad Singh!</span>
        </h1>
        <span className="font-medium">
          Email: <span className="font-normal">shabad22@gmail.com</span>
        </span>
        <span className="font-medium">
          Student ID: <span className="font-normal">202410000488</span>
        </span>
        <br />
        <Button className="w-fit" size="sm">
          Manage Account
        </Button>
      </div>
      <div className="rounded-full bg-muted-foreground p-20"></div>
    </div>
  );
}
