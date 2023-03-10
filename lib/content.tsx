import Link from "next/link"

type ProfileDetails = {
    name: string
    introduction: React.ReactNode
    technologies: string[]
}

export const siteDetails = {
    title: 'Next.js Sample Website'
}

export const profileDetails: ProfileDetails = {
    name: "Ramsundar",
    introduction: <>Hi! My name is <Link href='/profile'>Ramsundar</Link>. I am a software engineer having around 18 years of experience in web application development using different open source technologies as listed below</>,
    technologies: ["React JS", "PHP", "Python (Django)", "Ruby on Rails", "MySQL", "PgSql", "Moodle (LMS Platform)"]
}