import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { TranscriptEntry } from "@/hooks/useNovaCall";
import type { NovaLanguage } from "@/lib/vapi/novaConfig";

type Props = {
  transcript: TranscriptEntry[];
  language: NovaLanguage;
};

const TranscriptPanel = ({ transcript, language }: Props) => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [transcript]);

  return (
    <Card className="flex h-[420px] flex-col">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-3">
        <MessageSquare className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">{t("demo.novaDent.transcriptPanel.title")}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-0 flex-1 p-0">
        {transcript.length === 0 ? (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <p className="text-sm text-muted-foreground">
              {t("demo.novaDent.transcriptPanel.empty")}
            </p>
          </div>
        ) : (
          <ScrollArea className="h-full">
            <div ref={scrollRef} className="flex flex-col gap-3 px-6 pb-6">
              {transcript.map((entry) => {
                const isUser = entry.role === "user";
                const isArabic = language === "ar";
                const alignEnd = isArabic ? !isUser : isUser;
                return (
                  <div
                    key={entry.id}
                    className={cn("flex w-full", alignEnd ? "justify-end" : "justify-start")}
                  >
                    <div
                      dir={isArabic ? "rtl" : "ltr"}
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm",
                        isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground",
                        alignEnd ? "rounded-br-sm" : "rounded-bl-sm",
                        isArabic && "text-right",
                      )}
                    >
                      <p className="mb-1 text-xs font-semibold opacity-70">
                        {isUser
                          ? t("demo.novaDent.transcriptPanel.you")
                          : t("demo.novaDent.transcriptPanel.nova")}
                      </p>
                      <p className="leading-relaxed">{entry.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

export default TranscriptPanel;
