export interface IUsers {
  data: IUsersData[]
  page: number
  per_page: number
  total: number
  total_pages: number
  support: {
    url: string
    text: string
  }
}
export interface IUsersData{
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}


