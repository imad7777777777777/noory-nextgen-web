import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, profileResults, QuizProfile } from "@/data/quizData";
import { useSEO } from "@/hooks/useSEO";
import { Progress } from "@/components/ui/progress";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<QuizProfile[]>([]);
  const [result, setResult] = useState<QuizProfile | null>(null);

  useSEO({
    title: "Quiz — Découvre ton profil financier en 2 minutes | Noory",
    description: "Fais le quiz Noory et découvre ton profil financier comportemental. 5 questions pour comprendre ton rapport à l'argent et recevoir un coaching adapté.",
    url: "/quiz",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Quiz Profil Financier Noory",
      description: "Découvre ton profil financier comportemental en 2 minutes.",
      url: "https://noory.io/quiz",
      inLanguage: "fr",
    },
  });

  const handleAnswer = useCallback(
    (profile: QuizProfile) => {
      const newAnswers = [...answers, profile];
      setAnswers(newAnswers);

      if (current < quizQuestions.length - 1) {
        setCurrent(current + 1);
      } else {
        const counts: Record<string, number> = {};
        newAnswers.forEach((p) => {
          counts[p] = (counts[p] || 0) + 1;
        });
        const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as QuizProfile;
        setResult(winner);
      }
    },
    [answers, current]
  );

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = result ? 100 : ((current) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 min-h-[80vh] flex flex-col">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl flex-1 flex flex-col">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>Quiz — Ton profil financier</span>
              <span>{result ? "Résultat" : `${current + 1}/${quizQuestions.length}`}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <AnimatePresence mode="wait">
            {result ? (
              <ResultScreen key="result" profile={result} onRestart={restart} />
            ) : (
              <QuestionScreen
                key={current}
                question={quizQuestions[current]}
                onAnswer={handleAnswer}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

function QuestionScreen({
  question,
  onAnswer,
}: {
  question: (typeof quizQuestions)[0];
  onAnswer: (profile: QuizProfile) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex flex-col justify-center"
    >
      <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 leading-snug">
        {question.question}
      </h1>

      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option.profile)}
            className="w-full text-left p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-foreground/80 leading-relaxed"
          >
            <span className="text-sm font-medium text-muted-foreground mr-3">
              {String.fromCharCode(97 + i)})
            </span>
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function ResultScreen({
  profile,
  onRestart,
}: {
  profile: QuizProfile;
  onRestart: () => void;
}) {
  const result = profileResults[profile];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col justify-center text-center"
    >
      <span className="text-6xl mb-4 block">{result.emoji}</span>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
        Tu es {result.name}
      </h1>
      <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
        {result.description}
      </p>

      <div className="p-8 bg-card border border-border rounded-2xl mb-6">
        <h3 className="text-lg font-display font-bold text-foreground mb-3">
          Découvre ton parcours complet sur Noory
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          28 jours de coaching adapté à ton profil. Gratuit 7 jours sur iPhone.
        </p>
        <AppStoreBadge className="mx-auto" />
      </div>

      <div className="flex flex-col items-center gap-3">
        <Link
          to={`/profil/${result.slug}`}
          className="text-sm text-primary hover:underline"
        >
          Voir le détail du profil {result.name}
        </Link>
        <button
          onClick={onRestart}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Refaire le quiz
        </button>
      </div>
    </motion.div>
  );
}

export default QuizPage;
