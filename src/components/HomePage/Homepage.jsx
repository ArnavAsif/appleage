import React, { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Lazy-loaded components
const Headers = lazy(() => import("./Headers"));
const UpcommingMobiles = lazy(() => import("./UpcommingMobiles"));
const DownloadSection = lazy(() => import("./DownloadSection"));
const AllMobiles = lazy(() => import("./AllMobiles"));
const Promotions = lazy(() => import("./Promotions"));

// Skeleton loaders for each section
const HeaderSkeleton = () => <Skeleton height={80} />;
const MovieSectionSkeleton = () => (
  <div style={{ padding: "1rem 0" }}>
    <Skeleton height={40} width={200} />
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} height={300} width={200} />
      ))}
    </div>
  </div>
);

const Homepage = () => {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <Headers />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <UpcommingMobiles />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <DownloadSection />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <AllMobiles />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <Promotions />
      </Suspense>
    </div>
  );
};

export default Homepage;
