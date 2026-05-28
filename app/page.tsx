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
  { label: "瑶华故事", href: "#story" },
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

const heroImages = [
  "/hero/yaohua_upscaled_1.jpg",
  "/hero/yaohua_upscaled_2.jpg",
  "/hero/yaohua_upscaled_3.jpg",
  "/hero/yaohua_upscaled_4.jpg",
  "/hero/yaohua_upscaled_5.jpg",
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
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                delay: index * 5,
                times: [0, 0.04, 0.18, 0.22],
                ease: "easeInOut",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          ))}
        </div>
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
                href="#story"
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

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {heroImages.map((src, index) => (
            <motion.span
              key={src}
              className="h-2.5 w-2.5 rounded-full bg-white"
              initial={{ opacity: index === 0 ? 1 : 0.35, scale: index === 0 ? 1.25 : 1 }}
              animate={{
                opacity: [0.35, 1, 1, 0.35],
                scale: [1, 1.25, 1.25, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                delay: index * 5,
                times: [0, 0.04, 0.18, 0.22],
                ease: "easeInOut",
              }}
            />
          ))}
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

      <section id="story" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 font-semibold text-[#1F7A4D]">Yaohua Story</div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">瑶华故事</h2>
            <p className="text-xl leading-9 text-slate-700">
              “瑶华”，源于一个名字，更源于一份跨越岁月的大爱。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
            <article className="rounded-[2rem] bg-[#F7FAF6] p-8 md:p-10">
              <div className="space-y-6 text-lg leading-9 text-slate-700">
                <p>
                  钟瑶华先生，中共党员、著名社会活动家、慈善家，一生热心公益，始终关注青少年成长与教育事业发展。她始终相信，教育不仅能够改变个人命运，更能够点亮一个家庭、一个地区，乃至一个时代的未来。
                </p>
                <p>
                  2012年，钟瑶华先生将个人名下全部财产共计160万元人民币无偿捐赠。其中，100万元用于家乡希望小学建设，其余资金用于设立“钟瑶华少儿艺术发展基金”，持续支持青少年艺术教育与公益事业发展。
                </p>
                <p>
                  在她爱心精神的感召下，2013年，“天津瑶华青少年艺术活动中心”正式成立。多年来，中心始终秉承公益初心，积极为青少年创造良好的学习环境和优质教育资源，累计服务大量青少年群体，逐渐成为天津市青少年艺术教育的重要公益阵地。
                </p>
                <p>
                  为了更好地传承钟瑶华先生无私奉献的精神，2019年，在社会各界爱心人士共同努力下，“天津市瑶华公益基金会”正式成立。
                </p>
                <p>
                  从一份个人善举，到一个长期公益平台；从帮助一个孩子，到关注更多青少年的成长与未来，“瑶华”已经不仅仅是一个名字，更成为一种温暖而坚定的公益精神。
                </p>
              </div>

              <div className="mt-9 rounded-3xl bg-[#123D2B] p-7 text-white">
                <p className="mb-3 text-2xl font-semibold">大爱无疆，教育兴邦。</p>
                <p className="leading-8 text-white/75">
                  瑶华公益基金会将继续秉承初心，以教育公益为根基，以社会责任为使命，携手更多爱心人士与机构，共同守护孩子们的梦想与未来。
                </p>
              </div>
            </article>

            <div className="space-y-6">
              <figure className="overflow-hidden rounded-[2rem] bg-[#123D2B] shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/zhong-yaohua.jpg"
                    alt="钟瑶华先生"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D2B]/85 via-transparent to-transparent" />
                </div>
                <figcaption className="px-6 pb-6 pt-4 text-white">
                  <p className="text-xl font-semibold">钟瑶华先生</p>
                  <p className="mt-2 leading-7 text-white/70">
                    以一生热忱关注公益与教育，让善意成为长久延续的力量。
                  </p>
                </figcaption>
              </figure>

              <div className="relative rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm">
                <div className="absolute bottom-8 left-[3.05rem] top-8 w-px bg-green-100" />
                {[
                  ["2012", "无偿捐赠个人全部财产，设立少儿艺术发展基金。"],
                  ["2013", "天津瑶华青少年艺术活动中心正式成立。"],
                  ["2019", "天津市瑶华公益基金会正式成立。"],
                ].map(([year, text]) => (
                  <article key={year} className="relative flex gap-5 pb-6 last:pb-0">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F7A4D] text-sm font-bold text-white shadow-sm">
                      {year}
                    </div>
                    <p className="pt-2 leading-8 text-slate-700">{text}</p>
                  </article>
                ))}
              </div>

              <div className="rounded-[2rem] bg-green-50 p-6">
                <div className="text-sm font-semibold text-[#1F7A4D]">
                  公益传承
                </div>
                <p className="mt-3 leading-8 text-slate-700">
                  从个人善举到公益平台，瑶华精神在持续的教育行动中被看见、被传递。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10">
          <div className="mb-3 font-semibold text-[#1F7A4D]">Yaohua Moments</div>
          <h2 className="text-4xl font-bold md:text-5xl">瑶华影像</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <div className="relative h-80 overflow-hidden rounded-[2rem] bg-white shadow-md md:h-96">
              <Image
                src="/zhong-yaohua.jpg"
                alt="钟瑶华先生"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 text-center text-base font-medium text-slate-600">
              钟瑶华先生
            </figcaption>
          </figure>

          <figure>
            <div className="relative h-80 overflow-hidden rounded-[2rem] bg-white shadow-md md:h-96">
              <Image
                src="/young-yaohua.jpg"
                alt="青年时期瑶华先生"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 text-center text-base font-medium text-slate-600">
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
