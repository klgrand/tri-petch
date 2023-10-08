export interface RowContentProps {
  title: string
  description: string
  bgColor?: string
  reverse?: boolean
  bulletText?: string
  textBulletStyle?: string
  bulletTitleStyle?: string
  contentContainerStyle?: string
  textDescriptionStyle?: string
}

export interface RowHeaderProps {
  header: string
  contentContainerStyle?: string
  headerContainerStyle?: string
  reverse?: boolean
}

export interface TittleBulletProps {
  text: string
  textStyle?: string
  underscoreStyles?: string
}

export interface RowGroupProps {
  rows: RowContentProps[]
}
