export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  image: Image
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLinks[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  photo: {
    url: string
  }
  text: string
  name: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
