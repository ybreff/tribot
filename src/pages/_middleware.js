import { NextResponse } from 'next/server'

export async function middleware(request, ev) {
  const url = request.nextUrl.clone()
  
  const response = await fetch(url.href)
  const status = response.status

  if (status === 404)
    url.pathname = '/notfound'
  return  NextResponse.rewrite(url)
}