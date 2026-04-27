import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const BlogIndex = lazy(() => import("./pages/BlogIndex.tsx"));
const BlogArticle = lazy(() => import("./pages/BlogArticle.tsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.tsx"));
const QuizPage = lazy(() => import("./pages/QuizPage.tsx"));
const FaqPage = lazy(() => import("./pages/FaqPage.tsx"));
const ConfidentialitePage = lazy(() => import("./pages/ConfidentialitePage.tsx"));
const CguPage = lazy(() => import("./pages/CguPage.tsx"));
const AProposPage = lazy(() => import("./pages/AProposPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

// fallback={null} — keeps the prerender's waitForSelector("#root > *")
// honest: Suspense renders no DOM during chunk fetch, so the selector
// only matches after the lazy chunk hydrates the actual page.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/profil/:slug" element={<ProfilePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/confidentialite" element={<ConfidentialitePage />} />
            <Route path="/cgu" element={<CguPage />} />
            <Route path="/a-propos" element={<AProposPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
