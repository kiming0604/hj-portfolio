"use client"

import { Button } from "@/components/ui/button"
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CodeBracketIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  MicrophoneIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  HomeIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Skill {
  name: string
  icon: string | null
  customIcon?: string
  description: string
}

interface LifeChapter {
  id: number
  title: string
  subtitle: string
  description: string
  icon: any
  bgColor: string
  personIcon: string
}

// Notion Icon Component
const NotionIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.403-.793c1.635-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.747.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.68-1.632z"/>
  </svg>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState("Frontend")
  const [currentSection, setCurrentSection] = useState(0)
  const [showHeader, setShowHeader] = useState(false)

  const tabs = [
    { id: "Frontend", label: "Frontend" },
    { id: "Backend", label: "Backend" },
    { id: "Database", label: "Database" },
    { id: "Tools", label: "Tools" }
  ]

  const lifeChapters: LifeChapter[] = [
    {
      id: 1,
      title: "야구 선수의 꿈",
      subtitle: "고등학생 시절",
      description: "프로 야구 선수 준비를 했지만 부상으로 그만두게 되었습니다. 하지만 매일 이어지는 훈련을 통해 포기하지 않는 끈기를 배웠습니다.",
      icon: AcademicCapIcon,
      bgColor: "from-red-500 to-orange-500",
      personIcon: "baseball"
    },
    {
      id: 2,
      title: "가족을 위한 선택",
      subtitle: "조리사, 건설현장 노동",
      description: "대학에 진학 할 수 있었지만 어려운 집안 사정을 돕기 위해 조리사로 시작해 건설현장 노동을 하며 땀과 노동의 가치를 몸소 느꼈습니다.",
      icon: WrenchScrewdriverIcon,
      bgColor: "from-yellow-500 to-orange-500",
      personIcon: "worker"
    },
    {
      id: 3,
      title: "IT와의 첫 만남",
      subtitle: "통신병 분대장",
      description: "군대에서 통신병 분대장으로 복무하며 ATCIS 서버 관리업무를 통해 IT에 눈을 뜨게 되었고, 사단 내 최고 분대장 사단장 표창을 받으며 IT 분야의 가능성을 발견했습니다.",
      icon: ShieldCheckIcon,
      bgColor: "from-blue-500 to-indigo-500",
      personIcon: "soldier"
    },
    {
      id: 4,
      title: "보컬 트레이너",
      subtitle: "전역 후 새로운 도전",
      description: "전역 후 보컬 트레이너로 활동하며 수 많은 회원들을 코칭하며 소통능력을 길렀습니다, 하지만 두번의 코로나 확진으로 인한 성대 결절로 그만두게 되었습니다.",
      icon: MicrophoneIcon,
      bgColor: "from-purple-500 to-pink-500",
      personIcon: "trainer"
    },
    {
      id: 5,
      title: "새로운 길을 찾아",
      subtitle: "부트캠프 입학",
      description: "포기하지 않고 새로운 길을 찾아 나섰고, 군생활 때의 통신병 경험이 떠올라 부트캠프에서 개발 공부를 시작했습니다.",
      icon: RocketLaunchIcon,
      bgColor: "from-green-500 to-blue-500",
      personIcon: "student"
    },
    {
      id: 6,
      title: "팀장으로서의 성장",
      subtitle: "노베이스",
      description: "노베이스 개발자였지만 누구보다 열심히 공부하여 강사님과 학원생들의 인정을 받아 2번의 프로젝트 팀장 역할을 수행하며 효율적인 프로젝트 관리와 팀원 간의 원활한 소통을 이끌었습니다.",
      icon: TrophyIcon,
      bgColor: "from-indigo-500 to-purple-500",
      personIcon: "leader"
    },
    {
      id: 7,
      title: "개발자로 취직",
      subtitle: "끝없는 도전",
      description: "취업이 어려운 시기였지만 끝끝내 개발자로 취직하여 새로운 인생의 챕터를 시작했습니다.",
      icon: UserGroupIcon,
      bgColor: "from-emerald-500 to-teal-500",
      personIcon: "developer"
    }
  ]

  const skillsData: Record<string, Skill[]> = {
    Frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "리액트로 여러 프로젝트를 해봤으며, ContextAPI, useReducer, useState, useCallback, useMemo, Suspense를 활용할 수 있습니다."
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        description: "상황별로 SSG, SSR, CSR를 활용할 수 있습니다. middleware와 API를 작성할 수 있습니다."
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "타입을 활용하여 명확한 코드를 작성할 수 있으며, 제네릭, 인덱싱, 유틸리티 타입을 사용할 수 있습니다."
      },
      {
        name: "Tailwind CSS",
        icon: null,
        customIcon: "T",
        description: "최근 즐겨 사용하고 있습니다. 프로젝트에 적용한 경험이 있습니다."
      }
    ],
    Backend: [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        description: "Spring Boot를 활용한 RESTful API 개발 경험이 있으며, JPA, Spring Security 등을 활용할 수 있습니다."
      },
      {
        name: "Spring",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        description: "Spring Framework를 사용한 엔터프라이즈 애플리케이션 개발 경험이 있습니다."
      }
    ],
    Database: [
      {
        name: "MariaDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "MySQL 기반의 오픈소스 관계형 데이터베이스로, 데이터베이스 설계 및 쿼리 작성 경험이 있습니다."
      },
      {
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        description: "엔터프라이즈급 관계형 데이터베이스로, PL/SQL을 활용한 스토어드 프로시저 개발 경험이 있습니다."
      },
      {
        name: "DBeaver",
        icon: null,
        customIcon: "DB",
        description: "범용 데이터베이스 관리 도구로, 다양한 데이터베이스 연결 및 관리 경험이 있습니다."
      }
    ],
    Tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "버전 관리 및 협업을 위한 Git 사용 경험이 있습니다."
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        description: "주요 개발 도구로 사용하며, 다양한 확장 프로그램을 활용합니다."
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "UI/UX 디자인 및 프로토타이핑 도구로 활용합니다."
      }
    ]
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(Math.min(sectionIndex, 8)) // 총 9개 섹션 (7개 챕터 + 1개 About)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getSectionStyle = (sectionIndex: number) => {
    const isActive = currentSection === sectionIndex
    const isNext = currentSection === sectionIndex + 1
    const isPrev = currentSection === sectionIndex - 1

    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
      }
    } else if (isNext) {
      return {
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
      }
    } else if (isPrev) {
      return {
        opacity: 0,
        transform: 'translateY(-20px)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
      }
    } else {
      return {
        opacity: 0,
        transform: 'translateY(0)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
      }
    }
  }

  const getPersonIcon = (type: string) => {
    switch (type) {
      case 'baseball':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 야구 선수 - 더 사람다운 모양 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="white" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="white" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="white" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="white" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="white" rx="0.5"/>
            {/* 야구 모자 */}
            <ellipse cx="12" cy="5" rx="3" ry="1.5" fill="red"/>
            <rect x="10" y="3.5" width="4" height="1.5" fill="red"/>
            {/* 야구 방망이 */}
            <rect x="16" y="8" width="0.5" height="6" fill="brown"/>
            <rect x="15.5" y="7.5" width="1" height="0.5" fill="brown"/>
          </svg>
        )
      case 'worker':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 작업복 입은 사람 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="orange" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="orange" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="orange" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="orange" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="orange" rx="0.5"/>
            {/* 안전모 */}
            <ellipse cx="12" cy="5" rx="3" ry="1.5" fill="yellow"/>
            <rect x="10" y="3.5" width="4" height="1.5" fill="yellow"/>
            {/* 안전모 끈 */}
            <rect x="9" y="6" width="6" height="0.3" fill="black"/>
          </svg>
        )
      case 'soldier':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 군인 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="green" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="green" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="green" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="green" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="green" rx="0.5"/>
            {/* 군모 */}
            <rect x="10" y="4" width="4" height="2" fill="green"/>
            <rect x="11" y="3" width="2" height="1" fill="green"/>
            {/* 계급장 */}
            <rect x="11.5" y="10" width="1" height="0.5" fill="gold"/>
          </svg>
        )
      case 'trainer':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 보컬 트레이너 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="purple" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="purple" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="purple" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="purple" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="purple" rx="0.5"/>
            {/* 마이크 */}
            <rect x="11" y="4" width="2" height="5" fill="silver"/>
            <circle cx="12" cy="9" r="1" fill="silver"/>
            {/* 마이크 그립 */}
            <rect x="11.5" y="8" width="1" height="1" fill="black"/>
          </svg>
        )
      case 'student':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 학생 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="blue" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="blue" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="blue" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="blue" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="blue" rx="0.5"/>
            {/* 졸업모 */}
            <ellipse cx="12" cy="5" rx="3" ry="1.5" fill="black"/>
            <rect x="10" y="3.5" width="4" height="1.5" fill="black"/>
            <rect x="11" y="2.5" width="2" height="1" fill="black"/>
            {/* 졸업모 끈 */}
            <rect x="9" y="6" width="6" height="0.3" fill="gold"/>
          </svg>
        )
      case 'leader':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 팀장 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="indigo" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="indigo" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="indigo" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="indigo" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="indigo" rx="0.5"/>
            {/* 크라운 */}
            <path d="M10 5 L12 3 L14 5 L13 6 L11 6 Z" fill="gold"/>
            <rect x="11" y="6" width="2" height="1" fill="gold"/>
            {/* 크라운 보석 */}
            <circle cx="12" cy="4" r="0.3" fill="red"/>
          </svg>
        )
      case 'developer':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 개발자 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="teal" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="teal" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="teal" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="teal" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="teal" rx="0.5"/>
            {/* 노트북 */}
            <rect x="10" y="11" width="4" height="2.5" fill="gray" rx="0.3"/>
            <rect x="10.5" y="11.5" width="3" height="1.5" fill="green"/>
            {/* 키보드 */}
            <rect x="10.5" y="13" width="3" height="0.3" fill="black"/>
            <rect x="10.5" y="13.4" width="3" height="0.3" fill="black"/>
          </svg>
        )
      default:
        return <UserIcon className="w-12 h-12 text-white" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Navigation */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={() => setShowHeader(true)}
        onMouseLeave={() => setShowHeader(false)}
      >
        <div className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Home Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <HomeIcon className="w-6 h-6" />
                <span className="font-bold text-lg">DEV HJ</span>
              </button>

              {/* Navigation Menu */}
              <nav className="flex items-center space-x-6">
                <button
                  onClick={() => {
                    const element = document.getElementById('about-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-1"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>About</span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('skills-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-1"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  <span>Skills</span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('projects-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-1"
                >
                  <BriefcaseIcon className="w-4 h-4" />
                  <span>Projects</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Top Hover Area */}
      <div 
        className="fixed top-0 left-0 right-0 h-8 z-40"
        onMouseEnter={() => setShowHeader(true)}
      ></div>
      {/* Life Story Chapters */}
      {lifeChapters.map((chapter, index) => (
        <section 
          key={chapter.id} 
          className="h-screen flex items-center justify-center fixed inset-0"
          style={getSectionStyle(index)}
        >
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r ${chapter.bgColor} flex items-center justify-center`}>
              <chapter.icon className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-100 mb-4">
              {chapter.title}
            </h2>
            <p className="text-xl text-green-400 mb-6">
              {chapter.subtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
              {chapter.description}
            </p>
            
            {/* Person Icon */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  {getPersonIcon(chapter.personIcon)}
                </div>
                <p className="text-sm text-gray-400">성장 과정</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Fixed Progress Bar - Always Visible */}
      {currentSection < 7 && (
        <div className="fixed bottom-8 left-0 right-0 z-50">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              {/* Previous Person - Always show, but transparent for first chapter */}
              <div className="w-8 h-8 mr-4">
                {currentSection > 0 && currentSection < lifeChapters.length ? (
                  <div className="opacity-50">
                    {getPersonIcon(lifeChapters[currentSection - 1].personIcon)}
                  </div>
                ) : (
                  <div className="opacity-0">
                    {getPersonIcon(lifeChapters[0].personIcon)}
                  </div>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 max-w-xs mx-4">
                <div className="h-2 bg-green-400 rounded-full relative">
                  <div 
                    className="h-2 bg-green-300 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${currentSection === 6 ? 100 : Math.min((currentSection / 6) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Current Person Only */}
              <div className="w-8 h-8 ml-4">
                {currentSection >= 0 && currentSection < lifeChapters.length && (
                  getPersonIcon(lifeChapters[currentSection].personIcon)
                )}
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="text-center">
              <span className="text-xs text-green-400">
                {Math.max(0, Math.min(currentSection + 1, lifeChapters.length))} / {lifeChapters.length} 챕터
              </span>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section 
        className="h-screen flex items-center justify-center fixed inset-0"
        style={getSectionStyle(7)}
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
            다양한 경험을 통한 성장
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              저는 다양한 경험을 통해 소통 능력과 책임감을 길러왔습니다. 보컬 레슨으로 취미반 회원들을 지도하며 소통의 중요성을 배웠고, 건설 및 외식 분야에서의 경험을 통해 노동의 가치를 몸소 느꼈습니다.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              그러나 제게 가장 의미 있었던 경험은 군대에서 통신 분대장으로서의 역할이었습니다. 사단 분대장 교육대에서 사단장 표창을 받으며 IT와 처음으로 접점을 가지게 되었고, 이는 제 진로의 방향성을 결정짓는 계기가 되었습니다.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              이 경험을 바탕으로 국비지원 학원에서 백엔드/서버 개발, Java, MySQL, JavaScript, React 등 다양한 기술을 빠르게 습득하였으며, 고졸 비전공자 노베이스 개발자임에도 강사님과 학원생들의 인정을 받아, 두 차례의 프로젝트에서 팀장 역할을 수행하며 효율적인 프로젝트 관리와 팀원 간의 원활한 소통을 이끌었습니다.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              저는 어떤 환경에서도 빠르게 적응하며 주어진 일의 가치를 소중히 여깁니다. 이러한 태도는 제가 IT 분야에서 꾸준히 성장하고 기여할 수 있는 기반이 되리라 확신합니다. 코로나 이후 취업이 어려운 시기였음에도 불구하고, 제 자신을 갈고 닦아 개발자로 취업하여 Web3 기반의 혁신적인 프로젝트에 기여할 수 있었습니다. 앞으로도 배우고 도전하는 자세를 통해 더 나은 팀원, 나아가 더 나은 개발자가 되기 위해 노력하겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for animated sections */}
      <div style={{ height: `${9 * 100}vh` }}></div>

      {/* Header - Personal Info */}
      <section id="about-section" className="min-h-screen flex items-center justify-center text-center py-20">
        <div>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-400">
            <Image 
              src="/profile.jpg" 
              alt="김현재 프로필 사진" 
              width={128} 
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold text-gray-100 mb-4">
            김현재
          </h1>
          <p className="text-2xl text-green-400 mb-8">
            Frontend Developer
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <EnvelopeIcon className="w-4 h-4 mr-1" />
              <span>kimhyunjae114@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-1" />
              <span>010-5898-5065</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>경기도 용인시</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center flex items-center justify-center">
            <CodeBracketIcon className="w-8 h-8 mr-3 text-green-400" />
            Skills
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <div className="flex">
              {/* Left Sidebar - Tabs */}
              <div className="w-48 bg-gray-900 border-r border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full px-6 py-4 text-left transition-colors relative ${
                      activeTab === tab.id
                        ? "bg-green-600 text-white"
                        : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400"></div>
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Right Content Area */}
              <div className="flex-1 p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-8">
                  Skill Stack @ {activeTab}
                </h3>
                <div className="space-y-8">
                  {skillsData[activeTab]?.map((skill, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center flex-shrink-0">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        ) : (
                          <div className={`w-8 h-8 rounded flex items-center justify-center text-white text-sm font-bold ${
                            skill.name === "Tailwind CSS" ? "bg-green-500" : 
                            skill.name === "DBeaver" ? "bg-blue-500" : "bg-gray-500"
                          }`}>
                            {skill.customIcon}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-100 mb-3 text-lg">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="min-h-screen py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center flex items-center justify-center">
            <BriefcaseIcon className="w-8 h-8 mr-3 text-green-400" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="font-semibold text-gray-100 mb-4 text-xl">CodeSync 프로젝트</h3>
              <div className="text-gray-400 mb-6 text-lg space-y-3">
                <p>프론트엔드는 React, 백엔드는 Spring Boot를 사용했습니다.</p>
                <p>WebSocket을 활용한 실시간 파일 잠금 기능을 구현하여 협업 환경에서의 데이터 충돌을 방지했습니다.</p>
                <p>MariaDB 및 Spring Boot 기반의 백엔드 성능 최적화를 진행하여 안정적인 데이터 관리가 가능하도록 개선했습니다.</p>
                <p>Git과 GitHub을 활용한 버전 관리 및 코드 리뷰 프로세스를 도입하여 협업 효율을 높였습니다.</p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">React</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Boot</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">WebSocket</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">MariaDB</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Git</span>
              </div>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  const url = 'https://www.notion.so/2-codeSync-17a1f7a731ad80cf807cc72280a10cd2?source=copy_link';
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer relative z-20"
                style={{ cursor: 'pointer', zIndex: 9999 }}
              >
                <NotionIcon className="w-5 h-5 mr-2" />
                Notion
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="font-semibold text-gray-100 mb-4 text-xl">HypePop 프로젝트</h3>
              <div className="text-gray-400 mb-6 text-lg space-y-3">
                <p>사용자 경험(UX)을 고려한 UI/UX 설계 및 API 연동을 담당했습니다.</p>
                <p>JSP와 Spring Boot 기반의 RESTful API 설계를 진행하며 프론트엔드와 백엔드 간의 원활한 데이터 흐름을 구현했습니다.</p>
                <p>이 과정에서 클라우드 환경에서의 데이터 관리, API 설계, 실시간 데이터 처리 등 핵심 기술에 대한 경험을 쌓았습니다.</p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">JSP</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Boot</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">RESTful API</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">UI/UX</span>
                <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Cloud</span>
              </div>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  const url = 'https://www.notion.so/1-hypePop-1491f7a731ad808590e6f05d686bba4c?source=copy_link';
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer relative z-20"
                style={{ cursor: 'pointer', zIndex: 9999 }}
              >
                <NotionIcon className="w-5 h-5 mr-2" />
                Notion
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
