"use client"

import { useState } from "react"
// EmotionSelection.tsx에서
// 절대 경로 대신 상대 경로 사용 예시:
import { Button } from "../../components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/Avatar";
import { Smile, Frown, Heart, Coffee, Moon, Cloud, Zap } from "lucide-react";

const emotions = [
    { name: "HAPPY", icon: Smile },
    { name: "NEUTRAL", icon: Coffee },
    { name: "SAD", icon: Frown },
    { name: "LOVE", icon: Heart },
    { name: "CALM", icon: Cloud },
    { name: "SAD", icon: Frown },
    { name: "ENERGETIC", icon: Zap },
    { name: "PEACEFUL", icon: Moon },
    { name: "SAD", icon: Frown },
];

export function EmotionSelection() {
    // 선택된 버튼의 인덱스를 저장 (없으면 null)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#0A1445] to-[#182987] p-6">
            {/* Header */}
            <div className="flex justify-end items-center gap-4 mb-16">
                <Button className="text-white border-white hover:bg-white/10">
                    LOG OUT
                </Button>
                <Avatar className="w-10 h-10 bg-[#E2E279]">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>

            {/* Emotion Grid */}
            <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4">
                {emotions.map((emotion, index) => (
                    <Button
                        key={index}
                        className={`
              h-24 flex flex-col items-center justify-center gap-2 rounded-full
              transition-all duration-300
              ${selectedIndex === index
                                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                : "bg-white/20 text-white hover:bg-white/30"
                            }
            `}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <emotion.icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{emotion.name}</span>
                    </Button>
                ))}
            </div>

            {/* Next Button */}
            <div className="max-w-md mx-auto mt-16">
                <Button
                    className="w-full h-14 bg-white text-black hover:bg-white/90"
                    disabled={selectedIndex === null}
                >
                    Next
                </Button>
            </div>
        </main>
    );
}
