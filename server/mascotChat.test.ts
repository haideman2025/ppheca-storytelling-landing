import { describe, expect, it } from "vitest";
import { answerMascotQuestion, buildMascotSystemPrompt, getDirectMascotReply, getHealthSafetyReply, hasHealthRiskRequest, isShopIntent } from "./mascotChat";

describe("mascot chat knowledge and safety guards", () => {
  it("contains the confirmed PPHeCa prices, product knowledge and brewing guidance", () => {
    const prompt = buildMascotSystemPrompt();

    expect(prompt).toContain("54.400đ");
    expect(prompt).toContain("159.200đ");
    expect(prompt).toContain("300–600 ml");
    expect(prompt).toContain("Trà Mộc Nhan Đông Trùng 7 Vị");
    expect(prompt).toContain("Trà An Giấc 7 Vị");
    expect(prompt).toContain("không được tự liệt kê từng thành phần");
    expect(prompt).toContain("Lạc tiên, sâm nam, hành ngụ chi");
    expect(prompt).not.toContain("đang được PPHeCa đối chiếu");
  });

  it("recognizes purchase intent and health-risk requests conservatively", () => {
    expect(isShopIntent("Cho mình link TikTok Shop và giá túi 15 gói")).toBe(true);
    expect(isShopIntent("Cách pha trà thế nào?")).toBe(false);
    expect(hasHealthRiskRequest("Đang dùng thuốc thì trà này có chữa mất ngủ không?")).toBe(true);
    expect(hasHealthRiskRequest("Thảo gợi ý một khoảng nghỉ cuối ngày")).toBe(false);
  });

  it("answers confirmed prices and brewing instructions without waiting for the model", () => {
    const priceReply = getDirectMascotReply("Giá túi 15 gói và link mua là bao nhiêu?");
    const brewingReply = getDirectMascotReply("Cách pha trà thế nào?");

    expect(priceReply?.reply).toContain("159.200đ");
    expect(priceReply?.reply).toContain("TikTok Shop PPHeCa");
    expect(priceReply?.showShopLink).toBe(true);
    expect(brewingReply?.reply).toContain("300–600 ml");
    expect(brewingReply?.reply).toContain("5–10 phút");
    expect(brewingReply?.showShopLink).toBe(false);
  });

  it("uses a non-therapeutic response for medicine and health-condition questions", () => {
    const reply = getHealthSafetyReply(false);

    expect(reply).toContain("không thể tư vấn sản phẩm như cách điều trị");
    expect(reply).toContain("không phải là thuốc");
    expect(reply).toContain("bác sĩ hoặc dược sĩ");
    expect(reply).not.toContain("chữa mất ngủ");
  });

  it("short-circuits health-risk questions before invoking the language model", async () => {
    const response = await answerMascotQuestion([
      { role: "user", content: "Đang dùng thuốc thì trà An Giấc có chữa mất ngủ không?" },
    ]);

    expect(response.reply).toContain("không phải là thuốc");
    expect(response.reply).toContain("bác sĩ hoặc dược sĩ");
    expect(response.showShopLink).toBe(false);
  });
});
