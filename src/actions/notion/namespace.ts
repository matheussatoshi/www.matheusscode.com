export namespace Notion {
  export interface MappedProjects {
    image: string;
    slug: string;
    url: string;
    title: string;
  }

  export interface MappedArticles {
    media: string;
    date: string;
    slug: string;
    description: string;
    title: string;
  }

  export interface Projects extends Result {
    properties: Project;
  }

  export interface Articles extends Result {
    properties: Article;
  }

  export interface Result {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: UserRef;
    last_edited_by: UserRef;
    cover: any;
    icon: any;
    parent: Parent;
    archived: boolean;
    in_trash: boolean;
    url: string;
    public_url: any;
  }

  export interface UserRef {
    object: string;
    id: string;
  }

  export interface Parent {
    type: string;
    database_id: string;
  }

  export interface Project {
    image: Image;
    slug: RichTextField;
    url: RichTextField;
    title: Title;
  }

  export interface Article {
    media: Image;
    date: RichTextField;
    slug: RichTextField;
    description: RichTextField;
    title: Title;
  }

  export interface Title {
    id: string;
    type: string;
    title: RichText[];
  }

  export interface RichTextField {
    id: string;
    type: string;
    rich_text: RichText[];
  }

  export interface Image {
    id: string;
    type: string;
    files: Files[];
  }

  export interface Files {
    name: string;
    type: string;
    file: ImageFile;
  }

  export interface ImageFile {
    url: string;
    expiry_time: string;
  }

  export interface RichText {
    type: string;
    text: TextContent;
    annotations: Annotations;
    plain_text: string;
    href: any;
  }

  export interface TextContent {
    content: string;
    link: any;
  }

  export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  }
}
