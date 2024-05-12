export interface IResource {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IResourceData[]
  support: {
    url: string
    text: string
  }
}

export interface IResourceData{
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}
