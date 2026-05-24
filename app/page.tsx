"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  GraduationCap,
  Newspaper,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function YaohuaFoundationWebsite() {
  const navItems = [
    "首页",
    "瑶华故事",
    "新闻动态",
    "公益项目",
    "国际合作",
    "联系我们",
  ];

  const projects = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "青少年教育支持计划",
      text: "关注青少年成长与教育资源共享，支持艺术教育、综合素养与国际视野培养。",
    },
    {
      icon: <Globe2 className="w-7 h-7" />,
      title: "国际文化交流计划",
      text: "推动中外青少年、院校与教育机构之间的文化互鉴、交流访问与合作实践。",
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: "公益教育合作计划",
      text: "以公益资源链接教育机构、社会组织与国际伙伴，探索可持续公益合作模式。",
    },
  ];

  const news = [
    ["2026-05-20", "天津市瑶华公益基金会推动国际教育合作交流"],
    ["2026-05-15", "基金会围绕青少年国际文化交流开展专题研讨"],
    ["2026-05-08", "国际教育与公益融合发展项目进入筹备阶段"],
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF6] text-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#1F7A4D] flex items-center justify-center text-white font-bold">
              瑶
            </div>

            <div>
              <div className="font-bold text-lg">
                天津市瑶华公益基金会
              </div>
              <div className="text-xs text-slate-500">
                Tianjin Yaohua Public Welfare Foundation
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-700">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#1F7A4D]"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:flex rounded-full bg-[#1F7A4D] text-white px-5 py-2">
            联系我们
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[760px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2C]/90 via-[#1F7A4D]/65 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-sm mb-7">
              <Leaf className="w-4 h-4" />
              公益 · 教育 · 国际交流
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              以公益之心，
              <br />
              连接教育与世界
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-9">
              天津市瑶华公益基金会致力于推动青少年教育、
              国际文化交流与公益事业发展。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white text-[#1F7A4D] px-6 py-3 font-medium flex items-center gap-2">
                了解瑶华故事
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="rounded-full border border-white bg-white/10 px-6 py-3">
                查看国际合作
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="max-w-7xl mx-auto px-5 -mt-20 relative z-10 grid md:grid-cols-3 gap-5">
        {[
          [
            "公益初心",
            "源于钟瑶华先生长期以来对青少年教育与公益慈善事业的无私奉献。",
          ],
          [
            "教育使命",
            "持续关注青少年成长、艺术教育、综合素养与国际视野培养。",
          ],
          [
            "国际连接",
            "搭建教育、文化与公益资源融合发展的国际合作平台。",
          ],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl shadow-lg border-0 bg-white/95 p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#1F7A4D] flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold mb-3">{title}</h3>

            <p className="text-slate-600 leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-5 py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-[#1F7A4D] font-semibold mb-3">
            About Yaohua
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            关于瑶华
          </h2>

          <p className="text-lg text-slate-700 leading-9 mb-5">
            天津市瑶华公益基金会，
            是经天津市民政主管部门依法批准成立的公益慈善组织。
          </p>

          <p className="text-lg text-slate-700 leading-9 mb-7">
            基金会持续关注青少年成长、艺术教育、
            国际文化交流与教育公益合作，
            积极推动教育资源共享与国际交流平台建设。
          </p>

          <button className="rounded-full bg-[#1F7A4D] text-white px-6 py-3">
            了解基金会
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="h-72 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center shadow-md" />

          <div className="h-72 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center shadow-md mt-12" />
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#123D2B] py-24 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-12">
            <div className="text-green-200 font-semibold mb-3">
              Public Welfare Projects
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              公益项目
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl bg-white/10 border border-white/15 p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6 text-green-100">
                  {p.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {p.title}
                </h3>

                <p className="text-white/75 leading-8">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="mb-12">
          <div className="text-[#1F7A4D] font-semibold mb-3">
            News
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            新闻动态
          </h2>
        </div>

        <div className="space-y-4">
          {news.map(([date, title]) => (
            <div
              key={title}
              className="rounded-3xl border border-green-100 bg-white p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#1F7A4D] flex items-center justify-center">
                <Newspaper className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-1">
                  {date}
                </div>

                <h3 className="text-xl font-bold hover:text-[#1F7A4D]">
                  {title}
                </h3>
              </div>

              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E2E22] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[#1F7A4D] flex items-center justify-center font-bold">
                瑶
              </div>

              <div>
                <div className="font-bold text-lg">
                  天津市瑶华公益基金会
                </div>

                <div className="text-xs text-white/60">
                  Tianjin Yaohua Public Welfare Foundation
                </div>
              </div>
            </div>

            <p className="text-white/65 leading-8">
              致力于推动青少年教育、
              国际文化交流与公益事业发展。
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-5">快速导航</h3>

            <div className="grid grid-cols-2 gap-3 text-white/65">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">联系我们</h3>

            <div className="space-y-4 text-white/65">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-green-200" />
                天津市
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-green-200" />
                info@yaohuafoundation.org
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-green-200" />
                电话待补充
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 mt-12 pt-6 border-t border-white/10 text-sm text-white/45">
          © 2026 天津市瑶华公益基金会
        </div>
      </footer>
    </div>
  );
}