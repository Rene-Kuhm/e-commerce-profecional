/**
 * ProductCardSkeleton Component
 * Loading skeleton for ProductCard with shimmer effect
 */
export function ProductCardSkeleton() {
    return (
        <div className="card flex flex-col h-full relative border-border/50 animate-pulse">
            {/* Image Skeleton */}
            <div className="relative aspect-[3/4] bg-muted/50 rounded-t-[var(--radius-card)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/30 to-transparent animate-shimmer" />
            </div>

            {/* Content Skeleton */}
            <div className="flex flex-col p-4 gap-3 flex-1">
                {/* Title */}
                <div className="h-5 bg-muted/50 rounded w-3/4" />

                {/* Category */}
                <div className="h-3 bg-muted/30 rounded w-1/2" />

                {/* Price */}
                <div className="h-6 bg-muted/50 rounded w-1/3 mt-2" />

                {/* Spacer */}
                <div className="flex-1" />

                {/* Button */}
                <div className="h-10 bg-muted/40 rounded-[var(--radius-sm)] w-full" />
            </div>
        </div>
    );
}

/**
 * ProductGridSkeleton Component
 * Shows multiple product card skeletons in grid layout
 */
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}
