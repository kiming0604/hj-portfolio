"use client"

// import { Button } from "@/components/ui/button"
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
  HomeIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"
// import Link from "next/link"
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
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  personIcon: string
}

interface Experience {
  id: number
  period: string
  company: string
  status?: string
  role: string
  description: string[]
  skills: string[]
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
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    "bootcamp": false,
    "snax": false
  })

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
    },
    {
      id: 8,
      title: "블록체인과의 첫 만남",
      subtitle: "뉴웨이블 (newavle)",
      description: "뉴웨이블에 취직하여 코인과 토큰 스왑 사이트 개발 및 락업 관리 시스템을 구축하며 블록체인의 기초를 다졌습니다. Web3 생태계의 핵심 기술을 경험하며 분산형 금융(DeFi)의 가능성을 발견했습니다.",
      icon: CurrencyDollarIcon,
      bgColor: "from-amber-500 to-yellow-500",
      personIcon: "blockchain"
    },
    {
      id: 9,
      title: "스타트업 창립멤버",
      subtitle: "JNW LABS - SNAX 프로젝트",
      description: "JNW LABS 스타트업의 창립멤버로서 SNAX 프로젝트의 기반을 다졌습니다. 텔레그램 웹게임인 SNAX CAT에서 기획자의 엑셀 데이터를 비즈니스 로직으로 가공하여 API 데이터로 전환하고, 전체적인 메타데이터 관리 및 업데이트를 담당했습니다. SNAX CAT 백엔드 개발과 CMS 페이지 개발을 통해 풀스택 개발자로서의 역량을 키웠습니다.",
      icon: BuildingOfficeIcon,
      bgColor: "from-cyan-500 to-blue-500",
      personIcon: "startup"
    }
  ]

  const experiences: Experience[] = [
    {
      id: 1,
      period: "2025.09 ~",
      company: "J&W Labs",
      status: "재직 중",
      role: "Backend Developer",
      description: [
        "J&W Labs에서 백엔드 개발자로 활동 중입니다.",
        "현재 진행 중인 프로젝트의 백엔드 API 개발 및 인프라 구축을 담당하고 있습니다."
      ],
      skills: ["Java", "Spring Boot", "MySQL", "Redis", "Kubernetes", "Docker"]
    },
    {
      id: 2,
      period: "2025.05 ~ 2025.08",
      company: "(주)뉴웨이블 (Newavel Co., Ltd)",
      role: "Frontend web3 Development Team Member",
      description: [
        "LPD, MG8, CVTX 등 토큰의 락업/언락 작업을 담당했습니다.",
        "HAR-W3C 웹페이지 프론트엔드 개발을 수행했습니다.",
        "Web3 기반의 블록체인 서비스 프론트엔드 개발 경험을 쌓았습니다."
      ],
      skills: ["React", "TypeScript", "Web3", "Ethereum", "Solidity"]
    },
    {
      id: 3,
      period: "2024.06 ~ 2025.01",
      company: "솔데스크",
      role: "Backend/Server Development Bootcamp Student",
      description: [
        "국비지원 부트캠프에서 백엔드/서버 개발 과정을 수료했습니다.",
        "Java, MySQL, JavaScript, React 등 다양한 기술을 학습했습니다.",
        "2번의 프로젝트에서 팀장 역할을 수행하며 프로젝트 관리와 팀 협업 능력을 키웠습니다."
      ],
      skills: ["Java", "Spring Boot", "MySQL", "JavaScript", "React"]
    },
    {
      id: 4,
      period: "2022.05 ~ 2023.06",
      company: "몽크실용음악학원",
      role: "Vocal Lesson Hobby Class Temporary/Freelancer",
      description: [
        "취미반 회원 20명 이상을 대상으로 보컬 레슨을 진행했습니다.",
        "개인 맞춤형 보컬 교육 프로그램을 개발하고 적용했습니다.",
        "코로나 확진으로 인한 건강 악화로 인해 퇴직했습니다."
      ],
      skills: []
    },
    {
      id: 5,
      period: "2018.10 ~ 2019.05",
      company: "명진건설",
      role: "Construction Labor Site Worker Temporary/Freelancer",
      description: [
        "경기도 화성시 동탄동 신축 아파트 건설현장에서 근무했습니다.",
        "건설 현장 노동을 통해 노동의 가치와 책임감을 배웠습니다.",
        "군 입대를 위해 퇴직했습니다."
      ],
      skills: []
    },
    {
      id: 6,
      period: "2018.07 ~ 2018.09",
      company: "(주)이랜드파크외식사업부본점",
      role: "Cook (Korean Cuisine) Temporary/Freelancer",
      description: [
        "한식 조리사로 근무하며 다양한 한식 메뉴를 준비했습니다.",
        "외식업계의 빠른 업무 환경에 적응하며 효율성을 배웠습니다."
      ],
      skills: []
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
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastScrollTime = 0

    const handleScroll = () => {
      if (isScrolling) return
      
      const scrollPos = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor(scrollPos / windowHeight)
      
      // 총 10개 섹션: 0-8 (9개 챕터), 9 (About), 10+ (일반 스크롤 섹션)
      setCurrentSection(sectionIndex)
      setScrollPosition(scrollPos)
    }

    const handleWheel = (e: WheelEvent) => {
      // 일반 스크롤 섹션(10 이상)에서는 기본 동작 허용
      if (currentSection >= 10) {
        return
      }

      const now = Date.now()
      if (now - lastScrollTime < 800) {
        e.preventDefault()
        return
      }

      if (isScrolling) {
        e.preventDefault()
        return
      }

      const windowHeight = window.innerHeight
      const deltaY = e.deltaY
      const scrollDown = deltaY > 0
      const scrollUp = deltaY < 0

      // About Section (9)을 건너뛰지 않도록 체크
      if (currentSection === 8 && scrollDown) {
        // 8에서 다음으로: 반드시 9로 이동
        e.preventDefault()
        isScrolling = true
        lastScrollTime = now
        window.scrollTo({
          top: 9 * windowHeight,
          behavior: 'smooth'
        })
        setCurrentSection(9)
        setScrollPosition(9 * windowHeight)
        
        if (scrollTimeout) clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 800)
        return
      }

      if (currentSection === 9 && scrollDown) {
        // 9에서 다음으로: 10으로 이동
        e.preventDefault()
        isScrolling = true
        lastScrollTime = now
        window.scrollTo({
          top: 10 * windowHeight,
          behavior: 'smooth'
        })
        setCurrentSection(10)
        setScrollPosition(10 * windowHeight)
        
        if (scrollTimeout) clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 800)
        return
      }

      if (currentSection === 10 && scrollUp) {
        // 10에서 이전으로: 반드시 9로 이동
        e.preventDefault()
        isScrolling = true
        lastScrollTime = now
        window.scrollTo({
          top: 9 * windowHeight,
          behavior: 'smooth'
        })
        setCurrentSection(9)
        setScrollPosition(9 * windowHeight)
        
        if (scrollTimeout) clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 800)
        return
      }

      // 다른 섹션 간 이동은 기본 동작 허용하되, 스크롤 위치 조정
      if (currentSection < 9) {
        const targetSection = scrollDown 
          ? Math.min(currentSection + 1, 9)
          : Math.max(currentSection - 1, 0)
        
        if (targetSection !== currentSection) {
          e.preventDefault()
          isScrolling = true
          lastScrollTime = now
          window.scrollTo({
            top: targetSection * windowHeight,
            behavior: 'smooth'
          })
          setCurrentSection(targetSection)
          setScrollPosition(targetSection * windowHeight)
          
          if (scrollTimeout) clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            isScrolling = false
          }, 800)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })
    handleScroll() // 초기 로드 시 한 번 실행
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [currentSection])

  const getSectionStyle = (sectionIndex: number) => {
    const isActive = currentSection === sectionIndex
    const isNext = currentSection === sectionIndex + 1
    const isPrev = currentSection === sectionIndex - 1

    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
        display: 'flex' as const
      }
    } else if (isNext || isPrev) {
      return {
        opacity: 0,
        transform: isNext ? 'translateY(20px)' : 'translateY(-20px)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        pointerEvents: 'none' as const,
        visibility: 'visible' as const,
        display: 'flex' as const
      }
    } else {
      // Far away sections - completely hidden
      return {
        opacity: 0,
        transform: 'translateY(0)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        pointerEvents: 'none' as const,
        visibility: 'hidden' as const,
        display: 'none' as const
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
      case 'blockchain':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 블록체인 개발자 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="#F59E0B" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="#F59E0B" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="#F59E0B" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="#F59E0B" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="#F59E0B" rx="0.5"/>
            {/* 블록체인 체인 */}
            <circle cx="10" cy="11.5" r="1" fill="gold" stroke="black" strokeWidth="0.2"/>
            <circle cx="12" cy="11.5" r="1" fill="gold" stroke="black" strokeWidth="0.2"/>
            <circle cx="14" cy="11.5" r="1" fill="gold" stroke="black" strokeWidth="0.2"/>
            <path d="M11 11.5 L13 11.5" stroke="black" strokeWidth="0.3"/>
            <path d="M13 11.5 L15 11.5" stroke="black" strokeWidth="0.3"/>
          </svg>
        )
      case 'startup':
        return (
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            {/* 스타트업 창립멤버 */}
            {/* 머리 */}
            <circle cx="12" cy="7" r="2.5" fill="#FFD700"/>
            {/* 몸통 */}
            <rect x="9.5" y="9.5" width="5" height="6" fill="#06B6D4" rx="1"/>
            {/* 팔 */}
            <rect x="7" y="10" width="2" height="4" fill="#06B6D4" rx="1"/>
            <rect x="15" y="10" width="2" height="4" fill="#06B6D4" rx="1"/>
            {/* 다리 */}
            <rect x="10" y="15.5" width="1.5" height="3" fill="#06B6D4" rx="0.5"/>
            <rect x="12.5" y="15.5" width="1.5" height="3" fill="#06B6D4" rx="0.5"/>
            {/* 스타트업 아이콘 - 로켓/빌딩 */}
            <rect x="10.5" y="11" width="3" height="2" fill="white" rx="0.2"/>
            <rect x="11" y="10.5" width="2" height="0.5" fill="white" rx="0.1"/>
            <rect x="11.5" y="10" width="1" height="0.5" fill="white" rx="0.1"/>
            {/* 별 */}
            <path d="M12 8.5 L12.3 9.2 L13 9.2 L12.5 9.6 L12.7 10.3 L12 9.9 L11.3 10.3 L11.5 9.6 L11 9.2 L11.7 9.2 Z" fill="gold"/>
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
      {lifeChapters.map((chapter, index) => {
        const style = getSectionStyle(index)
        // Only render if section is active, next, or prev (not far away)
        if (style.display === 'none') return null
        
        return (
          <section 
            key={chapter.id} 
            className="h-screen flex items-center justify-center fixed inset-0"
            style={{ 
              ...style, 
              zIndex: currentSection === index ? 10 : currentSection > index ? 5 : 1 
            }}
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
        )
      })}

      {/* Fixed Progress Bar - Always Visible */}
      {currentSection < 9 && (
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
                    style={{ width: `${currentSection === 8 ? 100 : Math.min((currentSection / 8) * 100, 100)}%` }}
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

      {/* About Section - "다양한 경험을 통한 성장" */}
      {(() => {
        const baseStyle = getSectionStyle(9)
        // Only render if section is active, next, or prev (not far away)
        // getSectionStyle이 display: 'none'을 반환하면 완전히 제거하여 겹침 방지
        if (baseStyle.display === 'none') return null
        
        // 페이드 아웃 적용 시점을 앞당기기: currentSection === 9일 때도 스크롤 위치에 따라 opacity 조절
        let finalOpacity = baseStyle.opacity
        if (currentSection === 9) {
          const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000
          const aboutSectionStart = 9 * windowHeight
          const scrollProgress = (scrollPosition - aboutSectionStart) / windowHeight
          // 섹션의 20% 지점부터 페이드 아웃 시작 (더 앞당김)
          if (scrollProgress > 0.2) {
            finalOpacity = Math.max(0, 1 - (scrollProgress - 0.2) * 1.25) // 0.2~1.0 구간에서 1->0으로 페이드
          }
        }
        
        return (
          <section 
            className="h-screen flex items-center justify-center fixed inset-0"
            style={{ 
              ...baseStyle,
              opacity: finalOpacity,
              zIndex: currentSection === 9 ? 10 : currentSection === 10 ? 1 : 0
            }}
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
        )
      })()}

      {/* Spacer for animated sections */}
      <div style={{ height: `${10 * 100}vh` }}></div>

      {/* Header - Personal Info */}
      <section id="about-section" className="min-h-screen flex items-center justify-center text-center pt-48 pb-0">
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
            Full-stack Developer
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

      {/* Experience Section */}
      <section id="experience-section" className="min-h-screen pt-0 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-blue-500">
              EXPERIENCE
            </h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp) => {
              const parts = exp.period.split(' ~ ')
              const start = parts[0] || ''
              const end = parts[1] || ''
              
              // 날짜 파싱 함수: "2025.09" -> "2025-09-01"
              const parseDate = (dateStr: string) => {
                if (!dateStr) return null
                const normalized = dateStr.trim().replace(/\./g, '-')
                // "2025-09" 형식을 "2025-09-01"로 변환
                const parts = normalized.split('-')
                if (parts.length === 2) {
                  return new Date(`${parts[0]}-${parts[1]}-01`)
                }
                return new Date(normalized)
              }
              
              const startDate = parseDate(start)
              const endDate = !end || end.trim() === '' || end === '현재'
                ? new Date()
                : parseDate(end)
              
              if (!startDate || !endDate || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                return (
                  <div key={exp.id} className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-2">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-green-400 mb-4">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              
              const months = Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()))
              const years = Math.floor(months / 12)
              const remainingMonths = months % 12
              const duration = years > 0 
                ? `${years}년 ${remainingMonths}개월` 
                : `${remainingMonths}개월`
              
              return (
                <div key={exp.id} className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                        {exp.status && (
                          <span className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
                            {exp.status} {duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-green-400 mb-4">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
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

      {/* Development Philosophy Section */}
      <section id="philosophy-section" className="min-h-screen py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
            My Thoughts on Development
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                저는 개발자로서 코드를 작성하는 것 보다 코드를 작성하는 과정에서 발생하는 문제를 해결하고 그 과정을 기록하고 기억하는 것이 더 중요하다고 생각합니다.
              </p>
              <p>
                저는 상급자와 하급자의 차이는 경험에서 나온다고 생각합니다. 제가 여러 직종을 거치며 처음 일을 시작 할 때 마다 <span className="font-bold text-gray-200">&ldquo;내가 3번에 걸쳐 할 일을 어떻게 상급자는 1번만 해도 해결될까?&rdquo;</span> 그 이유에 대해서 스스로 고민했었습니다 저의 결론은 <span className="font-bold text-gray-200">&ldquo;여러가지 상황을 맞닥뜨리고 그것을 해결하면서 생긴 노하우와 경험&rdquo;</span>이 그 차이를 만든다는 것 입니다. 여기서 저는 또 생각했습니다 <span className="font-bold text-gray-200">&ldquo;어떻게 해야 그 차이를 더 빠르게 줄일 수 있을까?&rdquo;</span> 그 답은 <span className="font-bold text-gray-200">&ldquo;문서화&rdquo;</span> 였습니다 <span className="font-bold text-gray-200">&ldquo;요리를 하며 본 주방장님의 칼질과 조리순서에 대한 노하우, 건설현장에서 노동을 하며 본 반장님의 노하우, 개발 회사를 다니며 사수에게 배운 여러가지 상황에서의 대처법과 노하우&rdquo;</span>. 셋다 분야는 다르지만 저에게는 다르지 않다고 느껴졌습니다.
              </p>
              <p>
                이러한 문서화와 더불어 저는 <span className="font-bold text-gray-200">AI를 사용하는것</span>이 상급자와의 격차를 따라잡고 혼자 <span className="font-bold text-gray-200">개발 관련된 공부를 하는것에 매우 큰 도움</span>이 된다고 생각했습니다. <span className="font-bold text-gray-200">저는 AI를 활용하는 개발자라는 것이 부끄럽지 않습니다</span> <span className="font-bold text-gray-200">상급자와의 차이를 더 빠르게 따라잡을 수 있고, 정보를 더 많이 얻을 수 있고, 제가 공부를 하는 것에 도움이 된다면 얼마든지 AI를 활용하겠습니다</span>. 하지만 저는 <span className="font-bold text-gray-200">좋은 AI 사용은 뛰어난 개발 지식을 가지고 있는 사람이 할 수 있다</span>고 생각합니다. 많은 개발 관련 지식, 아키텍쳐에 관한 지식, 디자인 패턴에 관한 지식 등등을 가지고 있어야 AI에게 상세한 프롬프트를 제공하고 효율적으로 업무를 할 수 있다고 생각합니다.
              </p>
              <p className="font-bold text-gray-200 text-xl mt-6">
                &ldquo;저는 문서화를 통해 끊임없이 지식을 축적하고 그 지식을 AI와 함께 사용하여 더 나은 개발자가 되기 위해 노력하는 개발자입니다.&rdquo;
              </p>
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
          <div className="space-y-4">
            {/* Bootcamp Projects Dropdown */}
            <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
              <button
                onClick={() => setExpandedProjects(prev => ({ ...prev, bootcamp: !prev.bootcamp }))}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-semibold text-gray-100 text-xl">Bootcamp Projects</h3>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-green-400 transition-transform duration-300 ${
                    expandedProjects.bootcamp ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedProjects.bootcamp && (
                <div className="px-8 pb-8 space-y-6">
                  {/* CodeSync Project */}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <h4 className="font-semibold text-gray-100 mb-4 text-lg">CodeSync</h4>
                    <div className="text-gray-400 mb-6 text-base space-y-3">
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
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer"
                    >
                      <NotionIcon className="w-5 h-5 mr-2" />
                      Notion
                    </div>
                  </div>
                  
                  {/* HypePop Project */}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <h4 className="font-semibold text-gray-100 mb-4 text-lg">HypePop</h4>
                    <div className="text-gray-400 mb-6 text-base space-y-3">
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
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer"
                    >
                      <NotionIcon className="w-5 h-5 mr-2" />
                      Notion
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SNAX CAT Dropdown */}
            <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
              <button
                onClick={() => setExpandedProjects(prev => ({ ...prev, snax: !prev.snax }))}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-semibold text-gray-100 text-xl">SNAX CAT</h3>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-green-400 transition-transform duration-300 ${
                    expandedProjects.snax ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedProjects.snax && (
                <div className="px-8 pb-8 space-y-6">
                  {/* soc_parser Project */}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <h4 className="font-semibold text-gray-100 mb-4 text-lg">soc_parser</h4>
                    <div className="text-gray-400 mb-6 text-base space-y-3">
                      <p>게임 기획 데이터를 관리하는 자동화 시스템입니다. 기획자가 Excel 파일에 작성한 게임 데이터(아이템, 캐릭터, 상점, 레벨 등)를 자동으로 읽어서 데이터베이스에 저장하고, 게임 서버가 사용할 수 있는 형태로 변환하는 역할을 합니다.</p>
                      <p>2-Tier Architecture를 사용하여 Excel DB(기획 데이터 저장소)와 API DB(게임 서버 데이터 저장소)를 분리하여 데이터의 안정성과 유지보수성을 확보했습니다.</p>
                      <p>Apache POI를 활용한 Excel 파일 처리, Spring Data JPA를 통한 데이터베이스 접근, 대량 데이터 처리를 위한 Bulk Insert 및 병렬 처리 최적화를 구현했습니다.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Java</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Boot</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Data JPA</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Apache POI</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">MariaDB</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Swagger</span>
                    </div>
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = 'https://www.notion.so/Parser-29d1f7a731ad8081b03bced0174554f2?source=copy_link';
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer"
                    >
                      <NotionIcon className="w-5 h-5 mr-2" />
                      Notion
                    </div>
                  </div>
                  
                  {/* soc_cms Project */}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <h4 className="font-semibold text-gray-100 mb-4 text-lg">soc_cms</h4>
                    <div className="text-gray-400 mb-6 text-base space-y-3">
                      <p>SNAX CAT 게임을 위한 풀스택 CMS(Content Management System)입니다. 게임 데이터 관리, 사용자 관리, 랭킹 관리, 유지보수 공지 등 게임 운영에 필요한 다양한 기능을 제공합니다.</p>
                      <p><strong className="text-gray-300">Backend (soc_cms_bff)</strong>: Spring Boot 기반의 RESTful API 서버로, QueryDSL을 활용한 복잡한 쿼리 처리, Spring Security를 통한 인증/인가, Rate Limiting을 통한 API 보호, Telegram Bot 연동 등을 구현했습니다.</p>
                      <p><strong className="text-gray-300">Frontend (soc_cms_web)</strong>: React + TypeScript + Vite 기반의 모던 웹 애플리케이션으로, TanStack Query를 활용한 서버 상태 관리, Zustand를 활용한 클라이언트 상태 관리, Recharts를 활용한 데이터 시각화, React Router를 활용한 라우팅 등을 구현했습니다.</p>
                      <p>EC2 + Nginx 구조로 배포하여 비용 효율적이고 안정적인 운영 환경을 구축했습니다.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Java</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Boot</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">QueryDSL</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Spring Security</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">React</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">TypeScript</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Vite</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">TanStack Query</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Zustand</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">MySQL</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Docker</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">Nginx</span>
                      <span className="px-3 py-2 bg-green-900 text-green-300 text-sm rounded">AWS EC2</span>
                    </div>
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = 'https://www.notion.so/CMS-2d11f7a731ad809db497d4e1ba5b8b57?source=copy_link';
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white h-11 px-8 cursor-pointer"
                    >
                      <NotionIcon className="w-5 h-5 mr-2" />
                      Notion
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
