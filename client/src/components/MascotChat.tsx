import { AIChatBox } from "@/components/AIChatBox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { trpc } from "@/lib/trpc";
import { MessageCircleHeart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const mascotImage = "/manus-storage/misspphecachibi_fff91bc9.png";

const quickPrompts = [
  "Thảo gợi ý vị trà hợp hôm nay",
  "Xem giá và ưu đãi",
  "Cách pha trà PPHeCa",
  "Mua tại TikTok Shop",
];

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function MascotChat() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFloatingTrigger, setShowFloatingTrigger] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
      setShowFloatingTrigger(!mediaQuery.matches || window.scrollY > 560);
    };
    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    window.addEventListener("scroll", syncViewport, { passive: true });
    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
      window.removeEventListener("scroll", syncViewport);
    };
  }, []);

  const chatMutation = trpc.mascotChat.ask.useMutation({
    onSuccess: ({ reply }) => {
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
    },
    onError: () => {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Thảo đang chưa kết nối được với xưởng. Bạn có thể thử lại sau, hoặc mở [TikTok Shop PPHeCa](https://vt.tiktok.com/ZS9kmsHgCRh1o-fN0Px/) để xem thông tin bán hàng.",
        },
      ]);
    },
  });

  const handleSendMessage = (content: string) => {
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    chatMutation.mutate({
      messages: nextMessages.slice(-8).map(({ role, content: text }) => ({ role, content: text })),
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className={`mascot-chat-trigger${showFloatingTrigger ? "" : " is-hidden"}`}
        onClick={() => setOpen(true)}
        aria-label="Mở trợ lý Thảo"
      >
        <span className="mascot-chat-image-wrap">
          <img src={mascotImage} alt="Thảo, trợ lý PPHeCa" />
          <i aria-hidden="true" />
        </span>
        <span className="mascot-chat-trigger-copy"><small>HỎI THẢO</small><strong>Tìm vị hợp hôm nay</strong></span>
        <MessageCircleHeart size={19} aria-hidden="true" />
      </button>

      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className="mascot-chat-sheet !w-full !max-w-[440px] !gap-0 !border-[#d8cfbb] !p-0"
      >
        <SheetHeader className="mascot-chat-header">
          <img className="mascot-chat-header-avatar" src={mascotImage} alt="" aria-hidden="true" />
          <div>
            <SheetTitle>Thảo ở đây</SheetTitle>
            <SheetDescription>Hỏi nhanh về vị trà, cách pha, giá hoặc nơi mua.</SheetDescription>
          </div>
          <Sparkles className="mascot-chat-header-sparkle" size={17} aria-hidden="true" />
        </SheetHeader>
        <div className="mascot-chat-intro">
          <p>PPHeCa sẽ cùng Thảo gợi ý một khoảng nghỉ hợp nhịp hôm nay. Thảo không tư vấn điều trị hay thay thế thuốc.</p>
        </div>
        <AIChatBox
          className="mascot-chat-box h-full min-h-0 flex-1 rounded-none border-0 shadow-none"
          height="100%"
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={chatMutation.isPending}
          placeholder="Ví dụ: Giá túi 15 gói là bao nhiêu?"
          emptyStateMessage="Bắt đầu bằng một điều bạn đang cần cho hôm nay."
          suggestedPrompts={quickPrompts}
          assistantAvatar={<img className="mascot-chat-message-avatar" src={mascotImage} alt="" aria-hidden="true" />}
        />
      </SheetContent>
    </Sheet>
  );
}
