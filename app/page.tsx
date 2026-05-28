"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Newspaper,
  Phone,
} from "lucide-react";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "瑶华故事", href: "#about" },
  { label: "新闻动态", href: "#news" },
  { label: "公益项目", href: "#projects" },
  { label: "国际合作", href: "#projects" },
  { label: "联系我们", href: "#contact" },
];

const projects = [
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "青少年教育支持计划",
    text: "关注青少年成长与教育资源共享，支持艺术教育、综合素养与国际视野培养。",
  },
  {
    icon: <Globe2 className="h-7 w-7" />,
    title: "国际文化交流计划",
    text: "推动中外青少年、院校与教育机构之间的文化互鉴、交流访问与合作实践。",
  },
  {
    icon: <HeartHandshake className="h-7 w-7" />,
    title: "公益教育合作计划",
    text: "以公益资源连接教育机构、社会组织与国际伙伴，探索可持续公益合作模式。",
  },
];

const news = [
  ["2026-05-20", "天津市瑶华公益基金会推动国际教育合作交流"],
  ["2026-05-15", "基金会围绕青少年国际文化交流开展专题研讨"],
  ["2026-05-08", "国际教育与公益融合发展项目进入筹备阶段"],
];

function LogoMark({ footer = false }: { footer?: boolean }) {
  return (
    <Image
      src="/yaohua-logo.jpg"
      alt="瑶华公益基金会 logo"
      width={56}
      height={56}
      priority={!footer}
      className="h-12 w-12 rounded-full bg-white object-cover shadow-sm"
    />
  );
}

export default function YaohuaFoundationWebsite() {
  return (
    <div className="min-h-screen bg-[#F7FAF6] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="text-lg font-bold">天津市瑶华公益基金会</div>
              <div className="text-xs text-slate-500">
                Tianjin Yaohua Public Welfare Foundation
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#1F7A4D]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#1F7A4D] px-5 py-2 text-white md:inline-flex"
          >
            联系我们
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative flex h-[760px] items-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2C]/90 via-[#1F7A4D]/65 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm">
              <Leaf className="h-4 w-4" />
              公益 · 教育 · 国际交流
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              以公益之心，
              <br />
              连接教育与世界
            </h1>

            <p className="mb-9 text-xl leading-relaxed text-white/90 md:text-2xl">
              天津市瑶华公益基金会致力于推动青少年教育、国际文化交流与公益事业发展。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#1F7A4D]"
              >
                了解瑶华故事
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white bg-white/10 px-6 py-3"
              >
                查看国际合作
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-20 grid max-w-7xl gap-5 px-5 md:grid-cols-3">
        {[
          [
            "公益初心",
            "源于对青少年教育与公益慈善事业的长期关注，持续汇聚向善力量。",
          ],
          [
            "教育使命",
            "关注青少年成长、艺术教育、综合素养与国际视野培养。",
          ],
          [
            "国际连接",
            "搭建教育、文化与公益资源融合发展的国际合作平台。",
          ],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl bg-white/95 p-8 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#1F7A4D]">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">{title}</h3>
            <p className="leading-relaxed text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-28 lg:grid-cols-2"
      >
        <div>
          <div className="mb-3 font-semibold text-[#1F7A4D]">About Yaohua</div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">关于瑶华</h2>
          <p className="mb-5 text-lg leading-9 text-slate-700">
            天津市瑶华公益基金会是经天津市民政主管部门依法批准成立的公益慈善组织。
          </p>
          <p className="mb-7 text-lg leading-9 text-slate-700">
            基金会持续关注青少年成长、艺术教育、国际文化交流与教育公益合作，积极推动教育资源共享与国际交流平台建设。
          </p>
          <a href="#contact" className="inline-flex rounded-full bg-[#1F7A4D] px-6 py-3 text-white">
            了解基金会
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <figure>
            <div className="relative h-72 overflow-hidden rounded-[2rem] bg-white shadow-md">
              <Image
                src="/zhong-yaohua.jpg"
                alt="钟瑶华先生"
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">
              钟瑶华先生
            </figcaption>
          </figure>

          <figure className="mt-12">
            <div className="relative h-72 overflow-hidden rounded-[2rem] bg-white shadow-md">
              <Image
                src="/young-yaohua.jpg"
                alt="青年时期瑶华先生"
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">
              青年时期瑶华先生
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="projects" className="bg-[#123D2B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <div className="mb-3 font-semibold text-green-200">
              Public Welfare Projects
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">公益项目</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/15 bg-white/10 p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-green-100">
                  {project.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                <p className="leading-8 text-white/75">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <div className="mb-3 font-semibold text-[#1F7A4D]">News</div>
          <h2 className="text-4xl font-bold md:text-5xl">新闻动态</h2>
        </div>

        <div className="space-y-4">
          {news.map(([date, title]) => (
            <article
              key={title}
              className="flex items-center gap-5 rounded-3xl border border-green-100 bg-white p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#1F7A4D]">
                <Newspaper className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 text-sm text-slate-500">{date}</div>
                <h3 className="text-xl font-bold hover:text-[#1F7A4D]">{title}</h3>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[#0E2E22] pb-8 pt-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <LogoMark footer />
              <div>
                <div className="text-lg font-bold">天津市瑶华公益基金会</div>
                <div className="text-xs text-white/60">
                  Tianjin Yaohua Public Welfare Foundation
                </div>
              </div>
            </div>
            <p className="leading-8 text-white/65">
              致力于推动青少年教育、国际文化交流与公益事业发展。
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-bold">快速导航</h3>
            <div className="grid grid-cols-2 gap-3 text-white/65">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold">联系我们</h3>
            <div className="space-y-4 text-white/65">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-green-200" />
                天津市
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-green-200" />
                info@yaohuafoundation.org
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-green-200" />
                电话待补充
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/45">
          © 2026 天津市瑶华公益基金会
        </div>
      </footer>
    </div>
  );
}
