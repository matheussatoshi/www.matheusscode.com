export namespace Notion {
  export interface MappedArticles {
    media: string
    date: string
    slug: string
    description: string
    title: string
  }

  export interface MappedProjects {
    type: string
    slug: string
    url: string
    description: string
    title: string
  }

  export interface MappedEducation {
    slug: string
    date: string
    url: string
    title: string
    certificate: string | string[]
    location: string
  }

  export interface MappedWorks {
    slug: string
    description: string
    date: string
    title: string
  }

  export interface List<T> {
    object: "list"
    results: T[]
    next_cursor: null
    has_more: boolean
    type: "page_or_database"
    page_or_database: null
    request_id: string
  }

  export interface Articles extends Result {
    properties: Article
  }

  export interface Projects extends Result {
    properties: Project
  }

  export interface Works extends Result {
    properties: Work
  }

  export interface Educations extends Result {
    properties: Education
  }

  export interface Result {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: UserRef
    last_edited_by: UserRef
    cover: unknown
    icon: unknown
    parent: Parent
    archived: boolean
    in_trash: boolean
    url: string
    public_url: unknown
  }

  export interface UserRef {
    object: string
    id: string
  }

  export interface Parent {
    type: string
    database_id: string
  }

  // === Reusable building blocks ===

  export interface TextContent {
    content: string
    link: unknown
  }

  export interface Annotations {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }

  export interface RichText {
    type: string
    text: TextContent
    annotations: Annotations
    plain_text: string
    href: unknown
  }

  export interface Title {
    id: string
    type: string
    title: RichText[]
  }

  export interface RichTextField {
    id: string
    type: string
    rich_text: RichText[]
  }

  export interface Image {
    id: string
    type: string
    files: Files[]
  }

  export interface Files {
    name: string
    type: string
    file: ImageFile
  }

  export interface ImageFile {
    url: string
    expiry_time: string
  }

  // === Properties ===

  export interface Article {
    date: RichTextField
    slug: RichTextField
    description: RichTextField
    title: Title
  }

  export interface Project {
    type: RichTextField
    slug: RichTextField
    url: RichTextField
    description: RichTextField
    title: Title
  }

  export interface Education {
    slug: RichTextField
    date: RichTextField
    url: RichTextField
    title: Title
    certificate: Image
    location: RichTextField
  }

  export interface Work {
    slug: RichTextField
    description: RichTextField
    date: RichTextField
    title: Title
  }
}
