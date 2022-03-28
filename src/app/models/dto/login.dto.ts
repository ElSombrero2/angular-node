
export interface LoginDto{
    username: string
    password: string
}

export interface LoginResponseDto{
    username: string
    password: string
    token: string
    key: string
}