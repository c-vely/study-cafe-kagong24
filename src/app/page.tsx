"use client";

import RetroWindow from "@/components/RetroWindow";
import PixelSparkle from "@/components/PixelSparkle";
import PixelIcon from "@/components/PixelIcon";

export default function Home() {
  return (
    <div className="min-h-screen pb-16">
      {/* Floating Sparkles */}
      <div className="fixed top-8 right-12 z-0">
        <PixelSparkle color="#e07868" />
      </div>
      <div className="fixed top-12 right-20 z-0" style={{ animationDelay: "0.3s" }}>
        <PixelSparkle color="#e07868" />
      </div>
      <div className="fixed top-6 right-28 z-0" style={{ animationDelay: "0.6s" }}>
        <PixelSparkle color="#e07868" />
      </div>
      <div className="fixed bottom-20 left-10 z-0">
        <PixelSparkle color="#d8a0a0" />
      </div>
      <div className="fixed top-1/3 left-6 z-0" style={{ animationDelay: "0.5s" }}>
        <PixelSparkle color="#f0c0b8" />
      </div>

      {/* Desktop Icons (left sidebar) */}
      <div className="fixed left-4 top-20 flex flex-col gap-6 z-10 hidden lg:flex">
        <DesktopIcon icon="computer" label="내 카페" />
        <DesktopIcon icon="book" label="좌석 안내" />
        <DesktopIcon icon="music" label="플레이리스트" />
        <DesktopIcon icon="coffee" label="음료 메뉴" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 pt-8 relative z-10">

        {/* Header - Music Player Style */}
        <div className="flex justify-center mb-8">
          <RetroWindow title="카공24.exe" className="w-full max-w-md">
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-full h-20 bg-gradient-to-b from-[#8b6090] via-[#b088a0] to-[#d0a8b0] rounded-sm border-2 border-[#c08080] flex items-end justify-center pb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[8px] text-[#f0d0d0] tracking-widest">
                    ★ 카공24 ★
                  </p>
                </div>
                {/* Cityscape silhouette */}
                <div className="flex items-end gap-[2px] opacity-60">
                  {[12, 20, 16, 28, 14, 22, 18, 30, 12, 24, 16, 20].map((h, i) => (
                    <div key={i} className="bg-[#604060]" style={{ width: 6, height: h }} />
                  ))}
                </div>
              </div>
              <p className="text-[10px] tracking-wider">카공24</p>
              {/* Progress bar */}
              <div className="w-full flex items-center gap-2">
                <span className="text-[8px]">3:00</span>
                <div className="flex-1 h-2 bg-[#c08080] border border-[#a06060] relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-[#704848]" />
                </div>
                <span className="text-[8px]">∞</span>
              </div>
              {/* Controls */}
              <div className="flex gap-3 text-[12px]">
                <span className="cursor-pointer hover:text-coral">♥</span>
                <span className="cursor-pointer hover:text-coral">◄◄</span>
                <span className="cursor-pointer hover:text-coral">▶</span>
                <span className="cursor-pointer hover:text-coral">►►</span>
                <span className="cursor-pointer hover:text-coral">↻</span>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Main Intro Window - Paint Style */}
        <div className="flex justify-center mb-8">
          <RetroWindow title="about_us.paint" className="w-full max-w-2xl">
            <div className="flex gap-3">
              {/* Toolbar */}
              <div className="flex flex-col gap-1 border-2 border-[#c08080] bg-[#e8b8b0] p-1">
                {["✎", "✂", "◇", "○", "□", "▲", "/", "A", "Z"].map((tool, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 flex items-center justify-center text-[10px] border border-[#c08080] bg-[#f0d0c8] hover:bg-[#e8a0a0] cursor-pointer"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              {/* Canvas */}
              <div className="flex-1 bg-gradient-to-br from-[#508878] to-[#407068] border-2 border-[#c08080] p-6 flex flex-col items-center justify-center min-h-[240px] relative">
                <div className="text-center">
                  <p className="text-[#f0d8c8] text-[20px] leading-relaxed mb-4">
                    카공24
                  </p>
                  <p className="text-[#f0d8c8] text-[8px] leading-loose">
                    집중이 필요한 순간,
                  </p>
                  <p className="text-[#f0d8c8] text-[8px] leading-loose">
                    당신만의 공간이 되어드립니다
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <PixelSparkle color="#f0d8c8" className="w-3 h-3" />
                    <PixelSparkle color="#e8a0a0" className="w-3 h-3" />
                    <PixelSparkle color="#f0d8c8" className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
            {/* Color palette */}
            <div className="flex gap-1 mt-2 justify-end">
              {["#704848", "#a06060", "#c08080", "#e8a0a0", "#f0c0b8", "#f8e8d8", "#b8d8c8", "#508878", "#d08888", "#e07868", "#f0d0c8", "#ffffff"].map((c, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border border-[#c08080] cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="mt-2 border-t-2 border-[#c08080] pt-1">
              <span className="text-[8px] text-[#a08080]">love studying...</span>
              <span className="blink text-[8px] text-[#a08080]">_</span>
            </div>
          </RetroWindow>
        </div>

        {/* Two Column - Info Windows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Facilities Window */}
          <RetroWindow title="facilities.gif" className="float-anim">
            <div className="space-y-4 py-2">
              <h3 className="text-[11px] text-center mb-4 text-coral">✦ 시설 안내 ✦</h3>
              <FacilityItem icon="wifi" label="Wi-Fi" desc="끊김 없는 인터넷" />
              <FacilityItem icon="coffee" label="무제한 커피" desc="원두커피 무제한 제공" />
              <FacilityItem icon="clock" label="24시 운영" desc="언제든 이용 가능" />
              <FacilityItem icon="book" label="편안한 학습 분위기" desc="집중할 수 있는 환경" />
            </div>
          </RetroWindow>

          {/* Pricing Window */}
          <RetroWindow title="pricing.mp4" className="float-anim" >
            <div className="py-2">
              <h3 className="text-[11px] text-center mb-4 text-coral">✦ 이용 요금 ✦</h3>
              {/* Progress-bar style pricing */}
              <div className="space-y-3">
                <PriceItem label="24시간" price="5,900원" fill="w-full" />
              </div>
              <div className="mt-4 text-center">
                <button className="pixel-btn">예약하기</button>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Operating Hours Window */}
        <div className="flex justify-center mb-8">
          <RetroWindow title="hours.txt" className="w-full max-w-md">
            <div className="py-3 text-center space-y-3">
              <h3 className="text-[11px] text-coral mb-3">✦ 운영 시간 ✦</h3>
              <div className="flex justify-center">
                <div className="border-2 border-[#c08080] bg-[#508878] text-[#f0d8c8] px-6 py-4 text-center">
                  <p className="text-[14px] mb-2">24 / 7</p>
                  <p className="text-[8px]">연중무휴 운영</p>
                </div>
              </div>
              <p className="text-[8px] text-[#a08080] mt-2">
                연중무휴
              </p>
            </div>
          </RetroWindow>
        </div>

        {/* Location Window */}
        <div className="flex justify-center mb-8">
          <RetroWindow title="location.exe" className="w-full max-w-2xl">
            <div className="py-3">
              <h3 className="text-[11px] text-center mb-4 text-coral">✦ 오시는 길 ✦</h3>
              {/* Pixel map placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-[#b8d8c8] to-[#a0c8b8] border-2 border-[#c08080] relative overflow-hidden">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "linear-gradient(rgba(160,200,180,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,180,0.4) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                {/* Buildings */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4">
                  {[20, 35, 25, 45, 30, 40, 20, 50, 25, 35, 28, 42, 22, 38].map((h, i) => (
                    <div key={i} className="bg-[#d8a0a0] border border-[#c08080]" style={{ width: 12, height: h }}>
                      {h > 25 && (
                        <div className="mt-1 mx-auto w-1.5 h-1.5 bg-[#f0c0b8]" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Pin marker */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="text-[16px] text-coral">▼</div>
                  <span className="text-[7px] bg-[#f0c0b8] px-2 py-0.5 border border-[#c08080]">HERE!</span>
                </div>
              </div>
              <div className="mt-3 text-center space-y-1">
                <p className="text-[9px]">서울 성북구 고려대로27길 15 지하 1층</p>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Contact / Footer Window */}
        <div className="flex justify-center mb-8">
          <RetroWindow title="contact.txt" className="w-full max-w-md">
            <div className="py-3 text-center space-y-2">
              <h3 className="text-[11px] text-coral mb-3">✦ 문의하기 ✦</h3>
              <p className="text-[9px]">INSTA: @kagong24</p>
              <div className="flex justify-center gap-2 mt-3">
                <PixelIcon type="heart" size={16} className="text-coral" />
                <PixelIcon type="heart" size={16} className="text-pink" />
                <PixelIcon type="heart" size={16} className="text-coral" />
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Footer Taskbar */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="bg-[#e8b8b0] border-t-3 border-[#c08080] px-4 py-2 flex items-center justify-between"
            style={{ borderTop: "3px solid #f0c0b8", boxShadow: "0 -2px 0 #c08080" }}>
            <button className="pixel-btn !py-1 !px-3 text-[8px]">
              ▶ START
            </button>
            <div className="flex items-center gap-4">
              <span className="text-[8px] text-text-dark hidden sm:inline">📖 kagong24.exe</span>
              <span className="text-[8px] text-text-dark hidden sm:inline">☕ coffee.dll</span>
              <div className="border-2 border-[#c08080] bg-[#f0d0c8] px-3 py-1">
                <span className="text-[8px]">OPEN 24H</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function DesktopIcon({ icon, label }: { icon: "computer" | "book" | "music" | "coffee"; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer group">
      <div className="w-12 h-12 flex items-center justify-center text-pink-dark group-hover:text-coral transition-colors">
        <PixelIcon type={icon} size={32} />
      </div>
      <span className="text-[7px] text-text-dark bg-[#b8d8c8]/80 px-1">{label}</span>
    </div>
  );
}

function FacilityItem({ icon, label, desc }: { icon: "wifi" | "coffee" | "music" | "clock" | "book"; label: string; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex items-center justify-center border-2 border-[#c08080] bg-[#f0d0c8] text-[#704848] shrink-0">
        <PixelIcon type={icon} size={20} />
      </div>
      <div>
        <p className="text-[9px]">{label}</p>
        <p className="text-[7px] text-[#a08080]">{desc}</p>
      </div>
    </div>
  );
}

function PriceItem({ label, price, fill }: { label: string; price: string; fill: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[8px]">
        <span>{label}</span>
        <span className="text-coral">{price}</span>
      </div>
      <div className="h-3 bg-[#e8d0c8] border border-[#c08080]">
        <div className={`h-full bg-gradient-to-r from-[#e8a0a0] to-[#e07868] ${fill}`} />
      </div>
    </div>
  );
}
