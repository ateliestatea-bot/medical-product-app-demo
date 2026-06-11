import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { getDiagnosisQuestions } from "@/lib/data";

export default function DiagnosisPage() {
  const questions = getDiagnosisQuestions();

  return (
    <PageShell>
      <div className="section-heading">
        <p className="eyebrow">Diagnosis</p>
        <h1>患者様のお悩みから選択</h1>
        <p>4つの質問から、相談内容に合う製品候補を表示します。</p>
      </div>
      <div className="diagnosis-flow">
        {questions.map((question, index) => (
          <section key={question.id} className="question-block">
            <div className="question-number">{index + 1}</div>
            <div>
              <h2>{question.text}</h2>
              <div className="answer-grid">
                {question.options.map((option) => (
                  <Link
                    key={`${question.id}-${option.concern}`}
                    href={`/diagnosis/result?concern=${encodeURIComponent(option.concern)}`}
                    className="answer-button"
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
