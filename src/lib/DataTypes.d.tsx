export type SkillType = {
    name: string
    value: number
}

export type ProjectType = {
    id: number
    title: string
    company?: string
    image: string
    image_alt: string
    images: {
        id: number
        url: string
    }[]
    text_intro: string
    text_dev: string
    text_link: {
        url: string
        label: string
    }
    text_tech: string
}

export type TechType = {
    icon: string
    name: string
    url: string
    hasBorder?: boolean
}

export type DataType = {
    skills: SkillType[]
    projects: ProjectType[]
    tech: TechType[]
}