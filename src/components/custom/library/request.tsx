import RequestBookForm from "@/components/custom/forms/request-book-form";

export default function RequestComponent() {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-medium capitalize">Request a Book</h1>
      <RequestBookForm />
    </div>
  );
}
