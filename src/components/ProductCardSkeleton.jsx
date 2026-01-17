"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <Card
      className="max-w-97 shadow-lg rounded-md overflow-hidden h-full flex flex-col animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-200 rounded-lg"></div>

      <CardContent className="space-y-2 flex-1">
        {/* Title */}
        <Skeleton className="h-5 w-3/4 rounded" />

        {/* Brand */}
        <Skeleton className="h-4 w-1/2 rounded" />

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-5 w-1/4 rounded" />
          <Skeleton className="h-5 w-1/6 rounded" />
        </div>

        {/* Description */}
        <Skeleton className="h-3 w-full rounded mt-2" />
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-2/3 rounded" />
      </CardContent>

      <CardFooter className="mt-auto">
        <Skeleton className="h-10 w-full rounded" />
      </CardFooter>
    </Card>
  );
}
