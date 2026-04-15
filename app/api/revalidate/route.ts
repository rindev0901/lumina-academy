import { RouteSegment } from "@/app/constants";
import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest): Promise<NextResponse> {
  const revalidate = request.nextUrl.searchParams.get("revalidate");
  const type = request.nextUrl.searchParams.get("type");

  const timestamp = new Date().getTime();

  if (!revalidate) {
    return Promise.resolve(
      NextResponse.json({
        revalidated: false,
        timestamp,
      })
    );
  }

  switch (type) {
    case "path": {
      const rawScope = request.nextUrl.searchParams.get("scope");

      const scope: "layout" | "page" =
        rawScope === "layout" || rawScope === "page" ? rawScope : "layout";

      const segment = request.nextUrl.searchParams.get(
        "segment"
      ) as RouteSegment;

      if (segment === RouteSegment.Literal) {
        revalidatePath(revalidate);
      } else {
        revalidatePath(revalidate, scope);
      }
      break;
    }
    case "tag": {
      revalidateTag(revalidate, "max");
      break;
    }
    default: {
      return Promise.resolve(
        NextResponse.json({
          revalidated: false,
          timestamp,
        })
      );
    }
  }

  return Promise.resolve(
    NextResponse.json({
      revalidated: true,
      timestamp,
    })
  );
}
