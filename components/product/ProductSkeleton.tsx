import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col h-fit">
            <div className="relative h-[428px] lg:h-[428px] md:h-[300px] sm:h-[250px] w-full bg-gray-200 rounded-[8px] overflow-hidden">
                <div className="absolute bottom-0 left-0 p-[20px] w-full">
                    <div className="h-[36px] bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-[20px] bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
    return (
        <>
            {/* Desktop Skeleton */}
            <div className="hidden lg:grid grid-cols-2 h-fit justify-start gap-[8px] gap-x-[8px] w-full">
                {Array.from({ length: count }).map((_, i) => (
                    <ProductSkeleton key={`skeleton-desktop-${i}`} />
                ))}
            </div>

            {/* Mobile Skeleton */}
            <div className="lg:hidden grid grid-cols-2 gap-[3px] gap-y-[3px] mt-[14px] w-full">
                {Array.from({ length: count }).map((_, i) => (
                    <div key={`skeleton-mobile-${i}`} className="animate-pulse flex flex-col h-fit">
                        <div className="relative h-[45vw] w-full bg-gray-200 rounded-[8px] overflow-hidden">
                            <div className="absolute bottom-0 left-0 p-[10px] w-full">
                                <div className="h-[18px] bg-gray-300 rounded w-3/4 mb-1"></div>
                                <div className="h-[12px] bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductSkeleton;
