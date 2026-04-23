"use client";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { unstable_catchError, type ErrorInfo } from "next/error";

function ErrorFallback(
  props: { title: string },
  { error, unstable_retry }: ErrorInfo,
) {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>{props.title}</AlertTitle>
      <AlertDescription>
        <details>
          <summary className="-ml-4">{error.message}</summary>
          {(error.cause as any) && (
            <pre className="mt-2 p-1 rounded-sm whitespace-pre-wrap break-words text-xs bg-destructive/10">
              {JSON.stringify(error.cause, null, 2)}
            </pre>
          )}
        </details>
      </AlertDescription>

      <AlertAction>
        <Button size="xs" variant="destructive" onClick={() => unstable_retry()}>
          Try again
        </Button>
      </AlertAction>
    </Alert>
  );
}

const ErrorBoundary = unstable_catchError(ErrorFallback);

export default ErrorBoundary;
