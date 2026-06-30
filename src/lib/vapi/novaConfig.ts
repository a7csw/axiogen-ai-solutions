import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export type NovaLanguage = "en" | "tr" | "ar";

const BOOKING_PROTOCOL: Record<NovaLanguage, string> = {
  en: `CRITICAL BOOKING PROTOCOL - FOLLOW EXACTLY:
Before calling the save_booking tool, you MUST collect ALL of the following information from the patient:
1. Full name (first and last name)
2. Phone number
3. Appointment type (cleaning, checkup, filling, whitening, extraction, implant)
4. Preferred date
5. Preferred time

DO NOT call save_booking until you have ALL FIVE pieces of information.
If the patient tries to confirm before providing all info, politely ask for what's missing.

Call save_booking ONLY ONCE per conversation. NEVER call it twice.
If the patient adds or corrects information after the booking is saved, acknowledge the update verbally but DO NOT call save_booking again.

`,
  tr: `KRİTİK REZERVASYON PROTOKOLÜ - TAM OLARAK UYGULA:
save_booking aracını çağırmadan ÖNCE, hastadan aşağıdaki bilgilerin TÜMÜNÜ almalısın:
1. Tam ad (ad ve soyad)
2. Telefon numarası
3. Randevu türü (temizlik, kontrol, dolgu, beyazlatma, çekim, implant)
4. Tercih edilen tarih
5. Tercih edilen saat

BEŞ bilginin HEPSİNE sahip olana kadar save_booking'i ÇAĞIRMA.
Hasta tüm bilgileri vermeden önce onaylamaya çalışırsa, eksik olan bilgiyi kibarca sor.

save_booking'i bir konuşmada YALNIZCA BİR KEZ çağır. ASLA iki kez çağırma.
Hasta rezervasyon kaydedildikten sonra bilgi eklerse veya düzeltirse, güncellemeyi sözel olarak onayla ama save_booking'i TEKRAR ÇAĞIRMA.

`,
  ar: `بروتوكول الحجز الحاسم - اتبعه بدقة:
قبل استدعاء أداة save_booking، يجب عليك جمع جميع المعلومات التالية من المريض:
1. الاسم الكامل (الاسم الأول واسم العائلة)
2. رقم الهاتف
3. نوع الموعد (تنظيف، فحص، حشو، تبييض، خلع، زراعة)
4. التاريخ المفضل
5. الوقت المفضل

لا تستدعِ save_booking حتى تحصل على جميع المعلومات الخمس.
إذا حاول المريض التأكيد قبل تقديم جميع المعلومات، اسأل بلطف عما هو مفقود.

استدعِ save_booking مرة واحدة فقط في المحادثة. لا تستدعها مرتين أبداً.
إذا أضاف المريض أو صحح معلومات بعد حفظ الحجز، أقرّ بالتحديث شفهياً لكن لا تستدعِ save_booking مرة أخرى.

`,
};

const DIALECT_CONTEXT: Record<NovaLanguage, string> = {
  en: "",
  tr: "",
  ar: "أنت تفهم جميع اللهجات العربية: الخليجية، الشامية، المصرية، المغربية، والفصحى. تحدث دائماً بالعربية الفصحى المبسطة الواضحة. ",
};

const LANGUAGE_LOCK: Record<NovaLanguage, string> = {
  en: "",
  tr: "ÖNEMLİ: Her zaman Türkçe yanıt ver. Asla İngilizce veya başka bir dil kullanma. Kullanıcı başka dilde konuşsa bile sen Türkçe yanıtla. ",
  ar: "مهم جداً: أجب دائماً باللغة العربية فقط. لا تستخدم الإنجليزية أو أي لغة أخرى أبداً. حتى لو تحدث المستخدم بلغة أخرى، أنت ترد بالعربية. ",
};

const GOODBYE_INSTRUCTION: Record<NovaLanguage, string> = {
  en: " When the patient says goodbye or indicates the conversation is over, politely say goodbye and end the call.",
  tr: " Hasta vedalaştığında veya konuşmanın bittiğini belirttiğinde, nazikçe veda et ve aramayı sonlandır.",
  ar: " عندما يودعك المريض أو يشير إلى انتهاء المحادثة، ودعه بلطف وأنه المكالمة.",
};

const SILENCE_INSTRUCTION: Record<NovaLanguage, string> = {
  en: " If the patient has not spoken for 30 seconds, politely say 'I haven't heard from you, I'll end the call now. Feel free to call back anytime. Goodbye!' and end the call.",
  tr: " Eğer hasta 30 saniye boyunca konuşmadıysa, kibarca 'Sizi duyamıyorum, aramayı sonlandırıyorum. İstediğiniz zaman tekrar arayabilirsiniz. İyi günler!' deyin ve aramayı bitirin.",
  ar: " إذا لم يتحدث المريض لمدة 30 ثانية، قل بلطف: 'لم أسمعك، سأنهي المكالمة الآن. لا تتردد في الاتصال بنا في أي وقت. مع السلامة!' وأنهِ المكالمة.",
};

type NovaTranscriber =
  | { provider: "deepgram"; model: "nova-2"; language: string }
  | { provider: "azure"; language: string };

const TRANSCRIBER: Record<NovaLanguage, NovaTranscriber> = {
  en: { provider: "deepgram", model: "nova-2", language: "en" },
  tr: { provider: "deepgram", model: "nova-2", language: "tr" },
  ar: { provider: "deepgram", model: "nova-2", language: "ar" },
};

const END_CALL_MESSAGE: Record<NovaLanguage, string> = {
  en: "Thank you for calling NovaDent Clinic. Goodbye!",
  tr: "NovaDent Kliniği'ni aradığınız için teşekkürler. Görüşmek üzere!",
  ar: "شكراً لاتصالك بعيادة نوفادنت. إلى اللقاء!",
};

const END_CALL_PHRASES: Record<NovaLanguage, string[]> = {
  en: ["goodbye", "bye", "thank you bye", "have a nice day"],
  tr: ["görüşmek üzere", "hoşça kal", "iyi günler", "güle güle", "teşekkürler görüşürüz"],
  ar: ["مع السلامة", "وداعا", "شكرا مع السلامة", "إلى اللقاء", "يوم سعيد"],
};

const SYSTEM_PROMPT: Record<NovaLanguage, string> = {
  en: `You are Nova, a warm and professional AI receptionist for NovaDent Clinic, a modern dental practice in Istanbul. Help patients with: booking appointments (cleanings, checkups, fillings, whitening, extractions, implants), services and pricing (cleaning $80, whitening $200, filling $150, extraction $100, implant $800), clinic hours (Monday–Saturday 9am–6pm, closed Sunday), location (123 Health Street, Şişli, Istanbul). Be concise, warm, and professional. Respond in English.`,

  tr: `Sen NovaDent Kliniği'nin sıcak ve profesyonel yapay zeka resepsiyonisti Nova'sın. İstanbul'da modern bir diş kliniği. Hastalara şu konularda yardım et: randevu alma (temizlik, kontrol, dolgu, beyazlatma, çekim, implant), hizmetler ve fiyatlandırma (temizlik 2400₺, beyazlatma 6000₺, dolgu 4500₺, çekim 3000₺, implant 24000₺), çalışma saatleri (Pazartesi–Cumartesi 09:00–18:00, Pazar kapalı), konum (Sağlık Caddesi 123, Şişli, İstanbul). Kısa, sıcak ve profesyonel ol. Türkçe yanıt ver.`,

  ar: `أنت نوفا، موظفة استقبال احترافية وذكية لعيادة نوفادنت لطب الأسنان في إسطنبول. أنت متخصصة وسريعة ودقيقة. تفهمين جميع اللهجات العربية وتردّين بالعربية الفصحى المبسطة دائماً.

خدماتك وأسعارك: تنظيف (2500 ليرة)، تبييض (6500 ليرة)، حشو (4800 ليرة)، خلع (3200 ليرة)، زراعة (25000 ليرة)، فحص شامل (1500 ليرة).
ساعات العمل: الاثنين إلى السبت من 9 صباحاً حتى 6 مساءً، مغلق الأحد.
الموقع: 123 شارع الصحة، شيشلي، إسطنبول.

أسلوبك: احترافي، دافئ، موجز. لا تكرري نفسك. أجيبي على الأسئلة مباشرة وبثقة. إذا أراد المريض حجز موعد، اجمعي المعلومات الخمس بسرعة وكفاءة. لا تقولي 'بالطبع' أو 'تفضل' بشكل مفرط — كوني طبيعية ومهنية كموظفة استقبال حقيقية.`,
};

const FIRST_MESSAGE: Record<NovaLanguage, string> = {
  en: "Thank you for calling NovaDent Clinic! This is Nova, your AI receptionist. How can I help you today?",
  tr: "NovaDent Kliniği'ni aradığınız için teşekkürler! Ben Nova, yapay zeka resepsiyonistinizim. Size nasıl yardımcı olabilirim?",
  ar: "شكراً لاتصالك بعيادة نوفادنت! أنا نوفا، موظفة الاستقبال الذكية. كيف يمكنني مساعدتك اليوم؟",
};

const saveBookingTool = {
  type: "function" as const,
  function: {
    name: "save_booking",
    description:
      "Record a confirmed patient appointment. Only call this ONCE per conversation AFTER collecting ALL five required fields: patient name, phone number, appointment type, appointment date, and appointment time.",
    parameters: {
      type: "object",
      properties: {
        patient_name: {
          type: "string",
          description: "Full name of the patient (first and last name)",
        },
        phone_number: {
          type: "string",
          description: "Patient's phone number as they provided it",
        },
        appointment_type: {
          type: "string",
          description: "One of: cleaning, checkup, filling, whitening, extraction, implant",
        },
        appointment_date: {
          type: "string",
          description: "The appointment date, either ISO format or natural language as given by the patient (e.g., 'Monday', 'April 22', 'next Tuesday')",
        },
        appointment_time: {
          type: "string",
          description: "The appointment time of day (e.g., '2pm', '14:00')",
        },
      },
      required: [
        "patient_name",
        "phone_number",
        "appointment_type",
        "appointment_date",
        "appointment_time",
      ],
    },
  },
};

export function buildNovaAssistant(language: NovaLanguage): CreateAssistantDTO {
  const systemContent =
    BOOKING_PROTOCOL[language] +
    DIALECT_CONTEXT[language] +
    LANGUAGE_LOCK[language] +
    SYSTEM_PROMPT[language] +
    GOODBYE_INSTRUCTION[language] +
    SILENCE_INSTRUCTION[language];

  const realtimeModel = {
    provider: "openai" as const,
    model: "gpt-4o-realtime-preview",
    messages: [{ role: "system" as const, content: systemContent }],
    tools: [saveBookingTool],
  };

  const realtimeVoice = {
    provider: "openai" as const,
    voiceId: "shimmer",
  };

  if (language === "ar") {
    return {
      firstMessage: FIRST_MESSAGE[language],
      transcriber: TRANSCRIBER[language],
      silenceTimeoutSeconds: 30,
      maxDurationSeconds: 600,
      model: {
        provider: "openai",
        model: "gpt-4o",
        temperature: 0.3,
        messages: [{ role: "system", content: systemContent }],
        tools: [saveBookingTool],
      },
      voice: {
        provider: "11labs",
        voiceId: "21m00Tcm4TlvDq8ikWAM",
        model: "eleven_turbo_v2_5",
        stability: 0.5,
        similarityBoost: 0.75,
        style: 0.0,
        useSpeakerBoost: true,
      },
      endCallFunctionEnabled: true,
      endCallMessage: END_CALL_MESSAGE[language],
      endCallPhrases: END_CALL_PHRASES[language],
    } as CreateAssistantDTO;
  }

  if (language === "en") {
    return {
      firstMessage: FIRST_MESSAGE[language],
      silenceTimeoutSeconds: 30,
      maxDurationSeconds: 600,
      model: realtimeModel,
      voice: realtimeVoice,
      endCallFunctionEnabled: true,
      endCallMessage: END_CALL_MESSAGE[language],
      endCallPhrases: END_CALL_PHRASES[language],
    } as CreateAssistantDTO;
  }

  // Turkish: Realtime model + OpenAI voice, keep Deepgram transcriber
  return {
    firstMessage: FIRST_MESSAGE[language],
    transcriber: TRANSCRIBER[language],
    silenceTimeoutSeconds: 30,
    maxDurationSeconds: 600,
    model: realtimeModel,
    voice: realtimeVoice,
    endCallFunctionEnabled: true,
    endCallMessage: END_CALL_MESSAGE[language],
    endCallPhrases: END_CALL_PHRASES[language],
  } as CreateAssistantDTO;
}
